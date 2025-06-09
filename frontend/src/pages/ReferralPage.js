import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGroup, joinGroup } from '../api';
import CountdownTimer from '../components/CountdownTimer';
import GroupStatus from '../components/GroupStatus';
import JoinBanner from '../components/JoinBanner';

const ReferralPage = () => {
  const { referralCode } = useParams();
  const [group, setGroup] = useState(null);
  const [joined, setJoined] = useState(false);

  // Generate or fetch a unique userId for this device
  const [userId] = useState(() => {
    const existing = localStorage.getItem('userId');
    if (existing) return existing;
    const newId = 'user-' + Math.random().toString(36).substring(2, 7);
    localStorage.setItem('userId', newId);
    return newId;
  });

  // Automatically join on link visit
  useEffect(() => {
    const join = async () => {
      try {
        await joinGroup(referralCode, userId);
        setJoined(true);
      } catch (err) {
        console.error("Join failed", err);
      }
    };
    join();
  }, [referralCode, userId]);

  // Poll group status every 5s
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await getGroup(referralCode);
        setGroup(res.data);
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };

    fetchGroup();
    const interval = setInterval(fetchGroup, 5000);
    return () => clearInterval(interval);
  }, [referralCode]);

  if (!group) return <p>Loading group...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Group Buy for Product: {group.productId}</h2>
      {joined && <JoinBanner userId={userId} />}
      <GroupStatus
        current={group.currentUsers.length}
        required={group.requiredCount}
        unlocked={group.isUnlocked}
      />
      <CountdownTimer expiresAt={group.expiresAt} />
    </div>
  );
};

export default ReferralPage;
