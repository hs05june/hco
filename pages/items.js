import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { GrDiamond, GrFormAdd } from 'react-icons/gr';
import UpdateItem from './UpdateItem';
import StockCard from './StockCard';
import AddItem from './AddItem';

const items = () => {
    const [allItems,changeAllItems] = useState([]);
    const [showAdd,toggleShow] = useState(false); 
    const [updateForm,toggleUpdateForm] = useState(false);
    const showAddItem = ()=>{
        toggleShow(true);
    }
    const [updateProps,changeUpdateProps] = useState({});

  return (
    <div>
            {showAdd && <AddItem close = {toggleShow}/>}
            {updateForm && <UpdateItem props={updateProps} close={toggleUpdateForm}/>}
       <div className={(showAdd || updateForm) ? 'blur select-none pointer-events-none' : ''}>     
      <div className="flex flex-row mx-3 my-3 justify-between">
        <div className='flex flex-col px-3'>
            <div className='text-3xl font-serif drop-shadow-lg font-bold text-dark_heading'>INVENTORY...</div>
            <div className="font-serif text-dark_background">All Stock Items in one page</div>
        </div>
        <div className='flex flex-row justify-end mx-4'>
        <form  className="hidden md:flex flex-row shadow-lg text-lg px-2 mx-4">
            <span className="pt-5 mx-1.5"><FaSearch className='text-dark_heading'/></span>
            <input type="text" className="outline-none border-none ml-0.5 text-moderate_color" placeholder='Search in Inventory'/>
        </form>
        <div title='Add Item'>
            <GrFormAdd onClick={showAddItem} className='text-white text-5xl m-2 p-2 bg-light_background rounded-full hover:cursor-pointer hover:bg-dark_background shadow-lg'/>
        </div>
        </div>
      </div>
      <hr/>
        <form  className="flex md:hidden flex-row shadow-lg text-lg px-2 mx-4 h-8 mt-2">
            <span className="pt-2 mx-1.5"><FaSearch className='text-dark_heading'/></span>
            <input type="text" className="outline-none border-none ml-0.5 text-moderate_color" placeholder='Search in Inventory'/>
        </form>
      <div className='mx-3 my-3' style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',padding:'auto'}}>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='less in stock' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='out of stock' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='sufficient' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='out of stock' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
      </div>
      </div>
    </div>
  )
}

export default items
