import React from 'react'
import { Row, Col, Divider } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };
export default function Country() {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
        </Row>
    )
}
