import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  SkipPreviousIcon,
  PlayArrowIcon,
  SkipNextIcon,
} from "@mui/material";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import SkipNextIcon from "@material-ui/icons/SkipNext";

const MediaControlCard = () => {
  return (
    <Card>
      <div>
        <CardContent>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div>
          <IconButton aria-label="previous"></IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon />
          </IconButton>
          <IconButton aria-label="next"></IconButton>
        </div>
      </div>
      <CardMedia
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
};

export default MediaControlCard;
