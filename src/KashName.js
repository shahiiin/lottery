import React from 'react';
import {Button, Card, Radio, Row, Col} from 'antd';
import {FaAngleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Menu = props => {
  return (
    <div>
      <Link to={`/LotteryTime/${props.id}`}>
        <button className="lotterytime-btn">
          <FaAngleLeft
            style={{width: '1.5rem', height: '1.5rem', color: 'white'}}
          />
        </button>
      </Link>
    </div>
  );
};
const Menu2 = props => {
  return (
    <div>
      <Link to={`/EndLevel/${props.id}`}>
        <button className="kashname-btn3">
          ارسال دعوتنامه{' '}
        </button>
      </Link>
    </div>
  );
};

function onChange (checkedValues) {
  console.log ('checked = ', checkedValues);
}

class KashName extends React.Component {
  constructor (props) {
    super (props);
    this.componentDidMount = this.componentDidMount.bind (this);
    this.state = {
      users: [],
    };
  }

  componentDidMount () {
    fetch (`https://lattary.liara.run/funds/${this.props.match.params.id}`)
      .then (res => res.json ())
      .then (json => {
        this.setState ({
          users: json.result,
          loading: false,
        });
      });
  }
  state = {
    value: 1,
  };
  onChange = e => {
    console.log ('radio checked', e.target.value);
    this.setState ({
      value: e.target.value,
    });
  };

  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div className="lottery-body" style={{textAlign: 'center'}}>
        {this.state.users.map (item => (
          <Card
            hoverable
            style={{
              width: 300,
              textAlign: 'center',
              backgroundColor: 'gray',
              height: 610,
            }}
          >
            <div style={{marginTop: 15}}>
              <Menu id={item.id} />

              <h2 className="Lottery-header">{item.name}</h2>
            </div>

            <Card
              bordered={true}
              style={{width: 250, marginTop: 50, borderRadius: 5, height: 470}}
            >
              <div style={{marginLeft: 65}}>
                <Button className="kashname-btn1">محمد علی</Button>
                <Button className="kashname-btn2">محمد جواد</Button>
              </div>

              <hr />

              <Row style={{direction: 'rtl'}}>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Col span={24}>
                    <Radio style={{radioStyle, marginLeft: 133}} value={1}>
                      احمد
                    </Radio>
                  </Col>
                  <Col span={24}>
                    <Radio style={{radioStyle, marginLeft: 124}} value={2}>
                      کامران
                    </Radio>
                  </Col>
                  <Col span={24}>
                    <Radio style={{radioStyle, marginLeft: 141}} value={3}>
                      رضا
                    </Radio>
                  </Col>
                  <Col span={24}>
                    <Radio style={{radioStyle, marginLeft: 125}} value={4}>
                      سامان
                    </Radio>
                  </Col>

                </Radio.Group>
              </Row>

              <div className="kashname-footer">
                <p className="kashname-p1">
                  دوستانتان را به صندوق خود دعوت کنید
                </p>
                <p style={{direction: 'rtl'}} className="kashname-p2">
                  ۵٪ از جایزه افرادی که دعوت کرده اید
                </p>
                <p className="kashname-p3">
                  {' '}در صورت برنده شدن به شما تعلق میگیرد
                </p>

              </div>
              <hr />
              <div>

                <Menu2 id={item.id} />
              </div>
            </Card>

          </Card>
        ))}
      </div>
    );
  }
}
export default withRouter (KashName);
