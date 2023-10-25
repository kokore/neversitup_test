
const permutations = (words) => {
    const result = [];

    const permute = (str, prefix = '') => {
        if (str.length === 0) {
            result.push(prefix);
        } else {
            for (let i = 0; i < str.length; i++) {
                const rest = str.slice(0, i) + str.slice(i + 1);
                permute(rest, prefix + str[i]);
            }
        }
    }

    permute(words);

    return [... new Set(result)];
}

export default permutations