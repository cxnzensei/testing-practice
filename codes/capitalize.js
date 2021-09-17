const capitalize = (str) => {
    if(!str.length) 
    return;

    else return str[0].toUpperCase() + str.slice(1);
};

module.exports = capitalize;