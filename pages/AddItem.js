import React, { useState } from 'react'
import Draggable from "react-draggable"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import{RiNumbersFill} from 'react-icons/ri'
import {ImPriceTags} from 'react-icons/im';
import {BsCardImage} from 'react-icons/bs';
import {TiSortAlphabeticallyOutline} from 'react-icons/ti';

const AddItem = (props) => {
    const hideAddItem = () =>{
        props.close(false);
    }

    const [name,changeName] = useState("")
    const [quantity,changeQuantity] = useState()
    const [cp,changeCp] = useState()
    const [mrp,changeMrp] = useState()
    const [minimum,changeMinimum] = useState()

    const submitAddItem = () =>{
       console.log(name,quantity,cp,mrp,minimum)
       props.close(false);
    }

  return (
    <Draggable>
    <form className='absolute m-auto z-50 md:top-[3vh] top-[15vh] md:left-[34vw] shadow-xl rounded-md bg-light_color'>
        <div className='flex flex-row justify-between rounded-t-md border-moderate_color border-2'>
            <h1 className='font-serif text-2xl mx-2 text-dark_heading'>ADD ITEM</h1>
            <AiOutlineCloseCircle onClick={hideAddItem} className='text-delete hover:cursor-pointer text-2xl mt-0.5 mr-1 hover:text-red-600'/>
        </div>
        <div className='px-3 py-1 border-2 border-moderate_color'>
        <label htmlFor='name' className='text-lg font-sans mt-3 flex flex-row'><TiSortAlphabeticallyOutline className=' text-dark_heading mt-1.5 mx-1'/>NAME: </label><br/>
        <input value={name} onChange={(e)=>{changeName(e.target.value)}} type='text' name='name' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='name'/><br/>
        <label htmlFor='quantity' className='text-lg font-sans flex flex-row mt-3'><RiNumbersFill className=' text-dark_heading mt-2 mx-1'/>QUANTITY: </label><br/>
        <input value={quantity} onChange={(e)=>{changeQuantity(e.target.value)}} type='number' name='quantity' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='quantity' /><br/>
        <label htmlFor='mrp' className='text-lg font-sans mt-3 flex flex-row'><ImPriceTags className='mx-2 mt-1.5 text-dark_heading'/>MRP: </label><br/>
        <input value={mrp} onChange={(e)=>{changeMrp(e.target.value)}} type='number' name='mrp' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='mrp' /><br/>
        <label htmlFor='cp' className='text-lg font-sans mt-3 flex flex-row'><ImPriceTags className='mx-2 mt-1.5 text-dark_heading'/>COST PRICE: </label><br/>
        <input value={cp} onChange={(e)=>{changeCp(e.target.value)}} type='number' name='cp' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='cp' /><br/>
        <label htmlFor='minimum' className='text-lg font-sans mt-3 flex flex-row'><RiNumbersFill className=' text-dark_heading mt-2 mx-1'/>MINIMUM NEEDED: </label><br/>
        <input value={minimum} onChange={(e)=>{changeMinimum(e.target.value)}} type='number' name='minimum' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='minimum' /><br/>
        <label htmlFor='image' className='text-lg font-sans mt-3 flex flex-row'><BsCardImage className=' text-dark_heading mt-2 mx-1'/>IMAGE: </label><br/>
        <input type='file' name='image' id='image' className='hover:cursor-pointer'/><br/>
        <div className='text-center' onClick={submitAddItem}><button type='button' className='bg-blue rounded-md mt-3 text-white hover:cursor-pointer hover:bg-button_color shadow-lg px-5 py-2 my-2'>ADD ITEM</button></div>
        </div>
    </form>
    </Draggable>
  )
}

export default AddItem