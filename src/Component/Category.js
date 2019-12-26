import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import Axios from "axios";
import slugify from "slugify";

// list of items
const list = [
  {
    name: "Animals",
    target: "/category"
  },
  {
    name: "Education",
    target: "/category"
  },
  {
    name: "Jungle",
    target: "/category"
  },
  {
    name: "Sport",
    target: "/category"
  },
  {
    name: "Technology",
    target: "/category"
  },
  {
    name: "Style",
    target: "/category"
  },
  {
    name: "Human",
    target: "/category"
  }
];
var lists = [];
const url = "/category/";
const url1 = "/articles";
console.log(lists, "ini lists");
// One item component
// selected prop will be passed
const MenuItem = ({ text, target, selected }) => {
  return (
    <Link to={url + slugify(target) + url1} style={{ textDecoration: "none" }}>
      <Button style={{ color: "#000" }}>{text}</Button>
    </Link>
  );
};

// All items component
// Important! add unique key
export const Menu = (name, target) =>
  list.map(el => {
    return (
      <MenuItem
        text={el.name}
        key={el.name}
        target={el.target}
        selected={selected}
      />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
    this.state = {
      menu: []
    };
  }
  componentDidMount() {
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/categories"
    }).then(res => {
      console.log(res.data);
      this.setState({ menu: res.data });
    });
  }
  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    // const menu = this.menuItems;
    console.log(lists);
    return (
      <div className="App">
        <Container>
          <ScrollMenu
            data={this.state.menu.map(item => {
              return (
                <MenuItem
                  text={item.name}
                  key={item.name}
                  target={item.name}
                  selected={selected}
                />
              );
            })}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </Container>
      </div>
    );
  }
}

export default App;
