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
import ExerciseData from './ExerciseData';
import MethodExpandedReferences from './MethodExpandedReferences';





/**
* The TrainingunitExpandedReferencesMethods model module.
* @module model/TrainingunitExpandedReferencesMethods
* @version 0.0.1
*/
export default class TrainingunitExpandedReferencesMethods {
    /**
    * Constructs a new <code>TrainingunitExpandedReferencesMethods</code>.
    * @alias module:model/TrainingunitExpandedReferencesMethods
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TrainingunitExpandedReferencesMethods</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TrainingunitExpandedReferencesMethods} obj Optional instance to populate.
    * @return {module:model/TrainingunitExpandedReferencesMethods} The populated <code>TrainingunitExpandedReferencesMethods</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrainingunitExpandedReferencesMethods();

            
            
            

            if (data.hasOwnProperty('data')) {
                obj['data'] = ExerciseData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = MethodExpandedReferences.constructFromObject(data['references']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ExerciseData} data
    */
    data = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {module:model/MethodExpandedReferences} references
    */
    references = undefined;








}


