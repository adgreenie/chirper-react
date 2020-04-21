// returns an array in the format: ["Mon Apr 20 2020", "20:46"]
export const formatDate = rawDate => {
    const dateArr = rawDate.split('')
    const date = dateArr.slice(0, 15).join('')
    const time = dateArr.slice(16, 21).join('')
    return [date, time]
}