import { Col, Row, Statistic } from 'antd';
import React from 'react';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const Prodountdown = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown value={deadline} format="HH:mm:ss:SSS" />
      </Col>
    </Row>
  );
};

export default Prodountdown;