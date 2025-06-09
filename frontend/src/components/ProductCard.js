import React, { useState } from 'react';

const ProductCard = ({ product, onGroupBuy }) => {
  const [referralLink, setReferralLink] = useState('');
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [showJoined, setShowJoined] = useState(false);

  const handleGroupBuy = async () => {
    const res = await onGroupBuy(product);
    setReferralLink(`${window.location.origin}/join/${res.referralCode}`);
    setJoinedUsers([res.userId]); // Optionally show current user as first
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h4>{product.name}</h4>
      <p>{product.quantity}</p>
      <p><strong>₹{product.price}</strong></p>

      <button style={styles.add}>ADD</button>
      <button onClick={handleGroupBuy} style={styles.groupBuy}>
        🤝 Group Buy
      </button>

      {referralLink && (
        <div style={styles.linkBox}>
          <p style={{ fontSize: 12 }}>🔗 Share this link:</p>
          <code style={styles.code}>{referralLink}</code>
        </div>
      )}

      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => setShowJoined(!showJoined)}
          style={styles.toggleTab}
        >
          👥 {joinedUsers.length} joined {showJoined ? "▲" : "▼"}
        </button>

        {showJoined && (
          <ul style={styles.userList}>
            {joinedUsers.map((u, i) => (
              <li key={i}>🧑 User {u}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: 10,
    padding: 12,
    width: 180,
    margin: 10,
    textAlign: 'center',
    boxShadow: '0 0 4px rgba(0,0,0,0.1)'
  },
  image: { width: 100, height: 100, objectFit: 'contain' },
  add: {
    background: '#e0f7e9',
    border: '1px solid green',
    padding: '4px 12px',
    borderRadius: 5,
    marginTop: 4,
    cursor: 'pointer'
  },
  groupBuy: {
    background: '#f0f0f0',
    border: '1px dashed #555',
    padding: '4px 12px',
    borderRadius: 5,
    marginTop: 6,
    fontSize: 12,
    cursor: 'pointer'
  },
  linkBox: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: 8,
    padding: 6,
    marginTop: 6
  },
  code: {
    fontSize: 11,
    wordWrap: 'break-word'
  },
  toggleTab: {
    marginTop: 5,
    fontSize: 12,
    background: '#eee',
    border: 'none',
    borderRadius: 6,
    padding: '4px 8px',
    cursor: 'pointer'
  },
  userList: {
    listStyle: 'none',
    padding: 0,
    margin: 5,
    fontSize: 12
  }
};

export default ProductCard;
