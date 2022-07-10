import React, { useState } from 'react'
import { MySelect, MyTextInput } from '../Form/FormHook'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './QuanLyNguoiDung.css'
import { useSelector, useDispatch } from 'react-redux'
import { addListUser, removeListUser, updateListUser } from './redux/QuanLyNguoiDungSlice'

export default function QuanLyNguoiDung() {
    const listUser = useSelector(state => state.quanLyNguoiDung.listUser);
    const dispatch = useDispatch();

    const [currentValue, setCurrentValue] = useState({
        id: '',
        taiKhoan: '',
        hoTen: '',
        matKhau: '',
        email: '',
        soDienThoai: '',
        loaiNguoiDung: '',
    })
    const [check, setCheck] = useState(false);
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-dark text-light'><h5>Danh sách người dùng</h5></div>
                        <div className='card-body'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tài khoản</th>
                                        <th>Họ tên</th>
                                        <th>Mật khẩu</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Loại người dùng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.taiKhoan}</td>
                                                <td>{item.hoTen}</td>
                                                <td>{item.matKhau}</td>
                                                <td>{item.email}</td>
                                                <td>{item.soDienThoai}</td>
                                                <td>{item.loaiNguoiDung}</td>
                                                <td>
                                                    <button className='btn btn-primary btn-sm mr-2' onClick={() => { setCurrentValue(item); setCheck(!check) }}>Edit <i className="fa-solid fa-pen"></i></button>
                                                    <button className='btn btn-danger btn-sm' onClick={() => dispatch(removeListUser(item.id))}>Delete <i className="fa-solid fa-xmark"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <h3 className='text-center text-danger font-weight-bold'>FROM ĐĂNG KÝ</h3>
                    <Formik
                        enableReinitialize
                        initialValues={currentValue}
                        validationSchema={Yup.object({
                            taiKhoan: Yup.string()
                                .matches(/^([a-zA-Z0-9]+$)/, { message: 'Tên tài khoản chỉ được chứa ký tự và số' })
                                .required('Required'),
                            hoTen: Yup.string()
                                .required('Required'),
                            matKhau: Yup.string()
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email')
                                .required('Required'),
                            soDienThoai: Yup.string()
                                .matches(/(^[0-9]+$)/, { message: 'Số điện thoại chỉ được chứa số' })
                                .min(10, 'Số điện thoại ít nhất 10 số')
                                .required('Required'),
                            loaiNguoiDung: Yup.string()
                                .oneOf(['Khách vãng lai', 'Khách quen', 'Khách VIP', 'Khác'], 'Loại người dùng không hợp lệ')
                                .required('Required')
                        })}
                        onSubmit={(values, { resetForm }) => {
                            if (check) {
                                dispatch(updateListUser(values));
                                setCurrentValue({
                                    id: '',
                                    taiKhoan: '',
                                    hoTen: '',
                                    matKhau: '',
                                    email: '',
                                    soDienThoai: '',
                                    loaiNguoiDung: '',
                                })
                                setCheck(!check);
                            } else {
                                dispatch(addListUser(values));
                            }
                            resetForm();
                        }}
                    >
                        <Form>
                            <MyTextInput
                                label="Họ tên"
                                name="hoTen"
                                type="text"
                            />
                            <div className='row'>
                                <div className='col'>
                                    <MyTextInput
                                        label="Email"
                                        name="email"
                                        type="email"
                                    />
                                </div>
                                <div className='col'>
                                    <MyTextInput
                                        label="Số điện thoại"
                                        name="soDienThoai"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <MyTextInput
                                        label="Tài khoản"
                                        name="taiKhoan"
                                        type="text"
                                    /></div>
                                <div className='col'>
                                    <MyTextInput
                                        label="Mật khẩu"
                                        name="matKhau"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <MySelect label="Loại người dùng" name="loaiNguoiDung">
                                <option value="">Chọn loại người dùng</option>
                                <option value="Khách vãng lai">Khách vãng lai</option>
                                <option value="Khách quen">Khách quen</option>
                                <option value="Khách VIP">Khách VIP</option>
                                <option value="Khác">Khác</option>
                            </MySelect>

                            <button className='btn btn-success mt-2 mr-2 font-weight-bold' type='submit' disabled={check}><i className="fa-solid fa-plus"></i> ADD</button>
                            <button className='btn btn-primary mt-2 font-weight-bold' type='submit' disabled={!check}><i className="fa-solid fa-floppy-disk"></i> UPDATE</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}