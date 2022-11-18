import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getDataFromFakeApi } from './redux/actions';
import Navigation from './router';

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cartItems.productItems)

  const [ready,setReady] = useState(true)

  // useEffect(() => {
  //   if(products){
  //     setReady(true)
  //   }
  // },[products])

  // useEffect(() => {
  //   dispatch(getDataFromFakeApi())
  // } ,[])



  return (
    ready ? <Navigation /> : <h1>Loading...</h1>
  );
}

export default App;
