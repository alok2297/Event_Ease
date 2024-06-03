import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getBookings } from 'Api/services';
export const Bookings = () => {
  const [bookings, setBookingData] = useState([]);
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginEmail = localStorage.getItem('user')
        const data = await getBookings(loginEmail);
        setBookingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])

  return (
    <TableContainer component={Paper} style={{ padding: '20px', maxWidth: '1024px', margin: '0 auto' }}>
      <h1 className='content-heading'>
        Your Booking
      </h1>
      {
        !!bookings && !!bookings.length ?
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Number of Guests</TableCell>
                <TableCell>Number of Rooms</TableCell>
                <TableCell>Function Type</TableCell>
                <TableCell>Function Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>{booking.fullName}</TableCell>
                  <TableCell>{booking.contactNumber}</TableCell>
                  <TableCell>{getFormattedDate(booking.functionDate)}</TableCell>
                  <TableCell>{booking.numberOfGuests}</TableCell>
                  <TableCell>{booking.numberOfRooms}</TableCell>
                  <TableCell>{booking.functionType}</TableCell>
                  <TableCell>{booking.functionTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          :
          <div style={{ textAlign: "center" }}>No booking found</div>
      }
    </TableContainer>
  );
};