import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import BusService from '../services/BusService';

const AddBus = () => {

    const [bus, setBus ] = useState({
        id: "",
        busNumber: "",
        source: "",
        destination: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setBus({ ...bus, [e.target.name]: value})
    }

    const saveBus = (e) => {
        e.preventDefault()
        BusService.saveBus(bus).then((response) => {
            console.log(response)
            navigate("/busList")
        }).catch((error) => {
            console.log(error)
        })
    }

    const reset = (e) => {
        e.preventDefault();
        setBus({
          id: "",
          busNumber: "",
          source: "",
          destination: "",
        });
      };

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='flex-auto px-8 py-8'>
            <div className='font-normal text-2xl tracking-wider'>
                <h1>Add New Bus</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Bus Number
                </label>
                <input type='number' name='busNumber' value={bus.busNumber} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Source Station
                </label>
                <input type='text' name='source' value={bus.source} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Destination
                </label>
                <input type='text' name='destination' value={bus.destination} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={saveBus} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6'>
                    Save
                </button>
                <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6'>
                    Clear
                </button>
                <button onClick={() => navigate("/")} className='rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-700 py-2 px-6'>
                    Back
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddBus