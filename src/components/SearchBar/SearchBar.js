import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    button: {
        margin: "auto",
        justifySelf: 'center'
    },
    grid: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
  });

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { term: '' };
    }
    

    onInputChange = event => {
        this.setState({term: event.target.value})
    }
    onFormSubmit = event => {
        event.preventDefault();
        if(this.state.term){
            this.props.onFormSubmit(this.state.term);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <Grid container>
                    <Grid item xs={9} className={classes.grid}>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Type here"
                            fullWidth
                            margin="normal"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            variant="outlined"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3} className={classes.grid}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<SearchIcon />}
                            onClick={this.onFormSubmit}
                        >
                            Search
                        </Button>

                    </Grid>
                </Grid>
            </form>
        )   
    }
}

export default withStyles(styles)(SearchBar);