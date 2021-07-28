export const getYear = (x) => {
    if (x !== undefined) {
       return x.split('-')[0]
    } else {
        return null
    }
}

export const formatAsCurrency = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}