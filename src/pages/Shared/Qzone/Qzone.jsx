import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary mt-2 py-4 py-4 text-center rounded'>
            <h4 className='text-start ps-2'>Q-Zone</h4>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    );
};

export default Qzone;