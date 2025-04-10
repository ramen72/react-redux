import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import HomeComponent from '../components/HomeComponent';
import { decrement, divided, increment, multiple } from '../slices/counter/counterSlice';

const Home = () => {
    const dispatch = useDispatch()
    return (
        <>
        <div className="w-full h-[100vh] flex justify-center items-center gap-x-10 relative">
            <button onClick={()=>dispatch(decrement())} className='text-9xl text-red-600 border border-black py-6 px-10 inline-block leading-none'>-</button>
                <HomeComponent/>
            <button onClick={()=>dispatch(increment())} className='text-9xl text-green-600 border border-black py-6 px-10 inline-block leading-none'>+</button>
            <div className='h-[550px] flex flex-col justify-between absolute left-1/2 -translate-x-[60%]'>
                <button onClick={()=>dispatch(multiple())} className='text-9xl text-red-600 border border-black py-6 px-14 inline-block leading-none'>*</button>
                <button onClick={()=>dispatch(divided())} className='text-9xl text-green-600 border border-black py-6 px-14 inline-block leading-none'>/</button>
            </div>
            <p className='absolute top-5 text-green-600 font-bold text-3xl capitalize'><strong className='text-red-600'>Note: </strong> always divided by 2 and multiple by 2</p>
        </div>
        </>
    );
};

export default Home;