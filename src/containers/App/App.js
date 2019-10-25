import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './../../components/NavBar/NavBar';
import TabList from './../TabList/TabList';

class App extends React.Component  {
    state = { videos: [], selectedVideo: null };

    render() {
        return (
            <div>
                <NavBar />
                <Container height="100vh">
                    <TabList />
                </Container>
            </div>
        )
    }
}

export default App;