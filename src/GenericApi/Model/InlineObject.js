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

/**
 * The InlineObject model module.
 * @module GenericApi/Model/InlineObject
 * @version 1.0.0
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:GenericApi/Model/InlineObject
     * @param code {String} 
     */
    constructor(code) { 
        
        InlineObject.initialize(this, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code) { 
        obj['code'] = code;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GenericApi/Model/InlineObject} obj Optional instance to populate.
     * @return {module:GenericApi/Model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
InlineObject.prototype['code'] = undefined;






export default InlineObject;
