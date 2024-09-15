import React from 'react'
import ab1 from '../../assets/ab1.png'
import ab2 from '../../assets/ab2.png'
import ab3 from '../../assets/ab3.png'
import About from '../About/About.jsx'
const data = [
    {
        title:"About Us",
        img:ab1,
        desc:"Bring your designs to life with Butler Leather’s Prototyping services for private labels. This step is crucial to developing a new bag & accessories collection before making a production order.",
        delivarables:true,
        class:"lg:flex-row flex-col"
    },
    {
        title:'Selecting Suppliers',
        img:ab2,
        desc:"Our clients’ needs are most important when it comes to sourcing materials like leather, fabrics, and trims as is finding the right factory to produce their products. We work scrupulously at selecting and proposing options to our clients in order to achieve the best conditions and establish the best possible price.",
        delivarables:false,
          class:"lg:flex-row-reverse flex-col"

    },
    {
        title:'Market Research',
        img:ab3,
        desc:"We attend all the major trade shows and fairs within Europe and East Asia related to the fashion industry in order to keep up with the ever-changing trends and establish new contacts",
        delivarables:false,
        class:"lg:flex-row flex-col"
    }
]
const AboutUs = () => {
  return (
    <div>
          {
            data.map((item)=>{
                return <About title={item.title} img={item.img} desc={item.desc} delivarables = {item.delivarables} className={item.class}/>
            })
          }
    </div>
  )
}

export default AboutUs