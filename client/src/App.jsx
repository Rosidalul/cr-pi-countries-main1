// import { useState } from 'react'
import './App.css'
import { Routes, Route, } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing Page/Landing";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './Components/Redux/actions';
import Detail from './Components/Detail/Detail';
import CreateAct from './Components/CreateAct/CreateAct';
import AllActivities from './Components/AllActivities/AllActivities';

function App() {

  return (

    <div>
      <Routes>
        <Route path="/activities" element= {<AllActivities/>}></Route>
        <Route path="*" element={<h1>Error 404: this endpoint doesn't exist!</h1>}></Route>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/newActivity" element={<CreateAct/>} />
      </Routes>
    </div>

  )
}

export default App;