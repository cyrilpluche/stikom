const moment = require('moment');

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
            return array.includes(element)
        }

    },

    /**
     * return true if the array contains an object that property have the value given in parameter
     * @param array: Array of object
     * @param target: the property targeted
     * @param value: the value of the target
     * @returns {boolean}
     */
    arrayObjectContains: function(array, target, value) {
        let resultat = false;
        let i = 0;
        while (i < array.length && !resultat) {
            if (array[i][target] === value) {
                resultat = true
            }
            i++;
        }
        return resultat
    },

    /**
     * Return an array of date between the two given in parameter
     * @param date_begin
     * @param date_end
     * @param step
     * @returns {Array}
     */
    datesBetween: function (date_begin, date_end, step) {
        let dates = [];
        let d = date_begin;
        while (d <= date_end){
            dates.push(d);
            d = new Date(d.setDate(d.getDate() + step)); // add A day
        }
        return dates
    },

    /**
     * gives the number of days between the two dates
     * @param date_begin
     * @param date_end
     * @returns {number}
     */
    daysBetween: function (date_begin, date_end) {
        let start = moment(date_begin);
        let end = moment(date_end);
        return end.diff(start, 'days');
    },

    /**
     * return the number of sundays between two dates
     * @param dateBegin
     * @param dateEnd
     * @returns {number}
     */
    numberOfSunday: function (dateBegin, dateEnd) {
        let totalSundays = 0;
        let date = dateBegin;
        while (date <= dateEnd){
            if (date.getDay() === 0){
                totalSundays++;
            }
            date.setDate(date.getDate() + 1); // add A day
        }

        return totalSundays
    },

    /**
     * round a number
     * @param number
     * @param accuracy
     * @returns {number}
     */
    round (number, accuracy) {
        const factor = Math.pow(10, accuracy);
        return Math.round(number * factor + Number.EPSILON) / factor;
    }
};

module.exports = basicMethods;