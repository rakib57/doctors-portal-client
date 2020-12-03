import React from 'react';
import { faClock, faMapMarker,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';


const InfoData = [
    {
        title: 'Opening Hours',
        description: 'We are opn in 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn NY, 10003',
        icon: faMapMarker,
        background: 'dark' 
    },
    {
        title: 'Contract Us',
        description: '+13252862456',
        icon: faPhoneVolume,
        background: 'primary' 
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                InfoData.map (info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;