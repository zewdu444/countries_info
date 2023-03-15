import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

function Detail() {
  const countryDetail = useSelector((state) => state.countrydetail.detailstore);
  return (
    <Box sx={{ bgcolor: '#4db6ac', mt: 8 }}>
      { countryDetail.length > 0 ? (
        <Grid container spacing={0}>
          <Grid item xs={6} sm={6} xl={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1, minHeight: 240, maxHeight: 240,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 110,
                  maxWidth: 150,
                  borderRadius: 2,
                  mt: 8,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                src={countryDetail[0].flag}
                alt={countryDetail[0].name}
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div" color="white" align="center">
                  Flag
                </Typography>
              </CardContent>

            </Card>
          </Grid>
          <Grid item xs={6} sm={6} xl={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1, minHeight: 240, maxHeight: 240,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 130,
                  width: 'auto',
                  pt: 6,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                src={countryDetail[0].coatOfArms}
                alt={countryDetail[0].name}
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div" color="white" align="center">
                  Coat of Arms
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} xl={12}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#00897b', m: 1,
              }}
            >
              {/* official name */}
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="h6"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  {countryDetail[0].name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* population */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Population:
                  {' '}
                  {' '}
                  {countryDetail[0].population.toLocaleString('en-US')}
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          {/* capital city */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Capital City:
                  {' '}
                  {' '}
                  {countryDetail[0].capital}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Timezone */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Timezone:
                  {' '}
                  {' '}
                  {countryDetail[0].timezones}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Region */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Region:
                  {' '}
                  {' '}
                  {countryDetail[0].region}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Total Area */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Total Area:
                  {' '}
                  {' '}
                  {countryDetail[0].area.toLocaleString('en-US')}
                  {' '}
                  KM
                  <sup>2</sup>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* startOfWeek */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Start of a Week:
                  {' '}
                  {' '}
                  {countryDetail[0].startOfWeek}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Language */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{
                    mb: -2,
                    mt: -1,
                  }}
                >
                  Languages:
                  {' '}
                  {' '}
                  {`${Object.values(countryDetail[0].languages)} ,` }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Maps */}
          <Grid item xs={12} sm={12} lg={6}>
            <Card
              variant="outline"
              sx={{
                bgcolor: '#26a69a', m: 1,
              }}
            >
              <CardContent sx={{ mt: 2, p: 0 }}>
                <Typography
                  variant="body2"
                  component="div"
                  color="white"
                  align="center"
                  sx={{ mb: -2, mt: -1 }}
                >
                  Map:
                  {' '}
                  {' '}
                  <a target="_blank" href={countryDetail[0].maps} rel="noreferrer">
                    {countryDetail[0].maps}

                  </a>

                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      ) : (
        (
          <Typography
            variant="h6"
            color="white"
            align="center"
            sx={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Please Press Back
          </Typography>
        )
      )}
    </Box>
  );
}

export default Detail;
