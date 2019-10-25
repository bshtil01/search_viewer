import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { withStyles } from '@material-ui/styles';

import TabPanel from '../../components/TabPanel/TabPanel';
import TabContent from '../TabContent/TabContent';
// import youtube from './../../assets/api/youtube';
// import googleSearch from './../../assets/api/googleSearch';
import { videoResponse, imageResponse } from './../../assets/api/fakeResponce';

const styles = theme => ({
  root: {
        flexGrow: 1,
        backgroundColor: 'rgb(210, 226, 253)',
        display: 'flex',
        height: '100%',
      },
      tabs: {
        borderRight: `1px solid rgb(201, 201, 201)`,
      }
});

class TabList extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
            currentTab : 0,
            tabs: [
                this.createBlankTab(0)       
            ]
        };
    }

    createBlankTab = (index) => {
        return {
            index : index,
            term : '',
            images: [],
            videos: [],
        }
    }

    a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    handleTabChange = (event, newSelectedTab ) => {
        this.setState({currentTab : newSelectedTab});
    };

    handleNewTab = event => {
        const { tabs } = this.state;
        const lastIndex =  tabs !== 'undefined' && tabs.length !== 0? tabs[tabs.length-1].index + 1 : 0 ;

        this.setState(
            state => ({
            tabs: [
                ...state.tabs,
                this.createBlankTab(lastIndex)
            ]
            })
        );
    }

    handleRequest = async term => {
        // const responseYoutube = await youtube.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });

        // const responseGCS = await googleSearch.get( '',{
        //     params: {
        //         q: term
        //     }
        // })
        const responseYoutube = videoResponse;
        const responseGCS = imageResponse;

        const index = this.state.currentTab;
        const changedItem = this.state.tabs.findIndex(tab => tab.index === index);
        // const changedItem = this.state.tabs.findIndex(tab => tab.index === this.state.tabs.findIndex(data => data.index === tab.index));
        const tabs = this.state.tabs;
        console.log(index,changedItem)
        tabs[changedItem] = {
            ...tabs[changedItem],
            index : index,
            term : term,
            //TODO add data after changing to real response
            videos: responseYoutube.items,
            images: responseGCS.items,
        };
        this.setState({tabs});
    }
    handleClose = () => {
        console.log(1)
        let stateArr = [...this.state.tabs];
        stateArr.splice(this.state.tabs.findIndex(tab => tab.index === this.state.tabs[this.state.currentTab].index),1);
        this.setState(state => ({
            tabs: stateArr,
            currentTab: state.currentTab-1
        }));
        if (this.state.tabs.length <= 1  ){
            this.setState({
                currentTab: 0
            })
        };
    }


    render(){
        const { classes } = this.props;
        const { tabs, currentTab } = this.state;
        
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        {/* tab component  */}
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={currentTab}
                            onChange={this.handleTabChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        > 
                            {/* render the tab list  */}
                            {this.state.tabs.map(
                                tab => {
                                    let label = `Tab  ${ tab.index + 1}`;
                                    if (tab.term !== ''){
                                        label = tab.term.length > 7 ? ` ${tab.term.slice(0,7)}...` : tab.term.slice(0,10)
                                    }
                                    return(
                                        <Tab 
                                            key={tab.index} 
                                            label = {label} 
                                            {...this.a11yProps(tab.index)} 
                                        />
                                    )
                                }
                            )}
                            {/* render element for adding new tab  */}
                            <Tab 
                                key={this.state.tabs.length} 
                                icon={<ControlPointIcon />} 
                                {...this.a11yProps(this.state.tabs.length)} 
                                onClick={this.handleNewTab}
                            />;
                        </Tabs>
                    </Grid>
                    <Grid item xs={10}>
                    {/* render tab panels  */}
                    {this.state.tabs.map(tab => {
                        return( 
                        <TabPanel key={tab.index} value={currentTab} index={tabs.findIndex(data => data.index === tab.index)}>
                            <TabContent 
                                key={tab.index} 
                                data={tabs.find(data => data.index === tab.index)}
                                onFormSubmit={this.handleRequest} 
                                onClose={this.handleClose} 
                            />
                        </TabPanel>
                        )
                    })}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(TabList);