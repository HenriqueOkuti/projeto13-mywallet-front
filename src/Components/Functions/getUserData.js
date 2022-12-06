import axios from 'axios';

export default function getUserData(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let recieved = false;
  let userData = {
    name: 'default',
    transactionHistory: [],
    token: token,
  };

  function HandleSuccess(event) {
    const recievedData = event.data;
    userData = {
      name: recievedData.name,
      transactionHistory: recievedData.transactionHistory,
      token: token,
    };
    console.log(userData);
    recieved = true;
  }

  axios
    .get('http://localhost:5000/transactions', config)
    .then((event) => HandleSuccess(event))
    .catch((event) => console.log(event));

  if (recieved) {
    console.log(userData);
    return userData;
  } else {
    return userData;
  }
}
