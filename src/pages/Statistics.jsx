import React from 'react';
import ChartLine from '../components/ChartLine/ChartLine';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>gadget | statistics </title>
            </Helmet>
            <div className='h-[260px] bg-[#9538E2] text-white p-10'>
                <h3 className='text-center p-4 text-2xl font-bold'>Statistics </h3>
                <p className='text-center text-sm'> Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all! </p>

            </div>
            <ChartLine></ChartLine>
        </div>
    );
};

export default Statistics;