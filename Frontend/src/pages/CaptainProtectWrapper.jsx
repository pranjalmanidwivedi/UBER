import React, { useEffect, useContext } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const CaptainProtectWrapper = ({children}) => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const {captain, setCaptain} = useContext(CaptainDataContext);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
      if (!token) {
          navigate('/captain-login');  
      }

      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }).then(response => {
        if(response.status === 200) {
            setCaptain(response.data.captain)
            setisLoading(false)
        }
      }).catch(err => {
        localStorage.removeItem('token')
        navigate('/captain-login')
      }
      )


  }, [ token, navigate, setCaptain ]); 
  
  
  if(isLoading){
    return <div>Loading...</div>
  }

  if (!token) {
      return null; 
  }

  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectWrapper;