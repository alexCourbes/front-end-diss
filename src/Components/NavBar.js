// import {Breadcrumbs, Typography, Link} from "@mui/material";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
// import Menu from "@mui/material/Menu";
// import React from "react";
// import AdbIcon from '@mui/icons-material/Adb';
//
// import { useState } from "react";
// import makeStyles from "@mui/material/styles/makeStyles.js";
//
//
//
// export const NavBar = () => {
//
//     return (
//         <Breadcrumbs aria-label="breadcrumb">
//   <StyledBreadcrumb
//     component="a"
//     href="#"
//     label="Home"
//     icon={<HomeIcon fontSize="small" />}
//   />
//   <StyledBreadcrumb component="a" href="#" label="Catalog" />
//   <StyledBreadcrumb
//     label="Accessories"
//     deleteIcon={<ExpandMoreIcon />}
//     onDelete={handleClick}
//   />
// </Breadcrumbs>
//     )
// }
import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {

    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.fontSize,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.26),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.42),
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
export default function NavBar() {
    return (
        <div role="presentation" onClick={handleClick} style={{position:"absolute",top:"30px",left:"37px"}}>
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
        </div>
    );
}