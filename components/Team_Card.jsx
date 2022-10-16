import Image from "next/image"
import Link from "next/link"
import {BsInstagram,BsGithub,BsLinkedin} from "react-icons/bs"

export const Team_Card = (props) => {
  return (
    <div className="flex flex-col w-full h-full max-w-xs items-center text-center mx-6 bg-team_card_color">
        <div className="py-2">
            <Image src="/1.jpg" alt="Image 1"  height="200" width="300"/>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-dark_heading">{props.name}</h1>
            <h3 className="text-lg text-light_heading">{props.role}</h3>
            <p className="text-white px-3">{props.intro}</p>
            <div className="flex flex-row justify-around py-6 px-3">
                <span><Link href={props.instagram}><BsInstagram fontSize="2em" color="var(--dark-heading)"/></Link></span>
                <span><Link href={props.github}><BsGithub fontSize="2em" color="var(--dark-heading)"/></Link></span>
                <span><Link href={props.linkedin}><BsLinkedin fontSize="2em" color="var(--dark-heading)"/></Link></span>
            </div>
            
        </div>
    </div>
  )
}
