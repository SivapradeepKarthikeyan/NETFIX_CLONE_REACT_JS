import Axios from 'axios'

const LINK=Axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default LINK;