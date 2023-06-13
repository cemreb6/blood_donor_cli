import axios from "axios";

export const Post = async (bodyItems, route, header) => {
    const response = await axios.post(route, JSON.stringify(bodyItems), header);
    return await response.data;
}