import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
    textAlign: 'center',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
      padding: '5px',
      borderRadius: '5px',
      outlineColor: 'blue',
      border: '1px solid #222',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
      color: '#fff',
      cursor: 'pointer',
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [userData, setUserData] = useState({
    id: Math.floor(Math.random() * 1000000),
    firstName: 'Coder',
    lastName: 'Byte',
    phone: '8885559999',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const validateInputs = () => {
    return (
      userData.lastName === '' ||
      userData.firstName === '' ||
      !validatePhoneNumber(userData.phone)
    );
  };

  const validatePhoneNumber = (input) => {
    const phone = /^\d{10}$/;

    if (input.match(phone)) return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) return;

    addEntryToPhoneBook(userData);
    setUserData({
      id: Math.floor(Math.random() * 1000000),
      firstName: '',
      lastName: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="firstName"
        type="text"
        value={userData.firstName}
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="lastName"
        type="text"
        value={userData.lastName}
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="phone"
        type="text"
        value={userData.phone}
        onChange={handleChange}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ phoneBookList }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBookList.map((obj) => (
          <tr key={obj.id}>
            <td style={style.tableCell}>{obj.firstName}</td>
            <td style={style.tableCell}>{obj.lastName}</td>
            <td style={style.tableCell}>{obj.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [phoneBookList, setPhoneBookList] = useState([]);

  const compareHelper = (a, b) => {
    if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
    if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
    return 0;
  };

  const sortPhoneBookList = (data) => {
    const sortedList = data.sort(compareHelper);
    setPhoneBookList(sortedList);
  };

  const addEntryToPhoneBook = (userData) => {
    const newPhoneBook = [...phoneBookList, userData];
    sortPhoneBookList(newPhoneBook);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBookList={phoneBookList} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById('root'));
