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
        <Breadcrumbs aria-label="breadcrumb">
  <StyledBreadcrumb
    component="a"
    href="#"
    label="Home"
    icon={<HomeIcon fontSize="small" />}
  />
  <StyledBreadcrumb component="a" href="#" label="Catalog" />
  <StyledBreadcrumb
    label="Accessories"
    deleteIcon={<ExpandMoreIcon />}
    onDelete={handleClick}
  />
</Breadcrumbs>
    )
}
