import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLuaChon, runGame } from './XucXacRedux/XucXacSlice';

export default function XuLyGame() {
    const { xucXac, luaChonNguoiChoi, ketQua } = useSelector(state => state.xucxac);
    const dispatch = useDispatch();
    const renderLuaChon = () => {
        if(luaChonNguoiChoi === true){
            return "TÀI";
        } else if(luaChonNguoiChoi === false){
            return 'XỈU';
        } 
        return '';
    }
    return (
        <div>
            <div className='d-flex justify-content-around mt-4'>
                <button className='buttonStyle' onClick={() => dispatch(setLuaChon(true))}><h1>TÀI</h1></button>
                <div>{xucXac.map((item, index) => {
                    return <img src={require(`./img/${item}.png`)} alt='xucxac' width='100px'/>
                })}</div>
                <button className='buttonStyle' onClick={() => dispatch(setLuaChon(false))}><h1>XỈU</h1></button>
            </div>
            <div className='text-center'>
                <h2>BẠN CHỌN: <span style={{ fontWeight: 'bolder', color: 'red' }}>{renderLuaChon()}</span></h2>
                <h2>Số bàn thắng: <span style={{ fontWeight: 'bolder', color: 'green' }}>{ketQua[0]}</span></h2>
                <h2>Tổng số lượt chơi: <span style={{ fontWeight: 'bolder', color: 'blue' }}>{ketQua[1]}</span></h2>
                <button className='btn btn-success' onClick={() => dispatch(runGame())}>Play game</button>
            </div>
        </div>
    )
}
