import React from 'react'
import { Col, Card, Table, Row } from 'react-bootstrap'

export default function SanPham(props) {
    const renderItem = () => {
        return (
            <Row>
                <Col xs={4}>
                    <Card style={{ width: '80%', border: 'none', textAlign: 'center' }} className='mx-auto'>
                        <Card.Title>
                            <h1>{props.item.tenSP}</h1>
                        </Card.Title>
                        <Card.Img src={props.item.hinhAnh} variant='bottom' />
                    </Card>
                </Col>
                <Col xs={8} className='mt-5'>
                    <h1>Thông số kỹ thuật</h1>
                    <Table hover className='mt-4' style={{width:'80%'}}>
                        <tbody>
                            <tr>
                                <th>Màn hình</th>
                                <td>{props.item.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{props.item.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{props.item.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{props.item.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{props.item.ram}</td>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <td>{props.item.rom}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
    return (
        <>
            {renderItem()}
        </>
    )
}
