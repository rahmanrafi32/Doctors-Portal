import React from 'react';

const ServiceDetail = ({data}) => {
    return (
        <div className='col-md-4 text-center mt-5'>
            <img src={data.img} style={{height:'70px'}} alt=""/>
            <h5 className='m-3'>{data.title}</h5>
            <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex cumque magnam necessitatibus beatae repudiandae.</p>
        </div>
    );
};

export default ServiceDetail;