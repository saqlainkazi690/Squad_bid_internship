import React from 'react';
import logo from '../assets/logo.png'; // or '../assets/logo.png'

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src={logo} alt="SquadBid" style={styles.logo} />
        <div>
          <div style={{ fontWeight: 600 }}>Group Buy in 10 mins</div>
          <div style={{ fontSize: 12, color: '#555' }}>Anywhere in India 🌍</div>
        </div>
      </div>

      <input
        type="text"
        placeholder='Search "rice", "milk"...'
        style={styles.search}
      />

      <div style={styles.cart}>
        🛒 My Cart
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    height: 40,
    marginRight: 10,
  },
  search: {
    width: '40%',
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #ccc',
  },
  cart: {
    backgroundColor: '#f5f5f5',
    padding: '8px 12px',
    borderRadius: 10,
    fontWeight: 500,
    color: '#444',
    cursor: 'pointer',
  }
};

export default Header;
