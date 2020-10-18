import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 11RvDiKWBrQMb1ePVL07-gDTI-NIjGxre4iTeaOCRtE',
  },
});
