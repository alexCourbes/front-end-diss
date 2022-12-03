

import React, {Component} from "react";
import NavBar from "../Components/NavBar.js";
import {Button, Container, Stack} from "@mui/material";
import NavBarStyles from  "../Styles/NavBarStyles.css";

class HomePage extends Component {
    render() {
        return (
          <div  style={{ backgroundColor: "#F9DB6D", paddingBottom: "100px"}}>
             <NavBar/>
              <Container minWidth="20%" style={{paddingTop: "100px"}}>

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


                      <Button   variant="contained" color="primary">Translate the Document </Button>

                </Stack>
              </Container>
          </div>
        );
    }
}

export default HomePage;