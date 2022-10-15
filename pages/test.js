import { data } from 'autoprefixer';
import { useState } from 'react';
import axios from 'axios';

export default function test() {

    const [image,setImage]= useState('');
    const[url,seturl]=useState("");
    const handleChange=(e)=>{
        setImage(e.target.files[0]);
    }

    const generateURL=async()=>{
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset',"oj2z6wjo");
        const data = await axios.post(`https://api.cloudinary.com/v1_1/dsp58iis2/image/upload`, formData)
        const {data:{secure_url: url}}=data
        seturl(url)
    }
    return (
    <>
    <input type="file" onChange={handleChange}></input>
    <button onClick={generateURL}>Upload</button>
    {url && <img src={url} />}
    </>
  )
}
