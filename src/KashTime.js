import React from 'react';
import { Statistic, Row, Col } from 'antd';


const { Countdown } = Statistic;
const deadline = Date.now() + 2*1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
class KashTime extends React.Component {
  
  render(){
    return(
<Row gutter={16}>
    <Col span={12}>
     
    </Col>
    <Col span={12}>
  
      <Countdown value={deadline} style={{ marginLeft:-23}} format="DD  :     HH    :    mm    :    ss " />
     <div style={{marginTop:10}}>
     <p className='a' style={{position:'absolute',marginLeft:115}}>ثانیه</p>
     <p className='b' style={{position:'absolute',marginLeft:70}}>دقیقه:</p>
     <p className='c' style={{position:'absolute',marginLeft:22}}>ساعت:</p>
     <p className='d' style={{position:'absolute',marginLeft:-10}}>روز:</p>
     </div>
  
   
      
   
    </Col>
    <Col span={24} style={{ marginTop: 32}}>
     
    </Col>
  </Row>
    )
  }
}
export default KashTime;



