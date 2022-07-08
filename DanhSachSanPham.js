import React,{useState} from 'react'
// import dataPhone from './dataPhone.json'
import { Row, Card, Button, Col } from 'react-bootstrap'
import ModalSanPham from './ModalSanPham'


export default function DanhSachSanPham(props) {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([]);

  const updateCart = (item) =>{
    let sp = {
      maSP: item.maSP,
      hinhAnh:item.hinhAnh,
      tenSP: item.tenSP,
      soLuong: 1,
      donGia: item.giaBan
    }
    let check = cart.findIndex((element) => element.maSP === sp.maSP);
    if (check !== -1){
      cart[check].soLuong++;
    } else {
      cart.push(sp);
      let newCart = [...cart];
      setCart(newCart);
    }
  }

  const deleteCart = (maSP) =>{
    let check = cart.findIndex((element) => element.maSP === maSP);
    cart.splice(check,1);
    let newCart = [...cart];
    setCart(newCart);
  }

  const tangSoLuong = (maSP) => {
    let check = cart.findIndex((element) => element.maSP === maSP);
    cart[check].soLuong++;
    let newCart = [...cart];
    setCart(newCart);
  }

  const giamSoLuong = (maSP) => {
    let check = cart.findIndex((element) => element.maSP === maSP);
    cart[check].soLuong--;
    if (cart[check].soLuong < 0){
      cart.splice(check,1);
    }
    let newCart = [...cart];
    setCart(newCart);
  }

  const demSoLuong = () => {
   return cart.reduce((tongSoLuong, spGioHang, index) => {
      return tongSoLuong += spGioHang.soLuong;
  }, 0).toLocaleString();
  }
    const renderProducts = () => {
        return props.dataPhone.map((item, index) => {
            return (
                <Col xs='4' key={`${index}`} className='mb-4'>
                    <Card style={{ width: '60%', height: '32rem' }} className='mx-auto'>
                        <Card.Img src={item.hinhAnh} />
                        <Card.Body>
                            <Card.Title><h3>{item.tenSP}</h3></Card.Title>
                            <Card.Subtitle><h5>{item.giaBan.toLocaleString()}$</h5></Card.Subtitle>
                            <Button variant='success' onClick={() => { props.setItem(item) }} className='me-2'>Xem chi tiết</Button>
                            <Button variant='warning' onClick={() => {updateCart(item)}} >Thêm giỏ hàng</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }
    return (
        <div>
            <h1 className='text-center'>DANH SÁCH SẢN PHẨM</h1>
            <h2 style={{cursor:'pointer'}} className='text-end me-5' onClick={() => {setShow(true) }}>({demSoLuong()})Giỏ hàng</h2>
            <Row>
                {renderProducts()}
            </Row>
            <ModalSanPham item={cart} show={show} setShow={setShow} deleteCart={deleteCart} tangSoLuong={tangSoLuong} giamSoLuong={giamSoLuong}/>
        </div>
    )
}
