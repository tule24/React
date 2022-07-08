import React from 'react'

export default function ModalPhone(props) {
  let tongTien = props.listPhone.reduce((total, item) => {
    return total += item.giaBan*item.soLuong;
  }, 0)
  return (
    <div className="modal fade" id="cartModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">CART LIST</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <table>
              <thead>
                <tr>
                  <th>Mã Sản Phẩm</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá Bán</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
            {props.listPhone.map((item, index) => {
              return <tr key={index}> 
              <td>{item.maSP}</td>
              <td>{item.tenSP}</td>
              <td><img src={require(`${item.hinhAnh}`)} alt='cart'/></td>
              <td>{item.giaBan.toLocaleString()}</td>
              <td><button className='btn btn-danger' onClick={() => props.updateCart(index, -1)}>-</button> {item.soLuong} <button className='btn btn-success' onClick={() => props.updateCart(index, 1)}>+</button></td>
              <td>{(item.soLuong*item.giaBan).toLocaleString()}</td>
              </tr>
            })}
            </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <h5 className='total'>Tổng tiền: {tongTien.toLocaleString()} VND</h5>
          </div>
        </div>
      </div>
    </div>

  )
}
