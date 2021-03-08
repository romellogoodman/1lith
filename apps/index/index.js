import {Heading, Link, Text} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';
import React from 'react';

const IndexPage = () => {
  return (
    <div>
      <Heading>1lith.</Heading>
      <Text>A set of open source web tools. Coming soon.</Text>
      <Link href="https://github.com/romellogoodman/1lith" isExternal>
        <Text>
          Codebase <ExternalLinkIcon mx="2px" />
        </Text>
      </Link>
    </div>
  );
};

export default IndexPage;
