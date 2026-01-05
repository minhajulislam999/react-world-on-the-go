import React, { Suspense } from 'react'
import './App.css'
import Countries from "./components/Countries/Countries.jsx";


function App() {

  const countriesPromise = fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,cca2,cca3,region,population")

    .then(res => res.json());

  return (
    <>

    <Suspense fallback={<h1>Loading countries...</h1>}>
      <Countries countriesPromise={countriesPromise} />
    </Suspense>
    </>
  )
}

export default App
