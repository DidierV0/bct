import React from 'react'
import Header from '../common/Header'
import Logo from '../../assets/logo.png'

const Home = () => {
  return (
    <div className=' w-screen h-screen bg-mainBlack'>
        <Header/>
        <div className=' w-screen flex justify-around items-center' style={{ height: 'calc(100vh - 100px)' }}>
            <div className=' w-1/2 h-full flex justify-center items-center border border-red-500'>
                <img src={Logo} alt="" className=' size-2/3 ' />
            </div>
            <div className=' w-1/2'>
                <div className=' h-80 w-96 bg-mainOrange'></div>
                <div className=' text-white text-4xl bg-mainOrange w-fit py-3 px-6 rounded-xl font-bold '>
                    <h1>Commandez</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home