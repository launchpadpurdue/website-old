import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { ListItem, ListItemText, Drawer, Link } from '@mui/material';

const data = [
    {name: "About us", link: "/"},
    {name: "Previous projects", link: "/"},
    {name: "Testimonials", link: "/"},
    {name: "Meet the team", link: "/"},
    {name: "Contact us", link: "/"},
    {name: "For Sponsors", link: "/sponsorship"},
];

function NavBar() {
    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
          {data.map((item, index) => (
            <Link 
                to={item.link} 
                color="neutral"
                level="h3"
                underline="hover"
                variant="plain"
                key={index}
                >
                    {item.name}<br></br>
            </Link>
            // <ListItem button key={index}>
            //   <ListItemText primary={item.name} />
            // </ListItem>
          ))}
        </div>
      );
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                            {getList()}
                        </Drawer>
                        <Button color="inherit">LaunchPad</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
  }
  
  export default NavBar;
  