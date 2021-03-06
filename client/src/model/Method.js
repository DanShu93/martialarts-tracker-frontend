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
import MethodReferences from './MethodReferences';





/**
* The Method model module.
* @module model/Method
* @version 0.0.1
*/
export default class Method {
    /**
    * Constructs a new <code>Method</code>.
    * @alias module:model/Method
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Method</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Method} obj Optional instance to populate.
    * @return {module:model/Method} The populated <code>Method</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Method();

            
            
            

            if (data.hasOwnProperty('data')) {
                obj['data'] = ExerciseData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = MethodReferences.constructFromObject(data['references']);
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
    * @member {module:model/MethodReferences} references
    */
    references = undefined;








}


