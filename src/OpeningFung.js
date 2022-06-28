import React from 'react';
import {Card, Avatar, Icon, Button} from 'antd';
import {FaUserFriends} from 'react-icons/fa';
import {withRouter} from 'react-router';

class OpeningFung extends React.Component {
  render () {
    return (
      <Card className="wallpaper-card">
        <Card
          className="card-add-user"
          style={{width: 250, textAlign: 'center'}}
        >
          <div>
            <Avatar src=".../Icon/safe.png" />
          </div>
          <div>
            <h3 className="head-cash">نام صندوق با موفقیت افتتاح شد</h3>
          </div>
          <div>
            <p className="param-1-cash">
              از صفحه اصلی میتوانید صندوق خود را مدیریت کنید
            </p>
          </div>
          <div>
            <button className="add-user">
              اشتراک گذاری صندوق
              <FaUserFriends style={{width: 15, marginLeft: 5, marginTop: 2}} />
            </button>
          </div>
          <div>
            <p className="param-2-cash">
              بااستفاده از دکمه بالا میتوانید دوستان خود را دعوت کنید
            </p>
          </div>
          <div className="acsept-btn">
            <Button className="kash-btn" type="primary" shape="round">
              تایید
            </Button>
          </div>
        </Card>
      </Card>
    );
  }
}
export default withRouter (OpeningFung);
