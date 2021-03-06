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
* The TechniqueReferencedByTrainingunit model module.
* @module model/TechniqueReferencedByTrainingunit
* @version 0.0.1
*/
export default class TechniqueReferencedByTrainingunit {
    /**
    * Constructs a new <code>TechniqueReferencedByTrainingunit</code>.
    * @alias module:model/TechniqueReferencedByTrainingunit
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TechniqueReferencedByTrainingunit</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TechniqueReferencedByTrainingunit} obj Optional instance to populate.
    * @return {module:model/TechniqueReferencedByTrainingunit} The populated <code>TechniqueReferencedByTrainingunit</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TechniqueReferencedByTrainingunit();

            
            
            

            if (data.hasOwnProperty('techniques')) {
                obj['techniques'] = ApiClient.convertToType(data['techniques'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} techniques
    */
    techniques = undefined;








}


