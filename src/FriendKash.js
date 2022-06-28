import React from 'react';
import { Button, Card, Row, Col, Input, Menu, Dropdown } from 'antd';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import smaple from './sample (2).json';
import { withRouter } from 'react-router-dom';

const Menu4 = props => {
  return (
    <div>
      <Link to={`/LotteryTime/${props.id}`}>
        <button className="friendkash-btn2">
          <FaAngleLeft style={{ width: '1.5rem', height: '1.5rem' }} />
        </button>
      </Link>
    </div>
  );
};

const menu = (
  <Menu className="dropdown">
    <Menu.Item className="text-center">
      <p style={{ color: 'black' }}>2578</p>
    </Menu.Item>
    <Menu.Item>
      <p style={{ color: 'black' }}>2478</p>
    </Menu.Item>
    <Menu.Item>
      <p style={{ color: 'black' }}>548</p>
    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu className="dropdown">
    <Menu.Item className="text-center">
      <p style={{ color: 'black' }}>5843</p>
    </Menu.Item>
    <Menu.Item>
      <p style={{ color: 'black' }}>984786</p>
    </Menu.Item>
    <Menu.Item>
      <p style={{ color: 'black' }}>120</p>
    </Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu className="dropdown">
    <Menu.Item className="text-center">
      <p style={{ color: 'black' }}>85210</p>
    </Menu.Item>
    <Menu.Item>
      <p style={{ color: 'black' }}>584769</p>
    </Menu.Item>
    <Menu.Item>
      <p style={{ color: 'black' }}>456321</p>
    </Menu.Item>
  </Menu>
);

class FriendKash extends React.Component {
  checkstatus = id => {
    switch (id) {
      case '23':
        return {
          id: 27,
          name: 'صندوق روزانه',
          members: {
            name: 'اکبر ',
            lastname: 'شهرام',
            fullname: 'اکبری'
          },
          count_a: 14,
          count_b: 18,
          count_c: 11,
          price: 8000,
          total: 0,
          created_at: '2020-05-22T21:01:07.933507+04:30',
          winner: null,
        };
      case '21':
        return {
          id: 21,
          name: 'صندوق هفتگی',
          members: {
            name: 'امیر ',
            lastname: 'حبیبی',
            fullname: 'ایرجی'
          },

          count_a: 15,
          count_b: 13,
          count_c: 11,
          price: 7000,
          total: 0,
          created_at: '2020-04-25T22:01:02.281747+04:30',
          winner: null,
        };
      case '2':
        return {
          id: 3,
          name: 'صندوق ماهانه',
          members: {
            name: 'مهدی ',
            lastname: 'سامی',
            fullname: 'علی'
          },

          count_a: 16,
          count_b: 12,
          count_c: 10,
          price: 1000,
          total: 40000,
          created_at: '2020-04-03T22:22:19.494556+04:30',
          winner: null,
        };
    }
  };

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch(`https://lattary.liara.run/funds/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json.result,
          loading: false,
        });
      });
  }
  render() {
    console.log(this.props.match.params.id, 'hello');
    const data = this.checkstatus(this.props.match.params.id);
    return (
      <div className="lottery-body" style={{ textAlign: 'center' }}>
        {this.state.users.map(item => (
          <Card
            hoverable
            style={{
              width: 300,
              textAlign: 'center',
              backgroundColor: 'gray',
              height: 580,
            }}
          >
            <div style={{ marginTop: 15 }}>
              <IoMdPersonAdd
                style={{
                  fontSize: 27,
                  marginLeft: 205,
                  color: 'white',
                  marginTop: 6,
                }}
              />
              <Menu4 id={item.id} />
              <h2 className="Lottery-header">نام صندوق</h2>
            </div>
            <Card
              bordered={true}
              style={{ width: 250, marginTop: 40, borderRadius: 5, height: 420 }}
            >
              <div style={{ marginLeft: 65 }}>
                <p style={{ direction: 'rtl' }}> {item.member} نفر شرکت کننده:</p>
              </div>
              <hr />
              <Row style={{ direction: 'rtl' }}>

                <Col span={24}>
                  <p style={{ marginTop: 10, marginLeft: 30 }}>
                    {data.members.name} ..............................
                  </p>
                  <div
                    style={{
                      marginRight: 170,
                      position: ' absolute',
                      marginTop: -30,
                    }}
                  >

                    <Dropdown overlay={menu}>
                      <Button
                        style={{
                          width: 'min-content',
                          height: 'min-content',
                          position: ' absolute',
                          borderRadius: 50,
                          backgroundColor: '#085a68',
                          color: 'black',
                          border: 'none',
                        }}
                      >
                        {data.count_a}
                      </Button>
                    </Dropdown>
                  </div>
                </Col>

                <Col span={24}>
                  <p style={{ marginTop: 10, marginLeft: 30 }}>
                    {data.members.lastname} ..............................
                  </p>
                  <div
                    style={{
                      marginRight: 170,
                      position: ' absolute',
                      marginTop: -32,
                    }}
                  >

                    <Dropdown
                      overlay={menu2}
                      style={{ width: 5, height: 5, position: ' absolute' }}
                    >
                      <Button
                        style={{
                          width: 'min-content',
                          height: 'min-content',
                          position: ' absolute',
                          borderRadius: 50,
                          backgroundColor: '#085a68',
                          color: 'black',
                          border: 'none',
                        }}
                      >
                        {data.count_b}
                      </Button>
                    </Dropdown>
                  </div>
                </Col>
                <Col span={24}>
                  <p style={{ marginTop: 10, marginLeft: 30 }}>
                    {data.members.fullname} ..............................
                  </p>
                  <div
                    style={{
                      marginRight: 170,
                      position: ' absolute',
                      marginTop: -32,
                    }}
                  >

                    <Dropdown
                      overlay={menu3}
                      style={{ width: 5, height: 5, position: ' absolute' }}
                    >
                      <Button
                        style={{
                          width: 'min-content',
                          height: 'min-content',
                          position: ' absolute',
                          borderRadius: 50,
                          backgroundColor: '#085a68',
                          color: 'black',
                          border: 'none',
                        }}
                      >
                        {data.count_c}
                      </Button>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </Card>
          </Card>
        ))}
      </div>
    );
  }
}
export default withRouter(FriendKash);
