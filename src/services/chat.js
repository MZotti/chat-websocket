import { API } from './api'

const SEND_MESSAGE = async (payload) => {
    const { data } = await API.post(`chat`, payload);

    return data;
}

export {
    SEND_MESSAGE
}