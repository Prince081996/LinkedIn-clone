import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout, login } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch(selectUser)


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))
      }else{
        dispatch(logout());
      }
    })
  },[dispatch])
  return (
    <div className="App">
     <Header />
     { !user || user?.email === undefined ? <Login /> : (
     <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
     </div>
     )}
    </div>
  );
}

export default App;
