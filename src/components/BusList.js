import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Bus from './Bus'
import BusService from '../services/BusService'

const BusList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [buses, setBuses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await BusService.getBuses();
        setBuses(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteBus = (e, id) => {
    e.preventDefault();
    BusService.deleteBus(id).then((res) => {
      if (buses) {
        setBuses((prevElement) => {
          return prevElement.filter((bus) => bus.id !== id);
        });
      }
    });
  }

  return (
    <div className="container mx-auto my-8">
      <div className="h-20">
        <button
          onClick={() => navigate("/addBus")}
          className="rounded bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-2 font-semibold">
          Add Bus
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Bus Number
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Source Station
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Destination
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {buses.map((bus) => (
                <Bus
                  bus={bus}
                  deleteBus={deleteBus}
                  key={bus.id}></Bus>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default BusList