/**
 * Generic API
 * Стандартизованное API коннектора, предназначенного для интеграции с внешним источником данных. Общая спецификация [тут](https://co-ms.atlassian.net/wiki/spaces/NC/pages/85852315/Generic+API)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaginationResponce from './PaginationResponce';
import Trigger from './Trigger';

/**
 * The InlineResponse20013 model module.
 * @module GenericApi/Model/InlineResponse20013
 * @version 1.0.0
 */
class InlineResponse20013 {
    /**
     * Constructs a new <code>InlineResponse20013</code>.
     * @alias module:GenericApi/Model/InlineResponse20013
     */
    constructor() { 
        
        InlineResponse20013.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GenericApi/Model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:GenericApi/Model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], [Trigger]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PaginationResponce.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
InlineResponse20013.prototype['success'] = undefined;

/**
 * @member {Array.<module:GenericApi/Model/Trigger>} triggers
 */
InlineResponse20013.prototype['triggers'] = undefined;

/**
 * @member {module:GenericApi/Model/PaginationResponce} pagination
 */
InlineResponse20013.prototype['pagination'] = undefined;






export default InlineResponse20013;
