import React from 'react'
import headerImage from '../Images/headerImage.png'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='text-center'>
            <img className='w-[80%] md:w-[368px] m-auto mt-0 2xl:mt-10 min-h-[244px]' src={headerImage} alt="Header" />
            <h1 className='text-[28px] max-w-[90%] md:text-[34px] lg:text-[48px] xl:text-[64px] mt-4 text-brown font-bold m-auto'>TruffleLive - Crafting Digital Magic</h1>
            <h2 className='text-[18px] max-w-[90%] md:text-[20px] lg:text-[26px] xl:text-[32px] text-brown font-extrabold m-auto opacity-70'>Where Imagination Meets Innovation in App Development</h2>

            <p className='max-w-[90%] lg:max-w-[840px] text-black font-regular text-left m-auto my-8 md:text-[18px] lg:text-[22px]'>At TruffleLive, we are the driving force behind the creation and distribution of a diverse range of apps that transcend boundaries. While we excel in the realm of casual and fun games, our expertise extends far beyond, covering a myriad of exciting digital experiences. Our passion for innovation and commitment to quality make us the ideal partner for turning your app ideas into reality.</p>

            <div className='flex justify-center gap-4 mb-4'>
                <Link to="/questions"><button className='bg-green py-2 px-4 rounded-[100px] duration-200 text-white text-[18px] hover:bg-green/80'>Questions App</button></Link>
                <Link to="/truffle-slots"><button className='bg-green py-2 px-4 rounded-[100px] duration-200 text-white text-[18px] hover:bg-green/80'>TruffleSlots</button></Link>
            </div>

            <Link to="mailto:support@trufflelive.com"><button className='bg-green py-2 px-4 rounded-[100px] text-white text-[18px] duration-200 hover:bg-green/80'>Contact Us</button></Link>

            <p className='max-w-[90%] m-auto mt-12 text-gray opacity-50'>“Truffle Live Limited” 11/F., Unit B, Winbase Centre, 208 Queen’s Road Central, Sheung Wan, Hong Kong, Phone: <Link to={'tel:+ 852 2157 3121'}>+ 852 2157 3121</Link></p>
            <p className='mt-4 text-gray opacity-50'>© 2023 Truffle Live Limited. All Rights Reserved</p>
        </div>
    )
}

export default Home