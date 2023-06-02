import  { useState } from 'react'
import './style.scss'
const SwitchTabs = ({data,onTabChange}) => {
    const [selectedTab,setSelectedTab]=useState(0)
    const [left,setLeft]=useState()
    const activeTab=(tab,index)=>{
     setLeft(index*100)
     setTimeout(()=>{
      setSelectedTab(index)
      onTabChange(tab,index)
     },300)
    }
  return <div className='switchingTabs'>
      <div className='tabItems'>
         {data.map((tab,index)=>(
            <span
             key={index} 
             onClick={()=>activeTab(tab,index)}
             className={`tabItem ${selectedTab === index ? "active" : "" }`}
             >{tab}</span>
         ))}
         <span className='movingBg' style={{left}}></span>
      </div>
    </div>
}
export default SwitchTabs
