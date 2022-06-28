import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import { Card, Col, Row, Progress } from 'antd';
import {AiTwotoneWallet} from 'react-icons/ai';

const Menu = props => {
  return (
    <div>

      <Link to={`/SucsesBank/${props.id}`}>
        <button className="mainbank-btn2">
          <img
            src="data:image/jpeg;base64,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"
            style={{width: 35, height: 35, borderRadius: 50, marginLeft: 5}}
          />
        </button>
      </Link>
    </div>
  );
};

const Menu2 = props => {
  return (
    <div>
      <Link to={`/LotteryTime/${props.id}`}>
        <button className="mainbank-btn1">مشاهده</button>
      </Link>
    </div>
  );
};

const Menu3 = props => {
  return (
    <div>
      <Link to={`/Landing/${props.id}`}>
        <button className="landing-btn1">
          <AiTwotoneWallet
            style={{color: '#c1c7ce', width: 60, height: 50, marginRight: 35}}
          />
        </button>
      </Link>
    </div>
  );
};

class MainBank extends React.Component {
  constructor (props) {
    super (props);
    this.componentDidMount = this.componentDidMount.bind (this);
    this.state = {
      users: [],
    };
  }

  componentDidMount () {
    fetch (`https://lattary.liara.run/funds/`)
      .then (res => res.json ())
      .then (json => {
        this.setState ({
          users: json.result,
        });
      });
  }

  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState ({percent});
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState ({percent});
  };

  render () {
    console.log (this.state.users, 'this is users');
    return (
      <div className="cash-main-page">
        <Card
          className="main-page-wallpaper"
          style={{width: 300, backgroundColor: '#e8edf5'}}
        >
          {this.state.users.map(item => (
            <Menu id={item.id} />
          ))}
          <div>
            <div style={{textAlign: 'right'}}>
              <Row type="flex" justify="end">
                <Col span={4} />
                <Col span={4} />
                <Col span={4}>
                  <h5 className="content1-mainpage" style={{color: '#757678'}}>
                    محمد
                    جواد
                  </h5>
                  <h5 className="content2-mainpage" style={{color: '#757678'}}>
                    موجودی کارت:3
                  </h5>
                </Col>
                <Col span={4} />
              </Row>
              {this.state.users.map (item => (
                <Card
                  className="second-content-card"
                  bordered={true}
                  style={{width: 250}}
                >
                  <div style={{width: 170}}>
                    <div>
                      <h4 className="kash-month">
                        {item.name}
                      </h4>
                      <Menu2 id={item.id} />

                      <Progress percent={this.state.percent} />
                      <p
                        className="kash-month-param-2 text-right"
                        style={{direction: 'rtl'}}
                      >
                        {item.created_at}
                      </p>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmZZkJvOgeKJ3-tWc0tf9pBQs-McFWRGtRtgrNJNtsBdc04zFk"
                        style={{
                          width: 15,
                          height: 15,
                          position: 'absolute',
                          marginLeft: -90,
                          marginTop: -5,
                        }}
                      />
                      <p
                        className="kash-month-param-3 text-left"
                        style={{direction: 'rtl'}}
                      >
                        {item.total} تومان
                      </p>
                      <input type="text" value={item.id} hidden />
                    </div>
                  </div>
                </Card>
              ))}
              <Card
                className="theird-content-card-1"
                bordered={true}
                style={{width: 250, height: 150, backgroundColor: '#1a1c1f'}}
              >
                <div style={{ width: 170 }}>
                  {this.state.users.map(item => (
                    <Menu3 id={item.id} />
                  ))}
                  <div>
                    <p className="main-bank-param1">صندوق خود را افتتاح کنید</p>
                    <p className="main-bank-param2">
                      و دوستان و اشنایان را به ان دعوت کنید
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter (MainBank);
