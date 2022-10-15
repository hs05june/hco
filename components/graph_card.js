import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function graph_card({bg_color,icon,text,amount}) {
  return (
    <div className={`h-[180px] w-[90vw] max-w-[400px] rounded-[25px] m-[15px] py-[20px] px-[20px] flex items-center flex-wrap text-[#FFFFFF]`} style={{background:`var(--${bg_color})`}}> 
       <div>
        <FontAwesomeIcon icon={icon} size="3x" />
        <h3 className='text-[2.5vh] mt-[15px]'>{text}</h3>
        <h2 className='text-[3vh] font-bold'>${amount}</h2>
       </div>
    </div>
  )
}

