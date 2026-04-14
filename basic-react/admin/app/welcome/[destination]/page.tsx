'use client'
import { use, useState } from 'react'
import  Axios from 'axios' 


export default function Page({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination } = use(params)

  const [destinationData, setDestinationData] = useState({});
// This page is rendered on the server, so we can use async/await and fetch data directly in the component.
  function getData(destination:String) {
  const res = fetch(`http://localhost:3001/destinations/${destination}`).then(res => {
  if (!res.ok) {
    throw new Error('Failed to fetch destination data')
  }
  console.log(res.json())
  setDestinationData(res.json())
  return res.json() 
})
 }
 console.log(`http://localhost:3001/api/destinations/${destination}`)
 Axios.get(`http://localhost:3001/api/destinations/${destination}`)
  .then(response => {
    console.log(response.data);
    setDestinationData(response.data);
  })
  .catch(error => {
    console.error('Error fetching destination data:', error);
  });
 
  return (
    <div>
      <p>Edit {destination} </p>
      <form action="/update">
        <input type="hidden" name="destination"  />
        
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={destinationData.name} />



        <button type="submit">Update</button>
      </form>
    </div>
  )
}