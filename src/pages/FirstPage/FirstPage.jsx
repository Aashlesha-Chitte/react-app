import React from 'react';
// import * as PropTypes from 'prop-types';
import { Button } from '../../components/Button';
import { useQuery } from '@apollo/client';

import { GET_PRODUCTS } from '../../graphql/queries/products/index';

const FirstPage = (props) => {
    const {
        loading, error, data,
      } = useQuery(GET_PRODUCTS, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'network-only',
      });
      console.log('????????????????????????????????', loading, error, data,);
    return (
        <>
            <h1> Hello this is  firstpage</h1>
            <Button />
        </>
    );
};


export default FirstPage;
