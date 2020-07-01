import _ from 'lodash';


class Helper {

    static paginate = (dataObject, pageNumber, pageSize) => {

        const skipElementsCnt = (pageNumber - 1) * pageSize;

        return _(dataObject).slice(skipElementsCnt).take(pageSize).value();

    }
}

export default Helper;