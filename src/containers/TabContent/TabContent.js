import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultList from '../ResultList/ResultList';

const TabContent = props => {
    const {videos, images} = props.data;
    return(
        <>
            <SearchBar onFormSubmit={props.onSearch} />
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Grid container spacing={3}>
                        {/* TODO on select to enlarge */}
                        <Grid key='video-colum' item xs={12}>Videos</Grid>
                        <ResultList items={videos} type={'video'} />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container spacing={3}>
                        <Grid key='image-colum' item xs={12}>images</Grid>
                        <ResultList items={images} type={'images'} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default TabContent;