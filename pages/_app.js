import {ChakraProvider} from '@chakra-ui/react';
import Head from 'common/components/Head';
import React from 'react';
import {useFathom} from 'common/hooks';

const App = (props) => {
  const {Component, pageProps = {}} = props;

  useFathom();

  return (
    <ChakraProvider>
      <Head />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
