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
import MethodExpandedReferencesCovers from './MethodExpandedReferencesCovers';
import TrainingunitExpandedReferencesMethods from './TrainingunitExpandedReferencesMethods';





/**
* The TrainingunitExpandedReferences model module.
* @module model/TrainingunitExpandedReferences
* @version 0.0.1
*/
export default class TrainingunitExpandedReferences {
    /**
    * Constructs a new <code>TrainingunitExpandedReferences</code>.
    * @alias module:model/TrainingunitExpandedReferences
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TrainingunitExpandedReferences</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TrainingunitExpandedReferences} obj Optional instance to populate.
    * @return {module:model/TrainingunitExpandedReferences} The populated <code>TrainingunitExpandedReferences</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrainingunitExpandedReferences();

            
            
            

            if (data.hasOwnProperty('exercises')) {
                obj['exercises'] = MethodExpandedReferencesCovers.constructFromObject(data['exercises']);
            }
            if (data.hasOwnProperty('methods')) {
                obj['methods'] = TrainingunitExpandedReferencesMethods.constructFromObject(data['methods']);
            }
            if (data.hasOwnProperty('techniques')) {
                obj['techniques'] = MethodExpandedReferencesCovers.constructFromObject(data['techniques']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/MethodExpandedReferencesCovers} exercises
    */
    exercises = undefined;
    /**
    * @member {module:model/TrainingunitExpandedReferencesMethods} methods
    */
    methods = undefined;
    /**
    * @member {module:model/MethodExpandedReferencesCovers} techniques
    */
    techniques = undefined;








}


