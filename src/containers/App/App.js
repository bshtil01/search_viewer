import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './../../components/NavBar/NavBar';
import TabList from './../TabList/TabList';
// import TempCont from './../TempCont/TempCont';

class App extends React.Component  {
    state = { videos: [], selectedVideo: null };

    render() {
        return (
            <div>
                <NavBar />
                <Container >
                    {/* <TempCont /> */}
                    <TabList />
                </Container>
            </div>
        )
    }
}

export default App;