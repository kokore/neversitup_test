const findOddInArray = (arr) => {
    const map = new Map()

    for(const ele of arr){
        if(!!map.get(ele)){
            let res = map.get(ele)
            map.set(ele, res+1)
        } else{
            map.set(ele, 1)
        }
    }

    let data = [... new Set(arr)]

    for(let ele of data) {
        if(map.get(ele) === 1) {
            return ele
        }

        if(map.get(ele) % 2 !== 0) {
            return ele
        }
    }
}

module.exports = findOddInArray