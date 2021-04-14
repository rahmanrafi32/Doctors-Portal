import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infosData =[
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklin, NY 1003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+1569654516',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="w-75 row">
            {
                infosData.map(info =><InfoCard info={info}/>)
            }
            </div>
        </div>
    );
};

export default BusinessInfo;