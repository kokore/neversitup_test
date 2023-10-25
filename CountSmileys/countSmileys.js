const eyeValid  = [ ':' , ';']
const noseValid  = ['-' , '~']
const mouthValid  = [')' , 'D']

const generateEmoticonCombinations = () => {
    const combinations = [];

    for (const eye of eyeValid) {
        for (const nose of noseValid) {
            for (const mouth of mouthValid) {
                const combination = `${eye}${nose}${mouth}`;
                combinations.push(combination);
            }
        }

        for (const mouth of mouthValid) {
            const combinationWithoutNose = `${eye}${mouth}`;
            combinations.push(combinationWithoutNose);
        }
    }

    return combinations
}

const countSmileys = (arr) => {
    let count = 0
    
    let map = new Map()
    const combinations = generateEmoticonCombinations()

    for(let ele of combinations) {
        map.set(ele,1)
    }

    for(let ele of arr) {
        if(map.get(ele)){
            count++
        }
    }

    return count
}

module.exports = countSmileys