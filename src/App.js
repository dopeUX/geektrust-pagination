import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './components/HomePage';
import logo from './logo.svg';
import { updateData, updateLength } from "./AppSlice";
import getData from "./functions/getData";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.app.data); 
  useEffect(()=>{
    getData().then(res=>{
      //   setData(res);
      dispatch(updateData({type:'load', data:res}))
      dispatch(updateLength(res.length));
      
    });
    console.log(data[0])
  },[]);

  return (
    <HomePage/>
  );
}

export default App;
