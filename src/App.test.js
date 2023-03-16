import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import store from './redux/store';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Detail from './components/Detail';
import { fetchCountry, searchField } from './redux/home/HomeSlice';
import { fetchCountryDetail } from './redux/detail/DetailSlice';

it('App renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('NavBar page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
        ,
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Hoome page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Detail page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Detail />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Home slicer and reducer check
describe('Country Home redux state tests', () => {
  it('Should initially Country store to an empty Array', () => {
    const state = store.getState().country;
    expect(state.countrystore).toEqual([]);
  });

  it('should Join Mission payload send correct', () => {
    const expectedPayload = { payload: 'ethiopia', type: 'country/searchField' };
    const actualPayload = searchField('ethiopia');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('fetch Country data from API', async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();

    await fetchCountry(url)(dispatchSpy);

    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});

// country Deatai slicer and reducer check
describe('countrty Detail redux state tests', () => {
  it('Should initially Country detail store to an empty Array', () => {
    const state = store.getState().countrydetail;
    expect(state.detailstore).toEqual([]);
  });
  it('fetch Country data from API', async () => {
    const url = 'https://restcountries.com/v3.1/name/ethiopia?fullText=true';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();

    await fetchCountryDetail('ethiopia', url)(dispatchSpy);

    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
