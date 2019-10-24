import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='subtitle1' color='inherit'>
                        Search Viewer
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;