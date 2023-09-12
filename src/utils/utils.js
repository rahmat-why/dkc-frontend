import moment from 'moment';

export const formatRupiah = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDate = (date) => {
    const formattedDate = moment(date).format('DD MMMM YYYY');
    return formattedDate
}

export const externalApi = () => {
    return "http://localhost:3001"
}

export const config = () => {
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return config
}

export const formatDateRaw = (date) => {
    const formattedDate = moment(date).format('Y-M-D');
    return formattedDate
}