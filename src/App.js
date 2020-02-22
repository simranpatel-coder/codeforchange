import React, { Component } from 'react';
import logo from './logo.svg';
import { Segment, Button, Header, Icon, Image, Menu, Tab, Statistic} from 'semantic-ui-react';
import './App.css';
class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    const items = [
      { key: 'Home', active: true, name: 'Home' },
      { key: 'Volunteer', name: 'Volunteer' },
      { key: 'Donations', name: 'Donations' },
      { key: 'Contact', name: 'Contact' },
    ]
    return (
      <Menu pointing secondary>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About Us'
          active={activeItem === 'About Us'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Volunteer'
          active={activeItem === 'Volunteer'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Donations'
          active={activeItem === 'Donations'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
const items = [
  { key: 'Home', active: true, name: 'Home' },
  { key: 'Volunteer', name: 'Volunteer' },
  { key: 'Donations', name: 'Donations' },
  { key: 'Contact', name: 'Contact' },
]
const ButtonExampleSocial = () => (
  <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
  </Button>
  </div>
)
const IconExampleCircular = () => (
  <div>
    <Icon circular name='home' />
    <Icon circular color='dark green' name='home' />
    <Icon circular inverted name='home' />
    <Icon circular inverted color='dark green' name='home' />
  </div>
)
const MenuExampleProps = () => <Menu items={items} />
const StatisticExampleStatistic = () => (
  <Statistic>
    <Statistic.Value>804</Statistic.Value>
    <Statistic.Label>Homeless Individuals in Alachua County in 2019</Statistic.Label>
  </Statistic>
)
const StatisticExample = () => (
  <Statistic>
    <Statistic.Value>403</Statistic.Value>
    <Statistic.Label>People Provided Shelther for at St. Francis House in 2019</Statistic.Label>
  </Statistic>
)
const StatisticExamples = () => (
  <Statistic>
    <Statistic.Value>896</Statistic.Value>
    <Statistic.Label>Day Clients Assisted in 2019</Statistic.Label>
  </Statistic>
)
const StatisticExamplessss = () => (
  <Statistic>
    <Statistic.Value>23,000</Statistic.Value>
    <Statistic.Label>Daily Brunch Meals Provided in 2019</Statistic.Label>
  </Statistic>
)
function App() {
  return (
    <Segment style={{height: '100%', backgroundColor: '#D0F0C0'}}>
      <div>
      {/* <div class="pointing secondary vertical">
  <a class="active item">Home</a>
  <a class="item">Volunteer</a>
  <a class="item">Donations</a>
  <a class="item">Contact</a>
</div> */}
<MenuExampleVerticalSecondary />
<div>
  <center>
<i aria-hidden="true" class="home circular inverted icon"></i>
  </center>
</div>
<div>
  <center>
  <i aria-hidden="true" class="dark green home circular inverted icon"></i>
  <i aria-hidden="true" class="home circular inverted icon"></i>
  </center>
</div>
<div>
  <center>
<i aria-hidden="true" class="home circular inverted icon"></i>
  <i aria-hidden="true" class="dark green home circular inverted icon"></i>
  <i aria-hidden="true" class="home circular inverted icon"></i>
  </center>
</div>
<div>
  <center>
<i aria-hidden="true" class="dark green home circular inverted icon"></i>
  <i aria-hidden="true" class="home circular inverted icon"></i>
  <i aria-hidden="true" class="dark green home circular inverted icon"></i>
  <i aria-hidden="true" class="home circular inverted icon"></i>
  </center>
</div>
      <center>
        <h1 size= 'huge'>St. Francis House</h1>
        <Image src='https://i.imgur.com/xT9bsZJ.jpg' width='1000' height= '475' />
      <h2>"Our mission is to empower families with children to transition from homelessness 
        to self sufficiency by providing case management, housing, food, training, 
        and educational resources in a secure environment."
      </h2>
      <div class="ui statistic">
  <div class="value">804</div>
  <div class="label">Homeless People in Alachua County in 2019</div>
</div>
<div class="ui statistic">
  <div class="value">403</div>
  <div class="label">People Provided Shelther for at St. Francis House in 2019</div>
</div>
<div class="ui statistic">
  <div class="value">896</div>
  <div class="label">Day Clients Assisted in 2019</div>
</div>
<div class="ui statistic">
  <div class="value">23,000</div>
  <div class="label">Daily Brunch Meals Provided in 2019</div>
</div>
      <div>
  <button class="ui facebook button">
    <i aria-hidden="true" class="facebook icon"></i>
    Facebook
  </button>
  <button class="ui twitter button">
    <i aria-hidden="true" class="twitter icon"></i>
    Twitter
  </button>
  <button class="ui instagram button">
    <i aria-hidden="true" class="instagram icon"></i>
    Instagram
  </button>
</div>
      </center>
      </div>
       
    </Segment>
  );
}
export default App;