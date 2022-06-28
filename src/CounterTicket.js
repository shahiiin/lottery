import React from 'react';
import {withRouter} from 'react-router';

import {Button, Card, Row, Col} from 'antd';
import {FaChevronUp, FaChevronDown, FaAngleLeft} from 'react-icons/fa';

class CounterTicket extends React.Component {
  constructor (props) {
    super (props);
    this.componentDidMount = this.componentDidMount.bind (this);

    this.incriment = this.incriment.bind (this);
    this.decrement = this.decrement.bind (this);

    this.state = {
      counter: 1,
      users: [],
    };
  }

  componentDidMount () {
   
    fetch (`https://lattary.liara.run/funds/${this.props.match.params.id}`)
      .then (res => res.json ())
      .then (json => {
        this.setState ({
          users: json.result,
          loading: true,
        });
      });
  }

  incriment () {
    this.setState (prevState => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  decrement () {
    this.setState (prevState => {
      return {
        counter: prevState.counter - 1,
      };
    });
  }

  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState ({size: e.target.value});
  };

  render () {
    return (
      <div className="lottery-body" style={{textAlign: 'center'}}>
        {this.state.users.map (item => (
          <Card
            hoverable
            style={{
              width: 300,
              textAlign: 'center',
              backgroundColor: 'gray',
              height: 580,
            }}
          >
            <div style={{marginTop: 15}}>
              <FaAngleLeft
                style={{
                  overflow: 'hidden',
                  marginLeft: '-8rem',
                  fontSize: 26,
                  position: 'absolute',
                  marginTop: -30,
                  color: 'white',
                }}
              />

              <h2 className="Lottery-header">{item.name} </h2>
            </div>

            <Card
              bordered={true}
              style={{width: 250, marginTop: 150, borderRadius: 5, height: 200}}
            >
              <div style={{marginLeft: 65}}>
                <div className="counterticket-param">
                  <p
                    style={{
                      direction: 'rtl',
                      marginRight: 55,
                      color: '#848172',
                    }}
                  >
                جمع کل:
                  </p>
                  <h4
                    className="text-left"
                    style={{
                      marginTop: -7,
                      fontSize: 15,
                      marginRight: 55,
                      direction: 'rtl',
                    }}
                  >
                    {item.price * this.state.counter}
                  </h4>
                </div>
                <Row type="flex" style={{marginTop: 30, marginBottom: 20}}>
                  <Col span={12} order={2}>
                    <button className="btn-up" onClick={this.incriment}>
                      <FaChevronUp />
                    </button>
                    <Card
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: -22,
                        marginTop: -40,
                      }}
                    >

                      <p className="param-counter-1">{this.state.counter}</p>
                    </Card>
                  </Col>
                  <Col span={6} order={1}>
                    <button className="btn-down" onClick={this.decrement}>
                      <FaChevronDown />
                    </button>

                  </Col>

                </Row>
                <p
                  style={{
                    direction: 'rtl',
                    marginRight: 5,
                    color: '#848172',
                    fontSize: 12,
                  }}
                >
                  شانس برنده شدن شما:
                </p>
              </div>

            </Card>

            <Button
              style={{
                marginTop: 50,
                width: 250,
                height: 55,
                color: '#aa8e07',
                borderRadius: 12,
              }}
            >
              خرید بلیط
            </Button>

          </Card>
        ))}
      </div>
    );
  }
}
export default withRouter (CounterTicket);
