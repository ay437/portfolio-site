import React from 'react';
import HomeLayout from '../components/Layouts/HomeLayout/HomeLayout';
import Layout from '../components/Layouts/Layout/Layout';

function App() {
  return (
    <Layout title="Home">
      <HomeLayout altLayout={false} />
    </Layout>
  );
}

export default App;
