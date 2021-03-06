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
* The TrainingunitData model module.
* @module model/TrainingunitData
* @version 0.0.1
*/
export default class TrainingunitData {
    /**
    * Constructs a new <code>TrainingunitData</code>.
    * @alias module:model/TrainingunitData
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TrainingunitData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TrainingunitData} obj Optional instance to populate.
    * @return {module:model/TrainingunitData} The populated <code>TrainingunitData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrainingunitData();

            
            
            

            if (data.hasOwnProperty('minutes')) {
                obj['minutes'] = ApiClient.convertToType(data['minutes'], 'Number');
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = ApiClient.convertToType(data['series'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} minutes
    */
    minutes = undefined;
    /**
    * @member {String} series
    */
    series = undefined;
    /**
    * @member {String} start
    */
    start = undefined;








}


