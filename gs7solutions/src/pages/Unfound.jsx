import React from 'react';
import unfoundImg from "../assets/img/unfoundImg.jpg"

const Unfound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
        <h1 className='text-center p-3'>Oops <br /> la page que vous cherchez est introuvable !</h1>
        <img src={unfoundImg} className='w-[500px] rounded-full h-[500px] object-cover' alt="" />
            
        </div>
    );
};

export default Unfound;