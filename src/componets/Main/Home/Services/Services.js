import React from 'react';
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import wheatening from '../../../../images/wheatening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name:'fluoride treatment',
        img : fluoride
    },
    {
        name:'cavity filling',
        img : cavity
    },
    {
        name:'teath wheatening',
        img : wheatening
    }
]
const Services = () => {
    return (
        <section className='service-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Service We provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;