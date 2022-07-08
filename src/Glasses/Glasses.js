import React, { useState } from 'react'
import data from './dataGlasses.json'
import Model from './Model'
import Glass from './Glass'

export default function Glasses() {
    const [glass, setGlass] = useState({
        id: '',
        price: '',
        name: '',
        url: '',
        desc: ''
    });
    const handleClick = (item) => {
        setGlass({...item});
    }
    const renderGlass = () => {
        return data.map((item, index) => {
            return <React.Fragment key={index}>
                <Glass item={item} handleClick={handleClick}/>
            </React.Fragment>
        })
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8 glasses'>{renderGlass()}</div>
                <div className='col-4'><Model glass={glass} /></div>
            </div>
        </div>
    )
}
