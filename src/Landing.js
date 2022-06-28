import React from 'react';
import moment from 'moment-jalaali';
import {FaAngleLeft, FaPlus} from 'react-icons/fa';
import {IoIosRemove} from 'react-icons/io';
import ReactPersianDatepicker from '@socit/react-persian-datepicker';
import {Card, Input, Row, Col, Button} from 'antd';
import {withRouter} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: moment() };
    this.incriment = this.incriment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      counter: 1000,
      users: [],
    };
  }

  incriment () {
    this.setState (prevState => {
      return {
        counter: prevState.counter + 1000,
      };
    });
  }
  decrement () {
    this.setState (prevState => {
      return {
        counter: prevState.counter - 1000,
      };
    });
  }

  state = {
    size: 'large',
  };
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

  handleSizeChange = e => {
    this.setState ({size: e.target.value});
  };

  render () {
    const {size} = this.state;
    return (
      <div
        style={{background: '#ECECEC', padding: '30px', textAlign: 'center'}}
      >
        <Row gutter={16}>
          <Col span={8} />
          <Col span={8}>
            {this.state.users.map(item => (
              <Card
                className="contetnt-card"
                style={{ backgroundColor: '#555555', width: 275 }}
              >
                <div className="arow-content1">

                  <FaAngleLeft
                    style={{
                      overflow: 'hidden',
                      marginLeft: '-5rem',
                      fontSize: 26,
                      position: 'absolute',
                      marginTop: -14,
                      color: 'white',
                    }}
                  />
                </div>
                {/* <img
                  src={}
                  style={{ width: 55, height: 50, borderRadius: 50 }}
                /> */}
                <div className="text-left" />
                <div>
                  <h3 className="personal-kash">افتتاح صندوق شخصی</h3>
                </div>
                <div>
                  <Input
                    className="Landing-btn"
                    size="large"
                    placeholder="نام صندوق"
                    style={{
                      width: 205,
                      textAlign: 'center',
                      marginTop: 20,
                      fontSize: 12,
                      marginLeft: 3,
                    }}
                  />
                </div>
                <div>
                  <h3 className="history">تاریخ قرعه کشی</h3>
                </div>
                <div>
                  <ReactPersianDatepicker
                    monthNavigators={{
                      left: <i className="material-icons" />,
                      right: <i className="material-icons" />,
                    }}
                    style={{ backgroundColor: '#b5bcc4' }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: 11, color: '#989ba0' }}>
                    قرعه کشی صندوق های شخصی راس ساعت 18:00<br /> انجام خواهد شد
                </h3>
                </div>

                <Card
                  className="number-card"
                  style={{ width: 205, height: 105, backgroundColor: '#b5bcc4' }}
                >
                  <p style={{ fontSize: 12, marginTop: -11, color: '#6a6a6a' }}>
                    قیمت هر بلیط (تومان)
                </p>

                  <div>
                    <Row type="flex">

                      <Col span={6} order={3}>
                        <button className="btn-plus" onClick={this.incriment}>
                          <FaPlus style={{ marginTop: 3 }} />
                        </button>
                      </Col>
                      <Col span={12} order={2}>
                        <Card
                          style={{
                            width: 100,
                            height: 35,
                            marginTop: 8,
                            marginLeft: -8,
                          }}
                        >
                          <p className="param-1">{this.state.counter}</p>
                        </Card>
                      </Col>
                      <Col span={6} order={1}>
                        <button className="btn-min" onClick={this.decrement}>
                          <IoIosRemove style={{ marginTop: 3 }} />
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Card>
                <div>
                  <Button
                    className="kash-start"
                    type="primary"
                    shape="round"
                    size={size}
                  >
                    افتتاح صندوق
                </Button>
                </div>
              </Card>
            ))}
          </Col>
          <Col span={8} />
        </Row>
      </div>
    );
  }
}
export default withRouter (Landing);
