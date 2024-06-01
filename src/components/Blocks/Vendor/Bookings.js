import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export const Bookings = () => {
  
  // Sample booking data
  const bookings = [
    { date: '2024-06-01', data: 'Booking 1 details' },
  ];

  return (
    <TableContainer component={Paper} style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className='content-heading'>
        Your Booking
      </h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Booking Date</TableCell>
            <TableCell>Booking Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking, index) => (
            <TableRow key={index}>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};