
let basicMethods = {
    /**
     * Check if the array contains the element
     * @param array
     * @param element: can be an object or an array
     */
    arrayContains: function (array, element) {
        if (0 === subset.length || superset.length < subset.length) {
            return false;
        }
        for(var i = 0; i < subset.length; i++) {
            if(superset.indexOf(subset[i]) === -1) return false;
        }
        return true;
    }
}