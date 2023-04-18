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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRrcl9pZCI6IkRLUjAuMDQwOTkxOTQ3MzE2NTc1NDA2IiwibmFtZSI6Im5hbWV4eDEiLCJhcmVhX2lkIjoiYXJlYXh4IiwidXNlcm5hbWUiOiJ1c2VybmFtZXh4IiwicGFzc3dvcmQiOiJwYXNzd29yZHh4IiwiY3JlYXRlZEF0IjoiMjAyMy0wNC0xNlQxODozNDowMS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNC0xNlQxODozNDoxMy4wMDBaIn0sImxvZ2luQXQiOjE2ODE3MDEyNDkxOTEsImlhdCI6MTY4MTcwMTI0OX0.teMOSnafg1ii4aeiBGnfoz41n3WPtRMD_Voplnt5NDw"
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return config
}