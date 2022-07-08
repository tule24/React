/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Phone from './Phone'
import ModalPhone from './ModalPhone'
export default function Phones(props) {
  const [listPhone, setListPhone] = useState([]);

  const handleBuy = (item) => {
    let newItem = {
      maSP: item.maSP,
      tenSP: item.tenSP,
      hinhAnh: item.hinhAnh,
      giaBan: item.giaBan,
      soLuong: 1
    }
    let newListPhone = [...listPhone]; 
    const check = newListPhone.findIndex(ele => ele.maSP === newItem.maSP)
    check >= 0 ? newListPhone[check].soLuong++ : newListPhone.push(newItem);
    setListPhone([...newListPhone]);
  }

  const updateCart = (index, quantity) => {
    let newListPhone = [...listPhone]; 
    newListPhone[index].soLuong += quantity;
    if(newListPhone[index].soLuong <= 0){
      newListPhone.splice(index,1);
    }
    setListPhone([...newListPhone]);
  }

  let quantity = listPhone.reduce((total, item) => {
    return total += item.soLuong;
  }, 0)
  return (
    <div className='container-fluid'>
      <div className='d-flex'>
        {props.data.map((item, index) => {
          return <Phone item={item} handleClick={props.handleClick} key={index} handleBuy = {handleBuy}/>
        })}
      </div>
      <button className='btn btn-primary cart' data-toggle="modal" data-target="#cartModal" style={{cursor:'pointer'}}><i className="fa-solid fa-cart-shopping mr-3"></i>Giỏ hàng({quantity})</button>
      <ModalPhone listPhone={listPhone} updateCart={updateCart}/>
    </div>
  )
}
