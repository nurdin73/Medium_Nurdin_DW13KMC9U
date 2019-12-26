import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Header from "../Component/headerNewStory";
import {
  Container,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import Axios from "axios";
const token = localStorage.getItem("token");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      title: "",
      content: "",
      image: "",
      category_id: ""
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/categories"
    }).then(res => {
      this.setState({ categories: res.data });
    });
  }

  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  onChangeContent = event => {
    this.setState({ content: event.target.value });
  };
  onChangeCategory = event => {
    this.setState({ category_id: event.target.value });
  };
  onChangeImage = event => {
    this.setState({ image: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    Axios({
      method: "post",
      url: "http://localhost:5000/api/v1/article",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        title: this.state.title,
        content: this.state.content,
        image: this.state.image,
        category_id: this.state.category_id
      }
    }).then(send => {
      if (send.data.success !== false) {
        alert("success add article");
        window.location.href = "http://localhost:3000/newStory";
      } else {
        alert(send.data.message);
      }
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Container style={{ marginTop: "40px" }}>
          <form
            autoComplete="no"
            id="myForm"
            onSubmit={this.onSubmit}
            noValidate
          >
            <div>
              <TextField
                id="filled-textarea"
                label="Title"
                placeholder="Title.."
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: 20 }}
                value={this.state.title}
                onChange={this.onChangeTitle}
                required
              />
            </div>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.category_id}
                    onChange={this.onChangeCategory}
                  >
                    {this.state.categories.map(category => {
                      return (
                        <MenuItem value={category.id}>{category.name}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-textarea"
                  label="Link image"
                  placeholder="Link image.."
                  multiline
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: 20 }}
                  value={this.state.image}
                  onChange={this.onChangeImage}
                  required
                />
              </Grid>
            </Grid>
            <CKEditor
              editor={ClassicEditor}
              data="input your content"
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ content: data });
              }}
              value={this.state.content}
              // onChange={this.onChangeContent}
            />
            <Button
              variant="contained"
              size="large"
              type="submit"
              style={{
                backgroundColor: "black",
                color: "#fff",
                marginTop: "10px"
              }}
            >
              Publish
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
