import axios from "axios"

const BUS_API_BASE_URL = "http://localhost:8090/api/v1/buses"

class BusService {
    saveBus(bus) {
        return axios.post(BUS_API_BASE_URL, bus)
    }

    getBuses() {
        return axios.get(BUS_API_BASE_URL)
    }

    deleteBus(id) {
        return axios.delete(BUS_API_BASE_URL + "/" + id)
    }

    getBusById(id) {
        return axios.get(BUS_API_BASE_URL + "/" + id)
    }

    updateBus(bus, id) {
        return axios.put(BUS_API_BASE_URL + "/" + id, bus)
    }
}

export default new BusService()