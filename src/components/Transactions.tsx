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
import { Chip } from '@mui/material';

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h2`
  padding-right: 10px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px 20px 20px;
  width: 100%;
`

const StyledTableCell = styledMui(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styledMui(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: "#F9FAFB",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {

  const [transactions, setTransactions] = React.useState<any[]>([])
  const maxShow = 6

  React.useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await axios.get("https://633740935327df4c43d22bb2.mockapi.io/api/v1/transactions")
        setTransactions(res.data.sort((a: any, b: any) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()))
      } catch (error) {
        console.log("n foi")
      }
    }
    getTransactions()
  }, [])

  return (
    <Container>
      <TitleContainer>
        <ChartTitle>
          Transactions
        </ChartTitle>
      </TitleContainer>
      <TableContainer component={Paper} sx={{marginRight: "10px"}}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TRANSACTION</StyledTableCell>
              <StyledTableCell>DATE & TIME</StyledTableCell>
              <StyledTableCell>AMOUNT</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.slice(0, maxShow).map((item) => {
              let date = new Date(item.createdAt);
              let key = `${item.lastName} ${item.id}`
              return (
                <StyledTableRow key={key}>
                  <StyledTableCell component="th" scope="row">
                    Payment from <b>{`${item.firstName} ${item.lastName}`}</b>
                  </StyledTableCell>
                  <StyledTableCell >{date.toLocaleString('default', { month: 'short', day:'numeric', year: 'numeric' })}</StyledTableCell>
                  <StyledTableCell ><b>${item.amount}</b></StyledTableCell>
                  <StyledTableCell >
                    {
                      item.completed
                      ? <Chip label="Completed" color="success" variant="filled" />
                      : <Chip label="In progress" color="primary" variant="filled" />
                    }
                  </StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}