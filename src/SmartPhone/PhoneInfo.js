import React from 'react'

export default function PhoneInfo(props) {
    let {maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh} = props.item;
    console.log(props.item);
  return (
    <div className='d-flex'>
        <table className='table info-table table-hover'>
            <tbody>
                <tr>
                    <th>Mã Sản Phẩm</th>
                    <td>{maSP}</td>
                </tr>
                <tr>
                    <th>Tên Sản Phẩm</th>
                    <td>{tenSP}</td>
                </tr>
                <tr>
                    <th>Màn Hình</th>
                    <td>{manHinh}</td>
                </tr>
                <tr>
                    <th>Hệ Điều Hành</th>
                    <td>{heDieuHanh}</td>
                </tr>
                <tr>
                    <th>Camera Trước</th>
                    <td>{cameraTruoc}</td>
                </tr>
                <tr>
                    <th>Camera Sau</th>
                    <td>{cameraSau}</td>
                </tr>
                <tr>
                    <th>RAM</th>
                    <td>{ram}</td>
                </tr>
                <tr>
                    <th>ROM</th>
                    <td>{rom}</td>
                </tr>
                <tr>
                    <th>Giá Bán</th>
                    <td>{giaBan}</td>
                </tr>
            </tbody>
        </table>
        <div className='info-img'>
            {hinhAnh ? <img src={require(`${hinhAnh}`)} alt='phone' className='img-fluid'/> : null}
        </div>
    </div>
  )
}
