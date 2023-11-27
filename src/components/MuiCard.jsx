import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imageA from './Images/imgageforbank1.jpg'
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 460,height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageA}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Banking
          </Typography>
          <Typography variant="body2" color="text.secondary">
          "Your security is our top priority."
          "Bank with confidence, your assets are protected."
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}