import React, { Component } from "react";
import Header from "../Component/Header";
import ListCategory from "../Component/listCategory";
import { Container } from "@material-ui/core";
import Cat from "../Component/Category";
class Category extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Cat /> */}
        <Container style={{ marginTop: 40 }}>
          <ListCategory />
        </Container>
      </div>
    );
  }
}

export default Category;
