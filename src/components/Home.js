import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import { fetchCountry } from '../redux/home/HomeSlice';
import { fetchCountryDetail, selectedCountryAction } from '../redux/detail/DetailSlice';

function Home() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.country.status);
  const countries = useSelector((state) => state.country.countrystore);
  const searchInput = useSelector((state) => state.country.searchresult);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountry());
    }
  }, [status, dispatch]);
  // filtered countries
  const displayCountries = () => {
    if (searchInput === undefined) {
      return countries;
    }

    const filtered = countries.filter(
      (country) => country.country_name.toLowerCase().includes(searchInput.toLowerCase()),
    );

    return filtered;
  };
  const totalPopulation = () => {
    const population = countries.map((country) => country.country_population);
    const result = population.reduce((sum, num) => sum + num);
    return result.toLocaleString('en-US');
  };
  const HomeCardHandler = (e) => {
    dispatch(selectedCountryAction(e.target.id));
    dispatch(fetchCountryDetail(e.target.id));
    navigate('/detail');
  };
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
          <CardContent sx={{ flex: '1 0 auto', maxWidth: '30%' }}>

            <LanguageIcon sx={{
              minHeight: 120, minWidth: 150, color: 'white',
            }}
            />
          </CardContent>

          <CardContent sx={{ mt: 4 }}>
            <Typography gutterBottom variant="h6" component="div" color="white" sx={{ fontWeight: 600 }}>
              COUNTRIES:
              {' '}
              {' '}

              {countries.length > 0 ? countries.length : 'Loading'}
            </Typography>
            <Typography variant="body1" color="white" sx={{ fontWeight: 300 }}>
              Population:
              {' '}
              {countries.length > 0 ? totalPopulation() : 'Loading'}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {
            displayCountries().length > 0 ? (
              displayCountries().map((country) => (
                <Grid item xs={6} sm={3} xl={3} key={country.country_id}>
                  <Card variant="outline" sx={{ bgcolor: '#26a69a', minHeight: 180, m: 1 }}>
                    <CardActionArea
                      id={country.country_name}
                      sx={{ minHeight: 180, zIndex: '2' }}
                      onClick={(e) => { HomeCardHandler(e); }}
                    >
                      <CardMedia
                        id={country.country_name}
                        component="img"
                        sx={{
                          height: 80,
                          width: 150,
                          borderRadius: 2,

                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        src={country.country_flag}
                        alt={country.country_id}
                      />
                      <CardContent id={country.country_name}>
                        <Typography id={country.country_name} gutterBottom variant="h7" component="div" color="white" align="center">
                          {country.country_name}
                        </Typography>
                        <Typography id={country.country_name} variant="body2" color="white" align="center">
                          Population:
                          {' '}
                          {' '}
                          {country.country_population.toLocaleString('en-US')}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )))
              : (
                <Typography
                  variant="h6"
                  color="white"
                  align="center"
                  sx={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                  No country found please search again
                </Typography>
              )
        }
        </Grid>
      </Box>
    </Box>
  );
}
export default Home;
