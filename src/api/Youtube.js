import axios from 'axios';

const key ='AIzaSyAHBYuKDE9BYAoPNC0MgUUYvWhYwZkh-do';
const key1='AIzaSyCvB4p0HEI4PU1TWVE4q-vjVeDDZvPl8hk';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: key1
    }

});
