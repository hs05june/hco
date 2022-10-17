import React,{useState} from 'react';
import Draggable from 'react-draggable';
import {AiFillCloseCircle} from 'react-icons/ai';
import{RiNumbersFill} from 'react-icons/ri'
import {ImPriceTags} from 'react-icons/im';
import {BsCardImage} from 'react-icons/bs';
import {TiSortAlphabeticallyOutline} from 'react-icons/ti';

const UpdateItem = ({props,close}) => {
    const hideAddItem = () =>{
        close(false);
    }

    const [name,changeName] = useState(props.name)
    const [leftInStock,changeleftInStock] = useState(props.leftInStock)
    const [costPrice,changecostPrice] = useState(props.costPrice)
    const [sellPrice,changesellPrice] = useState(props.sellPrice)
    const [alertAt,changealertAt] = useState(props.alertAt)

    const submitUpdateItem = () =>{
        close(false);
       console.log(name,leftInStock,costPrice,sellPrice,alertAt)
    }
  return (
    <Draggable>
    <form className='absolute m-auto z-50 md:top-[3vh] top-[15vh] md:left-[34vw] shadow-xl rounded-md bg-light_color'>
        <div className='flex flex-row justify-between rounded-t-md border-moderate_color border-2'>
            <h1 className='font-serif text-2xl mx-2 text-dark_heading'>UPDATE ITEM</h1>
            <AiFillCloseCircle onClick={hideAddItem} className='text-delete hover:cursor-pointer text-2xl mt-0.5 mr-1 hover:text-red-600'/>
        </div>
        <div className='px-3 py-1 border-2 border-moderate_color'>
        <label htmlFor='name' className='text-lg font-sans mt-3 flex flex-row'><TiSortAlphabeticallyOutline className=' text-dark_heading mt-1.5 mx-1'/>NAME: </label><br/>
        <input value={name} onChange={(e)=>{changeName(e.target.value)}} type='text' name='name' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='name'/><br/>
        <label htmlFor='leftInStock' className='text-lg font-sans flex flex-row mt-3'><RiNumbersFill className=' text-dark_heading mt-2 mx-1'/>leftInStock: </label><br/>
        <input value={leftInStock} onChange={(e)=>{changeleftInStock(e.target.value)}} type='number' name='leftInStock' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='leftInStock' /><br/>
        <label htmlFor='sellPrice' className='text-lg font-sans mt-3 flex flex-row'><ImPriceTags className='mx-2 mt-1.5 text-dark_heading'/>sellPrice: </label><br/>
        <input value={sellPrice} onChange={(e)=>{changesellPrice(e.target.value)}} type='number' name='sellPrice' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='sellPrice' /><br/>
        <label htmlFor='costPrice' className='text-lg font-sans mt-3 flex flex-row'><ImPriceTags className='mx-2 mt-1.5 text-dark_heading'/>COST PRICE: </label><br/>
        <input value={costPrice} onChange={(e)=>{changecostPrice(e.target.value)}} type='number' name='costPrice' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='costPrice' /><br/>
        <label htmlFor='alertAt' className='text-lg font-sans mt-3 flex flex-row'><RiNumbersFill className=' text-dark_heading mt-2 mx-1'/>alertAt NEEDED: </label><br/>
        <input value={alertAt} onChange={(e)=>{changealertAt(e.target.value)}} type='number' name='alertAt' className='h-10 w-96 rounded-ld border-2 border-light_background focus:shadow-lg' id='alertAt' /><br/>
        <label htmlFor='image' className='text-lg font-sans mt-3 flex flex-row'><BsCardImage className=' text-dark_heading mt-2 mx-1'/>IMAGE: </label><br/>
        <input type='file' name='image' id='image' className='hover:cursor-pointer' accept="image/x-png,image/gif,image/jpeg"/><br/>
        <div className='text-center' onClick={submitUpdateItem}><button type='button' className='bg-blue rounded-md mt-3 text-white hover:cursor-pointer hover:bg-button_color shadow-lg px-5 py-2 my-2'>UPDATE ITEM</button></div>
        </div>
    </form>
    </Draggable>
  )
}

export default UpdateItem