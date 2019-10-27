export default {
    dateYYYYMMDD: function(dateStr) {
        if (_.isUndefined(dateStr)
            || _.isNull(dateStr)
            || _.isEmpty(dateStr)) {
            return '';
        }

        return moment(dateStr).format('DD/MM/YYYY')
    }
}