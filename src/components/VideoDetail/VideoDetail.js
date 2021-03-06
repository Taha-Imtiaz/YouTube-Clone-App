import React from 'react'
import {Paper, Typography} from '@material-ui/core'
const VideoDetail = (props) => {
    var {video} = props;
    if(!video) return <div>Loading...</div>
    console.log(video)

const vidoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation = {6} style= {{height: "70%"}}>
                <iframe src= {vidoSrc} frameBorder="0" height ="100%" width = "100%" title = "Video Player"></iframe>
            </Paper>
            <Paper elevation = {6} style= {{padding: "15px"}}>
    <Typography variant = "h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant = "subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant = "subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail
