import React,{useState} from 'react'
import './css/BgChanger.css'
import BgChangerBtn from '../components/BgChangerBtn'

const BgChanger = () => {
    const [color,setColor] = useState("white")

    return (
        <>
            <div className='bg-change-main' style={{backgroundColor:color}}>
                <div className="btn-cont">
                    <BgChangerBtn name={"Red"}  value="red" handleBtnClick = {() => setColor("red")} />
                    <BgChangerBtn name={"Green"}  value="green" handleBtnClick = {() => setColor("green")} />
                    <BgChangerBtn name={"Blue"}  value="blue" handleBtnClick = {() => setColor("blue")} />
                    <BgChangerBtn name={"Gray"}  value="gray" handleBtnClick = {() => setColor("gray")} />
                    <BgChangerBtn name={"Purple"}  value="purple" handleBtnClick = {() => setColor("purple")} />
                    <BgChangerBtn name={"Pink"}  value="pink" handleBtnClick = {() => setColor("pink")} />
                    <BgChangerBtn name={"Yellow"}  value="yellow" handleBtnClick = {() => setColor("yellow")} />
                    <BgChangerBtn name={"Orange"}  value="orange" handleBtnClick = {() => setColor("orange")} />
                    <BgChangerBtn name={"White"}  value="white" handleBtnClick = {() => setColor("white")} />
                </div>
            </div>
        </>
    )
}

export default BgChanger