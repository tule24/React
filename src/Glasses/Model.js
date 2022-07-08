import React from 'react'

export default function Model(props) {
    let {price, name, url, desc} = props.glass;
    return (
        <div className='model'>
            {url ? <img src={require(`${url}`)} alt='glass'/> : null}
            <div className='info'>
                <h4>Name: <span>{name}</span></h4>
                <h5>Price: <span>{price}</span></h5>
                <h5>Desc: <span>{desc}</span></h5>
            </div>
        </div>
    )
}
