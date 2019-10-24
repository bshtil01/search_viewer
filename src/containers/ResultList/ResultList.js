import React from 'react';
import VideoItem from '../../components/VideoItem/VideoItem';
import ImageItem from './../../components/ImageItem/ImageItem';

import Grid from '@material-ui/core/Grid';

const ResultList = ({ items, type }) => {
    let renderedList = [];
    if (items && items.length === 0){
        return renderedList;
    }
    if (type === "video"){
        renderedList = items.map((item, index) => {
            return <Grid key={index} item xs={4}><VideoItem key={item.id.videoId} item={item} /></Grid>;
        });
    } else if (type === "images"){
        renderedList = items.map((item, index) => {
            return <Grid key={index} item xs={6}><ImageItem key={item.title} item={item} /></Grid>;
        });
    }
    return renderedList;
};

export default ResultList;