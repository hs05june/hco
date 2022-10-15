import React, { useState } from 'react'
import {RiNumbersFill} from 'react-icons/ri';
import {ImPriceTags} from 'react-icons/im';
import {AiTwotoneDelete,AiFillEdit} from 'react-icons/ai';
import UpdateItem from './UpdateItem';
import Image from 'next/image';

const StockCard = (props) => {
    var back;
    if(props.category=='sufficient'){
        back = 'linear-gradient(#30c67c,#07f49e)'
    }
    else if(props.category=='less in stock'){
        back = 'linear-gradient(#fbd07c,#e9d022)'
    }
    else if(props.category=='out of stock'){
        back = 'linear-gradient(#f40752,#f9ab8f)'
    }

    const showUpdateForm = () => {
        props.open(true);
        props.update({
            name:props.name,
            price:props.price,
            quantity:props.quantity
        })
    }

  return (
    <>
    <div className='flex flex-col rounded-xl px-3 pb-3 mx-2 my-2 bg-card text-center shadow-lg' style={{background:'linear-gradient(var(--moderate-color),var(--light-background))'}}>
        <span class="inline-block mt-1 py-0.5 px-2 rounded text-white text-xs font-medium tracking-widest w-max" style={{background:back}}>{props.category.toUpperCase()}</span>
    <div className='flex flex-row py-5 px-3  border-b-2 border-b-card_border' >
        <Image src={props.image} height={20} width={80} className='rounded-full border-white border-8 shadow-md'></Image>
    <div className='flex flex-col ml-4' >
        <h2 className=' text-3xl font-serif'>{props.name}</h2>
        <h3 className=' font-sans flex flex-row justify-center'><ImPriceTags className='mx-2 mt-1.5 text-dark_heading'/>MRP: ₹{props.price}/-</h3>
        <h3 className=' font-sans flex flex-row justify-center' ><RiNumbersFill className='mx-2 mt-1.5 text-dark_heading'/>{props.quantity} Items Left</h3>
    </div>
    </div>
    <div className='flex flex-row justify-between mt-4'>
        <div className='flex flex-col'>
        <span className='font-sans'>Last Updated On:</span>
        <span className='font-bold'>{props.update} 123</span>
        </div>
        <div className='flex flex-row text-3xl px-2 mt-4'>
            <AiFillEdit onClick={showUpdateForm} title='Edit' className='text-edit mx-2 p-0.5 hover:cursor-pointer hover:outline'/>
            <AiTwotoneDelete title='Delete' className='text-delete mx-1 p-0.5 hover:cursor-pointer hover:outline'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default StockCard
