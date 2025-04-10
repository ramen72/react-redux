import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import HomeComponent from '../components/HomeComponent';
import { decrement, increment } from '../slices/counter/counterSlice';

const Home = () => {
    const dispatch = useDispatch()
    return (
        <>
        <div className="w-full h-[100vh] flex justify-center items-center gap-x-6">
            <button onClick={()=>dispatch(decrement())} className='text-9xl text-red-600 border border-black py-1 px-5 inline-block leading-none'>-</button>
                <HomeComponent/>
            <button onClick={()=>dispatch(increment())} className='text-9xl text-green-600 border border-black py-1 px-5 inline-block leading-none'>+</button>
        </div>
        </>
    );
};

export default Home;