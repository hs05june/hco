import Image from "next/image"
import {BsInstagram,BsGithub,BsLinkedin} from "react-icons/bs"
export const Team_Card = () => {
  return (
    <div>
        <div>
            <Image src="/1.jpg" alt="Image 1"  height="200" width="300"/>
        </div>
        <div>
            <h1>John Doe</h1>
            <h3>CEO</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sunt veritatis quas necessitatibus sint, harum ipsa enim distinctio aspernatur dolore fugiat.</p>
            <div>
                <span><BsInstagram/></span>
                <span><BsGithub/></span>
                <span><BsLinkedin/></span>
            </div>
            
        </div>
    </div>
  )
}
