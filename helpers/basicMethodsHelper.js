
let basicMethods = {
    /**
     * Check if the array contains the element
     * @param array
     * @param element: can be an object or an array
     */
    arrayContains: function (array, element) {
        if (Array.isArray(element)) {
            if (element.length === 0 || array.length < element.length) {
                return false;
            }
            for(let i = 0; i < element.length; i++) {
                if(array.indexOf(element[i]) === -1) return false;
            }
            return true;
        } else {
            console.log(element)
            return array.includes(element)
        }

    }
}

module.exports = basicMethods