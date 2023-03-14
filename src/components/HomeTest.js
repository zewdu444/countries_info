import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

function HomeTest() {
  return (
    <Box sx={{ bgcolor: '#4db6ac' }}>
      <Card
        sx={{
          maxWidth: '100%', bgcolor: '#4db6ac', display: 'flex',
        }}
        square
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardContent sx={{ flex: '1 0 auto', maxWidth: '40%' }}>
            <CardMedia
              component="img"
              sx={{ height: 120, width: '100%' }}
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              title="green iguana"
            />
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              Lizard
            </Typography>
            <Typography variant="body2" color="white">
              with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Card sx={{ bgcolor: '#26a69a' }} square>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: 120, width: '80%' }}
                  src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles,
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ bgcolor: '#009688' }} square>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: 120, width: '80%' }}
                  src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles,
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

      </Box>
    </Box>
  );
}
export default HomeTest;
