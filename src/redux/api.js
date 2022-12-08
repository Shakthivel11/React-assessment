import axios from "axios"
const BASE_URL="https://jsonplaceholder.typicode.com/posts"

export const Loadpostapi = async () =>
    await axios.get(BASE_URL);

 export const Createpostapi = async (post) =>
    await axios.get(BASE_URL + '/'+ post);

 export const Updatepostapi = async (post,postId) =>
    await axios.get(BASE_URL+'/'+postId,post);