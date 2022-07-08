import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Burger.css'
import { updateBurger } from './BurgerRedux/BurgerSlice'
export default function Burger() {
    const { burger, menu, total } = useSelector(state => state.burger);
    const dispatch = useDispatch();
    const renderBurger = () => {
        let burgerItem = [];
        for (let key in burger) {
            for (let i = 1; i <= burger[key]; i++) {
                burgerItem.push(<div className={`${key}`} key={`${key}-${i}`}></div>)
            }
        }
        return burgerItem;
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8'>
                    <div className='breadTop'></div>
                    {renderBurger()}
                    <div className='breadBottom'></div>
                </div>
                <div className='col-4'>
                    <h3>CHỌN THỨC ĂN</h3>
                    <table className='table-bordered'>
                        <thead>
                            <tr>
                                <th>Thức ăn</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        <button className='btn btn-danger' disabled={burger[item.name] <= 0} onClick={() => dispatch(updateBurger({name: item.name,value: -1}))}>-</button>
                                        <span className='font-weight-bold mx-1'>{burger[item.name]}</span>
                                        <button className='btn btn-success' onClick={() => dispatch(updateBurger({name: item.name,value: 1}))}>+</button></td>
                                    <td>{item.price}$</td>
                                    <td>{item.price * burger[item.name]}$</td>
                                </tr>
                            })}
                            <tr>
                                <td colSpan="4">Total: {total}$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
