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
import TrainingunitData from './TrainingunitData';
import TrainingunitExpandedReferences from './TrainingunitExpandedReferences';





/**
* The TrainingunitExpanded model module.
* @module model/TrainingunitExpanded
* @version 0.0.1
*/
export default class TrainingunitExpanded {
    /**
    * Constructs a new <code>TrainingunitExpanded</code>.
    * @alias module:model/TrainingunitExpanded
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TrainingunitExpanded</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TrainingunitExpanded} obj Optional instance to populate.
    * @return {module:model/TrainingunitExpanded} The populated <code>TrainingunitExpanded</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrainingunitExpanded();

            
            
            

            if (data.hasOwnProperty('data')) {
                obj['data'] = TrainingunitData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = TrainingunitExpandedReferences.constructFromObject(data['references']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/TrainingunitData} data
    */
    data = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {module:model/TrainingunitExpandedReferences} references
    */
    references = undefined;








}


