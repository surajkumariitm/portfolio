import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle, FaEnvelope, FaIdCard, FaPhone, FaCamera, FaEdit, FaSave, FaTimes, FaLock } from 'react-icons/fa';

const UserProfile = () => {
  const { user, token, login, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profileImage: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        profileImage: user.profileImage || ''
      });
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 25600) { // 25KB limit
        setMessage({ type: 'error', text: 'Image size must be less than 25KB' });
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/auth/update-profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      login(data.result, data.token);
      setIsEditing(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setIsChangingPassword(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setMessage({ type: 'success', text: 'Password changed successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto w-full"
      >
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${message.type === 'error' ? 'bg-red-500/20 text-red-200 border border-red-500/50' : 'bg-green-500/20 text-green-200 border border-green-500/50'}`}>
            {message.text}
          </div>
        )}

        <div className="flex flex-col items-center mb-8 relative">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#915EFF]/20 bg-[#915EFF]/10 flex items-center justify-center">
              {formData.profileImage ? (
                <img src={formData.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <FaUserCircle size={80} className="text-[#915EFF]" />
              )}
            </div>
            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-[#915EFF] p-2 rounded-full cursor-pointer hover:bg-[#804dee] transition-colors shadow-lg">
                <FaCamera className="text-white text-sm" />
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            )}
          </div>
          
          {!isEditing ? (
            <>
              <h2 className="text-3xl font-bold text-white mt-4">{user.name}</h2>
              <p className="text-secondary">User Profile</p>
            </>
          ) : (
            <p className="text-secondary mt-4">Editing Profile</p>
          )}
        </div>

        {isChangingPassword ? (
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaLock className="text-[#915EFF]" /> Change Password
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-secondary text-sm mb-1 block">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#915EFF] outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-secondary text-sm mb-1 block">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#915EFF] outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-secondary text-sm mb-1 block">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#915EFF] outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 justify-end mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsChangingPassword(false);
                  setMessage({ type: '', text: '' });
                }}
                className="px-6 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#915EFF] text-white font-bold hover:bg-[#804dee] transition-colors"
              >
                Update Password
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] shrink-0">
                  <FaIdCard />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-secondary">Full Name</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-[#915EFF] text-white focus:outline-none py-1"
                    />
                  ) : (
                    <p className="text-white font-medium">{user.name}</p>
                  )}
                </div>
              </div>

              <div className="bg-black/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] shrink-0">
                  <FaEnvelope />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-secondary">Email Address</p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-[#915EFF] text-white focus:outline-none py-1"
                    />
                  ) : (
                    <p className="text-white font-medium">{user.email}</p>
                  )}
                </div>
              </div>

              <div className="bg-black/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] shrink-0">
                  <FaPhone />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-secondary">Phone Number</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Add phone number"
                      className="w-full bg-transparent border-b border-[#915EFF] text-white focus:outline-none py-1"
                    />
                  ) : (
                    <p className="text-white font-medium">{user.phone || 'Not provided'}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        name: user.name || '',
                        email: user.email || '',
                        phone: user.phone || '',
                        profileImage: user.profileImage || ''
                      });
                      setMessage({ type: '', text: '' });
                    }}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
                  >
                    <FaTimes /> Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#915EFF] text-white font-bold hover:bg-[#804dee] transition-colors"
                  >
                    <FaSave /> Save Changes
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#915EFF] text-white font-bold hover:bg-[#804dee] transition-colors"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsChangingPassword(true)}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg border border-[#915EFF] text-[#915EFF] font-bold hover:bg-[#915EFF]/10 transition-colors"
                  >
                    <FaLock /> Change Password
                  </button>
                  <button
                    type="button"
                    onClick={logout}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg border border-red-500 text-red-500 font-bold hover:bg-red-500/10 transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default UserProfile;
