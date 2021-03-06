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
import Instance from './Instance';
import PaginationResponce from './PaginationResponce';

/**
 * The InlineResponse2003 model module.
 * @module GenericApi/Model/InlineResponse2003
 * @version 1.0.0
 */
class InlineResponse2003 {
    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * @alias module:GenericApi/Model/InlineResponse2003
     */
    constructor() { 
        
        InlineResponse2003.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GenericApi/Model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:GenericApi/Model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('instances')) {
                obj['instances'] = ApiClient.convertToType(data['instances'], [Instance]);
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
InlineResponse2003.prototype['success'] = undefined;

/**
 * @member {Array.<module:GenericApi/Model/Instance>} instances
 */
InlineResponse2003.prototype['instances'] = undefined;

/**
 * @member {module:GenericApi/Model/PaginationResponce} pagination
 */
InlineResponse2003.prototype['pagination'] = undefined;






export default InlineResponse2003;

