import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BusService from "../services/BusService";


const UpdateBus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState({
    id: id,
    busNumber: "",
    source: "",
    destination: "",
  });

  const handleChange = (e) => {
    const value = e.target.value
    setBus({ ...bus, [e.target.name]: value})
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BusService.getBusById(bus.id)
        setBus(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  
  const updateBus = (e) => {
    e.preventDefault()
    console.log(bus)
    BusService.updateBus(bus, id)
      .then((response) => {
        navigate("/busList")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Bus</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Bus Number
          </label>
          <input
            type="number"
            name="busNumber"
            value={bus.busNumber}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Source Station
          </label>
          <input
            type="text"
            name="source"
            value={bus.source}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            value={bus.destination}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateBus}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/busList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateBus