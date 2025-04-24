import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#03a9f4",
    color: theme.palette.common.white,
    fontSize: '1rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(no, name, price) {
  return { no, name, price };
}

const rows = [
  createData(1, 'Physical Card issuance and reissuance', "500*"),
  createData(2, 'Reactivation of Gift Card', "250*"),
  createData(3, 'ATM- Financial activity charges (Cash withdrawal)', "28 (inclusive of tax)"),
  createData(4, 'ATM- Non-Financial activity charges (Pin Change, Balance enquiry, Mini Statement etc.)', "15 (inclusive of tax)"),
  createData(5, 'Surcharge on Industry Program : Government', "2.5%* or INR 10* whichever is higher"),
  createData(6, 'Surcharge on Industry Program : Fuel', "1%*"),
  createData(7, 'Surcharge on Industry Program : Railways', "INR 10*"),
];

export default function TableComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableContainer
    elevation={14}
      component={Paper}
      sx={{
        maxWidth: '100%',
        overflowX: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        p: isMobile ? 1 : 2,
      }}
    >
      <Table sx={{ minWidth: 600 }} aria-label="responsive table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell>Name of change</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.no}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
