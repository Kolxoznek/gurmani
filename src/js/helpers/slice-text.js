function sliceText(str) {
    if(str?.length > 26) {
        return str.slice(0, 26) + '...'
    } else return str
}

export default sliceText