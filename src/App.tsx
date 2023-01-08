import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LatestCustomers from './components/LatestCustomers';
import TopProducts from './components/TopProducts';
import Transactions from './components/Transactions';
import Chart from './components/Chart';
import Footer from './components/Footer';

const Container = styled.div`
  background-color: #F9FAFB;
  padding: 10px;
`;

function App() {
  return (
    <div>
      <Header />
      <Grid container sx={{ paddingTop: '60px' }}>
        <Box component={Grid} item md={2} display={{ xs: 'none', lg: 'block' }}>
          <Sidebar />
        </Box>
        <Grid item xs={12} lg={10}>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Chart />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} xl={4} lg={5}>
                <LatestCustomers />
              </Grid>
              <Grid item xs={12} xl={8} lg={7}>
                <TopProducts />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Transactions />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
