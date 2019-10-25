import React from 'react';
import Grid from '@material-ui/core/Grid';

import ImageItem from './../../components/ImageItem/ImageItem';
import VideoItem from '../../components/VideoItem/VideoItem';

const ResultList = ({ items, type, onSelect }) => {
    let renderedList = [];
    if (items && items.length === 0){
        return renderedList;
    }
    if (type === "video"){
        renderedList = items.map((item, index) => {
            return <Grid key={index} item xs={4}><VideoItem key={item.id.videoId} item={item} onSelect={onSelect} /></Grid>;
        });
    } else if (type === "images"){
        renderedList = items.map((item, index) => {
            return <Grid key={index} item xs={6}><ImageItem key={item.title} item={item} onSelect={onSelect} /></Grid>;
        });
    }
    return renderedList;
};

export default ResultList;