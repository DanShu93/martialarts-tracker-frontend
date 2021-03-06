/**
 * martialarts-tracker
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The MethodReferencedByTrainingunit model module.
* @module model/MethodReferencedByTrainingunit
* @version 0.0.1
*/
export default class MethodReferencedByTrainingunit {
    /**
    * Constructs a new <code>MethodReferencedByTrainingunit</code>.
    * @alias module:model/MethodReferencedByTrainingunit
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>MethodReferencedByTrainingunit</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MethodReferencedByTrainingunit} obj Optional instance to populate.
    * @return {module:model/MethodReferencedByTrainingunit} The populated <code>MethodReferencedByTrainingunit</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MethodReferencedByTrainingunit();

            
            
            

            if (data.hasOwnProperty('methods')) {
                obj['methods'] = ApiClient.convertToType(data['methods'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} methods
    */
    methods = undefined;








}


