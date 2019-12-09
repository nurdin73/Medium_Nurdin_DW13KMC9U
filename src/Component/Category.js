import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';
// list of items
const list = [
  {
    name: 'Animals',
    target: '/category'
  },
  {
    name: 'Education',
    target: '/category'
  },
  {
    name: 'Jungle',
    target: '/category'
  },
  {
    name: 'Sport',
    target: '/category'
  },
  {
    name: 'Technology',
    target: '/category'
  },
  {
    name: 'Style',
    target: '/category'
  },
  {
    name: 'Human',
    target: '/category'
  },
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, target, selected}) => {
  return(
    <Link to={target} style={{textDecoration:"none"}}>
      <Button style={{color:"#000"}}>
        {text}
      </Button>
    </Link>
  )
};
 
// All items component
// Important! add unique key
export const Menu = (name, target) =>
  list.map(el => {
  return(
    <MenuItem text={el.name} key={el.name} target={el.target} selected={selected} />
  );
});
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
 
class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default App;