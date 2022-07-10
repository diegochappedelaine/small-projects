import React from 'react';
import { Bin2Desc } from 'projects';
import { Layout } from 'components';
import { binaryToDescRoute } from 'core';

const Index = () => (
  <Layout title={binaryToDescRoute.title}>
    <Bin2Desc />
  </Layout>
);

export default Index;
