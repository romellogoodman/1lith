import {Heading, Text} from '@chakra-ui/react';
import React from 'react';

const DEFAULT_TEXT = 'An error has occurred';
const DEFAULT_TITLE = 'Errrrror';

export const ErrorPage = (props) => {
  const {text = DEFAULT_TEXT, title = DEFAULT_TITLE} = props;

  return (
    <div>
      <Heading>{title}.</Heading>
      <Text>{text}.</Text>
    </div>
  );
};

const Page = (props) => {
  return <ErrorPage />;
};

export default Page;
