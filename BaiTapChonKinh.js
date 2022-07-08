import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import dataGlasses from './dataGlasses.json';
import './BaiTapChonKinh.css';

export default function BaiTapChonKinh() {
    const [name, setName] = useState(dataGlasses[0].name);
    const [price, setPrice] = useState(dataGlasses[0].price);
    const [desc, setDesc] = useState(dataGlasses[0].desc);
    const [img, setImg] = useState(dataGlasses[0].url);

    const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
        from {
            width:0;
        } to {
            width: 200px;
        }
    }`

    const onClickHandle = (glasses) => {
        setName(glasses.name);
        setPrice(glasses.price);
        setDesc(glasses.desc);
        setImg(glasses.url);
    }
    const backgroundDiv = {
        background: 'url(https://media.istockphoto.com/vectors/fashion-background-02-vector-id1213445384)'
    }
    const glass = {
        position: 'absolute',
        maxHeight: '5rem',
        maxWidth: '10rem',
        top: 100,
        left: 79,
        opacity: 0.8,
        animation: `animChangeGlasses${Date.now()} 1s`
    }
    const renderGlass = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img key={index} src={glassesItem.url} alt='glasses'
                className='img-thumbnail mx-2 my-4' style={{ maxHeight: '100px', maxWidth: '200px', cursor: 'pointer' }}
                onClick={() => { onClickHandle(glassesItem) }} />
        })
    }
    return (
        <Container fluid style={backgroundDiv} className='px-0'>
            <style>
                {keyFrame}
            </style>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', minHeight: '1000px' }}>
                <header className='py-4 text-center text-white' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}><h1>TRY GLASSES APP ONLINE</h1></header>
                <div className='d-flex flex-row justify-content-center'>
                    <Card style={{ width: '20rem', margin: '1rem 10rem 2rem' }} >
                        <Card.Img variant='top' src='./glassesImage/model.jpg' style={{ position: 'relative' }}></Card.Img>

                        <img src={img} className='glassesStyle' alt='glasses' style={glass} />
                        <Card.Body>
                            <Card.Title><h2>{name}</h2></Card.Title>
                            <Card.Subtitle><h4>{price}$</h4></Card.Subtitle>
                            <Card.Text style={{ textAlign: 'justify' }}>{desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <Container className='px-5 mb-2 d-flex justify-content-around flex-wrap bg-light'>
                    {renderGlass()}
                </Container>
            </div>
        </Container>
    )
}
