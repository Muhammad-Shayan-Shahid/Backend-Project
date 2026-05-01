import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useChat} from '../hooks/useChat';

const Dashboard = () => {

    const chat = useChat();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {     
    chat.initilazeSocket();
    }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.username}!</p>
    </div>
  )
}

export default Dashboard
