import React from 'react'
import { Modal, Table, Button } from 'react-bootstrap'

export default function ModalSanPham(props) {

    const renderCart = () => {
        return props.item.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td><img src={sp.hinhAnh} alt='img-phone' style={{ height: '10rem', width: '10rem' }} /></td>
                    <td>{sp.tenSP}</td>
                    <td style={{width:'10rem', textAlign:'center'}}>
                        <Button variant='success' className='me-1' onClick={() => {props.giamSoLuong(sp.maSP)}}>-</Button>
                        <span>{sp.soLuong}</span>
                        <Button variant='success' className='ms-1' onClick={() => {props.tangSoLuong(sp.maSP)}}>+</Button></td>
                    <td>{sp.donGia}</td>
                    <td>{(sp.donGia * sp.soLuong)}</td>
                    <td><Button variant='danger' onClick={() => { props.deleteCart(sp.maSP) }}>Xóa</Button></td>
                </tr>
            )
        })
    }
    return (
        <Modal centered size='lg' show={props.show} onHide={() => { props.setShow(false) }}>
            <Modal.Header closeButton>
                <h3>Giỏ hàng</h3>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <tbody>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                        {renderCart()}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => { props.setShow(false) }}>Đóng</Button>
            </Modal.Footer>
        </Modal>

    )
}
