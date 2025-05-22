import React, {useEffect, useState} from 'react';
import '../../../styles/UserProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://localhost:7084/api/profile/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
        setError('Failed to load profile data');
      }
    };

    if (userId && token) {
      fetchProfile();
    }
  }, [userId, token]);

  if (!userId || !token) return <p>You are not logged in.</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="user-profile-container">
      <h2 className="user-profile-title">My Profile</h2>
      <div className="user-profile-info">
        <p><strong>First Name:</strong> {profile.firstName}</p>
        <p><strong>Last Name:</strong> {profile.lastName}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Postal Code:</strong> {profile.postalCode}</p>
        <p><strong>Role:</strong> {profile.role}</p>
      </div>
    </div>
  );
  };

  export default UserProfile;