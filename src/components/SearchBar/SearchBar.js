import React from 'react';
import TextField from '@material-ui/core/TextField';

import './SearchBar.scss';

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
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
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
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;