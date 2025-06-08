import axios from 'axios';


const AxiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-orcin-two.vercel.app'
})
const UseAxiosPublic = () => {
    return AxiosPublic;
};

export default UseAxiosPublic;