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