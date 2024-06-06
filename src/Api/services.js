const email = localStorage.getItem('user')

export const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response
};

export const registerUser = async (email, password) => {
  const response = await fetch('http://localhost:4000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const loginVendor = async (email, password) => {
  const response = await fetch('http://localhost:4000/api/vendors/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const registeVendor = async (email, password, brandName, city, vendorType, phoneNumber) => {
  const response = await fetch('http://localhost:4000/api/vendors/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, brandName, city, vendorType, phoneNumber }),
  });
  return response;
};

// export const uploader = async (images) => {
//   const formData = new FormData();
//   formData.append('file', images);
//   const response = await fetch('http://localhost:4000/api/vendors/uploader', {
//     method: 'POST',
//     body: formData
//   });
//   return response;
// };

export const booking = async ({email, userEmail, fullName, contactNumber, functionDate, numberOfGuests, numberOfRooms, functionType, functionTime}) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, userEmail, fullName, contactNumber, functionDate, numberOfGuests, numberOfRooms, functionType, functionTime }),
    });

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message);
    }

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const setBanquet = async ( {name, city, address, fixedCapacity, floatingCapacity, rooms, decorPrice, roomPrice, banquet, album, type, pricing }) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/set-banquet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, city, address, fixedCapacity, floatingCapacity, rooms, decorPrice, roomPrice, banquet, album, type, pricing }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const setMenuPrices = async ({nonVegPrice, vegPrice}) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/set-menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, nonVegPrice, vegPrice }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const setVendorInfo = async ({email, brandName, contactPersonName, additionalEmail, contactNumber}) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/set-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, brandName, contactPersonName, additionalEmail, contactNumber }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const setPhotos = async ({cover, album}) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/set-photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, cover, album }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getBookings = async (email) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/get-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response?.ok) {
      return [];
    }

    const data = await response.json();
    return data?.data?.bookings;
  } catch (error) {
    return []
  }
};

export const getMenuPrices = async (email) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/get-prices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response?.ok) {
      return [];
    }

    const data = await response.json();
    return data?.data;
  } catch (error) {
    return []
  }
};

export const getVendorInfo = async (email) => {
  try {
    const response = await fetch('http://localhost:4000/api/vendors/get-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response?.ok) {
      return [];
    }

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getBanquet = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/vendors/get-banquet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getPhotos = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/vendors/get-photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getVenues = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/vendors/get-venues`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getVenue = async (slug) => {
  try {
    const response = await fetch(`http://localhost:4000/api/vendors/get-venue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getAdmin = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/vendors/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};



