import React from 'react';
import { Provider } from 'react-redux';
import FilterableBookTable from './FilterableBookTable';

const Root = ({ store }) => (
  <Provider store={store}>
    <FilterableBookTable />
  </Provider>
);

export default Root;