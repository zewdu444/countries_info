import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
// import { useDispatch, useSelector } from 'react-redux';

function Detail() {
  return (
    <Box sx={{ bgcolor: '#4db6ac', mt: 8 }}>
      <Card
        sx={{
          maxWidth: '100%', bgcolor: '#4db6ac', display: 'flex',

        }}
        square
        variant="none"
      >
        <Box sx={{
          display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto',
        }}
        >
          <CardContent sx={{ flex: '1 0 auto', maxWidth: '30%' }} />

          <CardContent sx={{ mt: 4 }}>
            <Typography gutterBottom variant="h6" component="div" color="white" sx={{ fontWeight: 600 }}>
              COUNTRIES:
            </Typography>
            <Typography variant="body1" color="white" sx={{ fontWeight: 300 }}>
              Population:
            </Typography>
          </CardContent>
        </Box>
      </Card>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>

          <Grid item xs={6} sm={3} xl={3}>
            <Card variant="outline" sx={{ bgcolor: '#26a69a', minHeight: 180, m: 1 }}>
              <CardActionArea sx={{ minHeight: 180, zIndex: '2' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 80,
                    width: 150,
                    borderRadius: 2,

                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div" color="white" align="center" />
                  <Typography variant="body2" color="white" align="center">
                    Population:
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Typography
            variant="h6"
            color="white"
            align="center"
            sx={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            No country found please search again
          </Typography>

        </Grid>
      </Box>
    </Box>
  );
}

export default Detail;
