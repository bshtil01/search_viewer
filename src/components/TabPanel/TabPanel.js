import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    panelContent: {
        height: '100%',
        margin: '0'
        // overflowY: 'scroll'
        // paddingRight: '15px'
    }
  }));

const TabPanel = props => {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            className = {classes.panelContent}
            {...other}
        >
            <Box p={3}>{
                children
            }</Box>
        </Typography>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;