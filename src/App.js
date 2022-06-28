import React from 'react';

import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import Landing from './Landing';

import LotteryTime from './LotteryTime';
import KashName from './KashName';
import FriendKash from './FriendKash';
import CounterTicket from './CounterTicket';
import MainBank from './MainBank';

import DrawTime from './DarwTime';
import Bankpage from './Bankpage';
import SucsesBank from './SucsesBank';
import EndLevel from './EndLevel';
import Login from './Login';

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
         

            <Route exact path="/MainPage/:id">
              <MainPage />
            </Route>
            <Route exact path="/LotteryTime/:id">
              <LotteryTime />

            </Route>
            <Route exact path="/Landing/:id">
              <Landing />

            </Route>
        
            <Route exact path="/Bankpage/:id">
              <Bankpage />

            </Route>
            <Route exact path="/SucsesBank/:id">
              <SucsesBank />

            </Route>
            <Route exact path="/MainBank/:id">
              <MainBank />

            </Route>
            <Route exact path="/KashName/:id">
              <KashName />

            </Route>
            <Route exact path="/FriendKash/:id">
              <FriendKash />

            </Route>
            <Route exact path="/CounterTicket/:id">
              <CounterTicket />

            </Route>
            <Route exact path="/DrawTime/:id">
              <DrawTime />

            </Route>
            <Route exact path="/EndLevel/:id">
              <EndLevel />

            </Route>
            <Route exact path="Login">
              <Login />

            </Route>
          
        </Router>

      </div>
    );
  }
}

export default App;
