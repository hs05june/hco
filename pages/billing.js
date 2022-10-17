import React from 'react';
import {TiSortAlphabeticallyOutline} from 'react-icons/ti';
import{RiNumbersFill} from 'react-icons/ri'
import{AiTwotoneDelete} from 'react-icons/ai'
import Head from 'next/head'

const billing = () => {
  return (
    <>
     <Head>
      <title>AMBITION-BILLING</title>
      <link rel="icon" href="/icon.jpg" />
    </Head>
    <div className='text-[35px] text-dark_heading mt-[10px] pl-[1vw] border-b-[3px] border-black sticky top-[0px] bg-white'>BILLING</div>
    <hr/>
    <div className='mx-3 my-3 flex flex-col md:flex-row'>
        <div className='flex flex-col border-black md:border-r-2 mx-2 md:h-full'>
        <form  className="flex flex-col  text-lg px-2 mx-4">
            <div className="flex flex-row shadow-xl mt-2 mb-1 h-10">
                <div className='py-3 mx-1'><TiSortAlphabeticallyOutline className='text-dark_heading text-xl'/></div>
            <input type="text" className="outline-none border-none ml-1 text-moderate_color w-60" placeholder='Name of Item'/>
            </div>
            <ul className='h-[30vh] md:h-[65vh] text-center rounded-b-md shadow-lg overflow-y-scroll w-72 billingItems m-auto'>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer truncate'>Itezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzms</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
                <li className='bg-light_background py-1 mb-0.5 px-2 hover:cursor-pointer'>Items</li>
            </ul>
            <div className="flex flex-row shadow-xl my-2 h-10 ">
                <div className='py-3 mx-1'><RiNumbersFill className='text-dark_heading text-xl'/></div>
            <input type="number" className="outline-none border-none ml-1 text-moderate_color w-60" placeholder='Quantity of Item'/>
            </div>
            <div className='text-center'><button type='button' className='bg-blue rounded-md mt-3 text-white hover:cursor-pointer hover:bg-button_color shadow-lg px-5 py-2 my-2'>ADD TO BILL</button></div>
        </form>
        </div>
        <div>
            <div className='h-[75vh] overflow-y-scroll my-2'>
            <table className='shadow-lg'>
                <tr className='text-dark_heading bg-light_background rounded-tl-md shadow-lg mb-2 text-xl'>
                    <th className='w-80 text-left px-2 py-1'>NAME</th>
                    <th className='w-40 text-center px-2 py-1'>QUANTITY</th>
                    <th className='w-40 text-center px-2 py-1'>PRICE</th>
                    <th className='w-40 text-center px-2 py-1'>DISCOUNT</th>
                    <th className='w-40 text-center px-2 py-1'>GST</th>
                    <th className='w-40 text-center px-2 py-1'>AMOUNT</th>
                    <th className='w-40 text-center px-2 py-1'>REMOVE</th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
                <tr className='text-moderate_color border-b-[1px] border-black'>
                    <th className='w-80 text-left px-2 py-1'>Chawal</th>
                    <th className='w-40 text-center px-2 py-1'>3</th>
                    <th className='w-40 text-center px-2 py-1'>22</th>
                    <th className='w-40 text-center px-2 py-1'>9</th>
                    <th className='w-40 text-center px-2 py-1'>8</th>
                    <th className='w-40 text-center px-2 py-1'>88</th>
                    <th className='w-40 text-center px-2 py-1 pl-12'><AiTwotoneDelete title='Delete' className='text-delete text-3xl text-center mx-1 p-0.5 hover:cursor-pointer hover:outline'/></th>
                </tr>
            </table>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='border-4 border-moderate_color rounded-lg text-center px-2 py-2 font-bold my-2 mx-2'>TOTAL ITEMS<br/>123</div>
                <div className='border-4 border-moderate_color rounded-lg text-center px-2 py-2 font-bold my-2 mx-2'>TOTAL AMOUNT<br/>₹2344/-</div>
                <button type='button' className='text-xl bg-blue rounded-md mt-3 text-white hover:cursor-pointer hover:bg-button_color shadow-lg px-5 py-2 my-2 mr-5'>MAKE BILL</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default billing