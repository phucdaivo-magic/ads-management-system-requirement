import { STATUS } from '../settings/const';

export default {
    generateStatues: function(status) {
        return '<span style="height: 25px; line-height: 25px; padding: 0 10px" class="badge  badge-' + STATUS[status].class + '">' + STATUS[status].text + '</span>'
    }
}