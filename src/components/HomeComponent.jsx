import React from 'react';
import { useSelector } from 'react-redux';

const HomeComponent = () => {
    const count = useSelector((state) => state.count.value )
    console.log(count)
    return (
        <div className=''>
            {/* <button className='text-9xl text-red-600 border border-black py-1 px-5 inline-block leading-none'>-</button> */}
            <span className='text-9xl text-red-600'>{count}</span>
            {/* <button className='text-9xl text-green-600 border border-black py-1 px-5 inline-block leading-none'>+</button> */}
        </div>
    );
};

export default HomeComponent;