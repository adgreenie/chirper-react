// returns an array in the format: ["Mon Apr 20 2020", "20:46"]
export const formatDate = rawDate => {

    const dateArr = rawDate.split('')
    
    const date = dateArr.slice(0, 15).join('')
    
    const hour = parseInt(dateArr.slice(16, 18).join(''))
    
    const minute = dateArr.slice(19, 21).join('')
    
    const time = hour > 12 ?
        `${hour - 12}:${minute} PM` :
        `${hour}:${minute} AM`

    const day = dateArr.slice(4, 10).join('')

    return [date, time, day]
}