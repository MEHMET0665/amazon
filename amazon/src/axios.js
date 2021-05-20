import axios from "axios";
const  instance=axios.create({
  baseURL:'http://localhost:5001/fir-4a2ae/us-central1/api'// the API url
});
export default instance