import React from 'react'
import {
    Routes,
    Route,

  } from "react-router-dom";

  import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch';
export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />}/>
    </Routes>
  )
}
