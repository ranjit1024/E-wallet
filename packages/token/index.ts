let rand = function() {
    return Math.random().toString(36); // remove `0.`
};

let token = function() {
    return rand() + rand() + rand();
}

let Generatetoken = token();
export default Generatetoken;
