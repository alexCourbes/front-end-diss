

import React, {Component} from "react";
import NavBar from "../Components/NavBar.js";
import {Button, Container, Stack} from "@mui/material";

class HomePage extends Component {
    render() {
        return (
          <div>
             <NavBar/>
              <Container style={{backgroundColor: '#F1C40F'}} maxWidth="100%" >
                  <p>Hello</p>
                  <Stack spacing={2}>
                      <input
                          accept="image/*"

                          style={{ display: 'none' }}
                          id="raised-button-file"
                          multiple
                          type="file"
                      />
                      <label style={{display: 'grid'}} htmlFor="raised-button-file">
                          <Button variant="contained" component="span" color="success" >
                              Upload
                          </Button>
                      </label>

                      <Button variant="contained" color="primary">Translate the Document </Button>
                </Stack>
              </Container>
          </div>
        );
    }
}

export default HomePage;