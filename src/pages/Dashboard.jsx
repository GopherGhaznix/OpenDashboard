import React from 'react';
import '../App.css'
import CardKPI from '../components/CardKPI/CardKPI';
function DashboardPage(props) {
    return (
        <div className='p-8 h-full w-full flex '>
            <CardKPI />
        </div>
    );
}

export default DashboardPage;