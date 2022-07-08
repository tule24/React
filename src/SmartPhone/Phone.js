import React from 'react'

export default function Phone(props) {
  let { hinhAnh, tenSP } = props.item;
  return (
    <div className='phone-item'>
      <img src={require(`${hinhAnh}`)} alt='img' />
      <div className='card-body'>
        <h5 className='card-title'>{tenSP}</h5>
        <a href='#1' className='btn btn-info mr-3' onClick={() => props.handleClick(props.item)}>Show Info</a>
        <a href='#1' className='btn btn-success' onClick={() => props.handleBuy(props.item)}>Thêm giỏ hàng</a>
      </div>
    </div>
  )
}
