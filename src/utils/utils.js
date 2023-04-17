import moment from 'moment';

export const formatRupiah = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDate = (date) => {
    const formattedDate = moment(date).format('DD MMMM YYYY');
    return formattedDate
}

export const externalApi = () => {
    return "https://background.angel-ping.my.id"
}