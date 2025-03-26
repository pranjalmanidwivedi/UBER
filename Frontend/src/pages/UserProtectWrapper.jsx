import React, { useEffect } from 'react'

import {useNavigate} from 'react-router-dom'
const UserProtectWrapper = ({children}) => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
      if (!token) {
          navigate('/user-login');  // ✅ Redirect only after component mounts
      }
  }, [token, navigate]);  // ✅ Dependencies added

  if (!token) {
      return null;  // ✅ Prevent rendering protected content before redirect
  }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper