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
import Inventory from './Inventory';

/**
 * The InlineResponse2006 model module.
 * @module GenericApi/Model/InlineResponse2006
 * @version 1.0.0
 */
class InlineResponse2006 {
    /**
     * Constructs a new <code>InlineResponse2006</code>.
     * @alias module:GenericApi/Model/InlineResponse2006
     */
    constructor() { 
        
        InlineResponse2006.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GenericApi/Model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:GenericApi/Model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('inventory')) {
                obj['inventory'] = Inventory.constructFromObject(data['inventory']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
InlineResponse2006.prototype['success'] = undefined;

/**
 * @member {module:GenericApi/Model/Inventory} inventory
 */
InlineResponse2006.prototype['inventory'] = undefined;






export default InlineResponse2006;
