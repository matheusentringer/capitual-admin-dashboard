import * as React from 'react';
import { styled as styledMui } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import axios from 'axios';
import { Box, Chip } from '@mui/material';

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h2`
  padding-right: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 10px;
  width: 100%;
`;

const ChartSubTitle = styled.p`
  font-size: 14px;
  color: #71717A;
`;

const StyledTableCell = styledMui(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F9FAFB',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styledMui(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#F9FAFB',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Transactions {
  createdAt: string;
  firstName: string;
  lastName: string;
  amount: number;
  completed: Boolean;
  id: number;
}

export default function CustomizedTables() {
  const [transactions, setTransactions] = React.useState<Transactions[]>([]);
  const maxShow = 6;

  React.useEffect(() => {
    const getTransactions = async () => {
      const res = await axios.get('https://633740935327df4c43d22bb2.mockapi.io/api/v1/transactions');
      setTransactions(res.data.sort(
        (a: Transactions, b: Transactions) => {
          const dateA = new Date(a.createdAt).valueOf();
          const dateB = new Date(b.createdAt).valueOf();
          return dateA - dateB;
        },
      ));
    };
    getTransactions();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <ChartTitle>
          Transactions
        </ChartTitle>
        <ChartSubTitle>
          This is a list of latest transactions.
        </ChartSubTitle>
      </TitleContainer>
      <TableContainer component={Paper} sx={{ marginRight: '10px' }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TRANSACTION</StyledTableCell>
              <StyledTableCell>DATE & TIME</StyledTableCell>
              <Box component={StyledTableCell} display={{ xs: 'none', md: 'table-cell' }}>AMOUNT</Box>
              <Box component={StyledTableCell} display={{ xs: 'none', md: 'table-cell' }}>STATUS</Box>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.slice(0, maxShow).map((item) => {
              const date = new Date(item.createdAt);
              const key = `${item.lastName} ${item.id}`;
              return (
                <StyledTableRow key={key}>
                  <StyledTableCell component="th" scope="row">
                    Payment from
                    {' '}
                    <b>{`${item.firstName} ${item.lastName}`}</b>
                  </StyledTableCell>
                  <StyledTableCell>{date.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' })}</StyledTableCell>
                  <Box component={StyledTableCell} display={{ xs: 'none', md: 'table-cell' }}>
                    <b>
                      $
                      {item.amount}
                    </b>
                  </Box>
                  <Box component={StyledTableCell} display={{ xs: 'none', md: 'table-cell' }}>
                    {
                      item.completed
                        ? <Chip label="Completed" variant="filled" sx={{ color: '#03543F', backgroundColor: '#DEF7EC', fontWeight: '500' }} />
                        : <Chip label="In progress" variant="filled" sx={{ color: '#1E429F', backgroundColor: '#E1EFFE', fontWeight: '500' }} />
                    }
                  </Box>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
