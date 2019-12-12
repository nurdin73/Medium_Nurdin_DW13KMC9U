import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Header from "../Component/headerNewStory";
import { Container, TextField } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ marginTop: "40px" }}>
          <div>
            <TextField
              id="filled-textarea"
              label="Title"
              placeholder="Title.."
              multiline
              variant="outlined"
              fullWidth
              style={{ marginBottom: 20 }}
            />
          </div>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </Container>
      </div>
    );
  }
}

export default App;
