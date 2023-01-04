

import React, {Component} from "react";
import NavBar from "../../Components/NavBar.js";
import {Button, Container, Stack} from "@mui/material";
import NavBarStyles from "../../Styles/NavBarStyles.css";
import HomePageGrid from "./HomePageGrid";

class HomePage extends Component {

    state = {selectedFileName: []};
    handleselectedFile = event => {
        this.setState({
            //**** added line below ****//
            selectedFileName: event.target.files[0]
        });
    };

    render() {
        return (
            <>
          <div  style={{ backgroundColor: "#F9DB6D", paddingBottom: "100px"}}>
             <NavBar/>
              <Container minWidth="20%" style={{paddingTop: "100px"}}>

                  <Stack spacing={2}>
                      <input
                          accept="image/*"
                          onChange={this.handleselectedFile}
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

                      <p>{this.state.selectedFileName.name}</p>
                </Stack>
              </Container>
          </div>
        <div>
            <HomePageGrid/>
        </div>
    </>
        );
    }
}

export default HomePage;