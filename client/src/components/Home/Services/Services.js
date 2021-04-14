import React from 'react';
import Floride from '../../../images/001-dental.png';
import Cavity from '../../../images/tooth (1).png';
import Whitening from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData =[
    {
        title: 'Floride Treatement',
        img:Floride
    },
    {
        title: 'Cavity Filling',
        img: Cavity
    },
    {
        title: 'Teeth Whitening',
        img:Whitening
    },
]
const Services = () => {
    return (
        <section>
            <div className='text-center'>
                <h5 style={{color:'#1cc7c1'}}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className="w-75 row">
            {
                serviceData.map(data =><ServiceDetail data={data}/>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;