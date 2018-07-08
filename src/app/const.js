import Technique from "../../client/src/model/Technique";
import ExerciseData from "../../client/src/model/ExerciseData";
import {ApiClient, DefaultApi} from '../../client/src/index';
import Method from "../../client/src/model/Method";
import MethodReferences from "../../client/src/model/MethodReferences";
import Exercise from "../../client/src/model/Exercise";
import Trainingunit from "../../client/src/model/Trainingunit";
import TrainingunitData from "../../client/src/model/TrainingunitData";
import TrainingunitReferences from "../../client/src/model/TrainingunitReferences";
import {addNew, getAll, update} from "./actions";

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

const api = new DefaultApi(client);

export const typeString = "string";
export const typeNumber = "number";
export const typeDate = "date";

export const entities = [
    {
        "dialogName": "trainingunit",
        "headerName": "diary",
        "columns": [
            "start",
            "series"
        ],
        "data": [
            {
                "name": "series",
                "type": typeString,
                "options": {}
            },
            {
                "name": "start",
                "type": typeDate,
                "options": {}
            },
            {
                "name": "minutes",
                "type": typeNumber,
                "options": {}
            },
        ],
        "references": [
            {
                "name": "techniques",
                "entity": "technique"
            },
            {
                "name": "exercises",
                "entity": "exercise"
            },
            {
                "name": "methods",
                "entity": "method"
            }
        ],
        "client": {
            "new": function (data, references, dispatch) {
                let trainingUnit = new Trainingunit();
                trainingUnit.data = TrainingunitData.constructFromObject(data);
                trainingUnit.references = TrainingunitReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("trainingunit", data))
                    }
                };

                api.trainingunitPost(trainingUnit, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("trainingunit", data));
                    }
                };

                api.trainingunitGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let trainingUnit = new Trainingunit();
                trainingUnit.id = id;
                trainingUnit.data = TrainingunitData.constructFromObject(data);
                trainingUnit.references = TrainingunitReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("trainingunit", data))
                    }
                };

                api.trainingunitTrainingunitIdPut(id, trainingUnit, httpCallback)
            }
        }
    },
    {
        "dialogName": "technique",
        "headerName": "techniques",
        "columns": [
            "name",
            "kind"
        ],
        "data": [
            {
                "name": "name",
                "type": typeString,
                "options": {}
            },
            {
                "name": "kind",
                "type": typeString,
                "options": {}
            },
            {
                "name": "description",
                "type": typeString,
                "options": {
                    "multiLine": true
                }
            }
        ],
        "references": [],
        "client": {
            "new": function (data, references, dispatch) {
                let technique = new Technique();
                technique.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("technique", data))
                    }
                };

                api.techniquePost(technique, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("technique", data));
                    }
                };

                api.techniqueGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let technique = new Technique();
                technique.id = id;
                technique.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("technique", data))
                    }
                };

                api.techniqueTechniqueIdPut(id, technique, httpCallback)
            }
        }
    },
    {
        "dialogName": "method",
        "headerName": "methods",
        "columns": [
            "name",
            "kind"
        ],
        "data": [
            {
                "name": "name",
                "type": typeString,
                "options": {}
            },
            {
                "name": "kind",
                "type": typeString,
                "options": {}
            },
            {
                "name": "description",
                "type": typeString,
                "options": {
                    "multiLine": true
                }
            }
        ],
        "references": [
            {
                "name": "covers",
                "entity": "technique"
            }
        ],
        "client": {
            "new": function (data, references, dispatch) {
                let method = new Method();
                method.data = ExerciseData.constructFromObject(data);
                method.references = MethodReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("method", data))
                    }
                };

                api.methodPost(method, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("method", data));
                    }
                };

                api.methodGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let method = new Method();
                method.id = id;
                method.data = ExerciseData.constructFromObject(data);
                method.references = MethodReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("method", data))
                    }
                };

                api.methodMethodIdPut(id, method, httpCallback)
            }
        }
    }, {
        "dialogName": "exercise",
        "headerName": "exercises",
        "columns": [
            "name",
            "kind"
        ],
        "data": [
            {
                "name": "name",
                "type": typeString,
                "options": {}
            },
            {
                "name": "kind",
                "type": typeString,
                "options": {}
            },
            {
                "name": "description",
                "type": typeString,
                "options": {
                    "multiLine": true
                }
            }
        ],
        "references": [],
        "client": {
            "new": function (data, references, dispatch) {
                let exercise = new Exercise();
                exercise.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("exercise", data))
                    }
                };

                api.exercisePost(exercise, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("exercise", data))
                    }
                };

                api.exerciseGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let exercise = new Exercise();
                exercise.id = id;
                exercise.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("exercise", data))
                    }
                };

                api.exerciseExerciseIdPut(id, exercise, httpCallback)
            }
        }
    },
];
