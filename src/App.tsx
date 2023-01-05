import React from 'react'
import Header from './components/Header'
import Grid from '@mui/material/Grid';
import Sidebar from './components/Sidebar';
import LatestCustomers from './components/LatestCustomers';
import TopProducts from './components/TopProducts';
import styled from 'styled-components';
import Transactions from './components/Transactions';
import Chart from './components/Chart';
import Footer from './components/Footer';

const Container = styled.div`
  background-color: #F9FAFB;
  padding: 10px;
`

const App = () => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Container>
          <Grid container>
              <Grid item xs={12}>
                <Chart />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <LatestCustomers />
              </Grid>
              <Grid item xs={12} md={8}>
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
  )
}

export default App