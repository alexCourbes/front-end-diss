import {Breadcrumbs, Typography, Link} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import React from "react";
import AdbIcon from '@mui/icons-material/Adb';

import { useState } from "react";
import makeStyles from "@mui/material/styles/makeStyles.js";



export const NavBar = () => {

    return (
        <AppBar position="absolute">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }} />

                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                MUI
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Core
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>


                </Toolbar>
            </Container>
        </AppBar>
    )
}
