import React from 'react';
import {Button, Card} from 'antd';
import {Link} from 'react-router-dom';
import {GoLock} from 'react-icons/go';
import {FaUserPlus} from 'react-icons/fa';
import {withRouter} from 'react-router';

const Menu = props => {
  return (
    <div>
      <Link to={`/KashName/${props.id}`}>
        <Button
          style={{
            width: 125,
            fontSize: 10,
            color: 'white',
            backgroundColor: '#36617a',
            border: 'none',
            borderRadius: 5,
          }}
        >
          اشتراک گذاری صندوق
        </Button>
        <FaUserPlus
          style={{
            position: 'absolute',
            marginTop: 8,
            marginLeft: -15,
            color: 'white',
          }}
        />
      </Link>
    </div>
  );
};
const Menu2 = props => {
  return (
    <div>
      <Link to={`/LotteryTime/${props.id}`}>
        <Button className="endlevel-btn">تایید</Button>
      </Link>
    </div>
  );
};
class EndLevel extends React.Component {
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
  render () {
    return (
      <div>
        {this.state.users.map(item => (
          <Card className="end-level-card1 text-center" style={{ height: 1000 }}>
            <Card
              className="end-level-card2"
              style={{ width: 205, textAlign: 'center', marginLeft: 12 }}
            >

              <div>
                <GoLock style={{ width: 40, height: 30 }} />
                <h4 style={{ fontSize: 11 }}>{item.name}</h4>
                <h4 style={{ fontSize: 11 }}>با موفقیت افتتاح شد</h4>
                <p style={{ fontSize: 7 }}>
                  از صفحه اصلی صندوق خود را میتوانید مدیریت کنید
              </p>
                <Menu id={item.id} />
                <p style={{ fontSize: 8, marginTop: 8 }}>
                  با استفاده از دکمه بالا میتوانید دوستان خود را
              </p>
                <p style={{ fontSize: 8 }}>به صندوق خود دعوت نمایید</p>
              </div>
            </Card>
            <Menu2 id={item.id} />
          </Card>
        ))}
      </div>
    );
  }
}
export default withRouter (EndLevel);
