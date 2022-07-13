import React from 'react'
import { useNavigate } from "react-router-dom";

const Bus = ({bus, deleteBus}) => {
    const navigate = useNavigate();
    const editbus = (e, id) => {
        e.preventDefault()
        navigate(`/editBus/${id}`)
    }
  return (
    <tr key={bus.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{bus.busNumber}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{bus.source}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{bus.destination}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editbus(e, bus.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteBus(e, bus.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  )
}

export default Bus