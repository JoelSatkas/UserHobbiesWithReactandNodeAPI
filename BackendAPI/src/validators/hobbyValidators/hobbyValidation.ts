import {body, param, validationResult} from 'express-validator';
const GETHobbyValidationRules = () => {
    return [
        param('userId').isLength({min: 1}),
    ]
};

const POSTHobbyValidationRules = () => {
    return [
        // username must exist
        param('userId').isLength({min: 1}),
        body('name').isLength({min: 1}),
        body('passionLevel').isLength({min: 1}),
        body('year').isString()
    ]
};

const PUTHobbyValidationRules = () => {
    return [
        // username must exist
        param('userId').isLength({min: 1}),
        body('hobbyId').isLength({min: 1})
    ]
};

const DELETEHobbyValidationRules = () => {
    return [
        // username must exist
        param('userId').isLength({min: 1}),
        body('hobbyId').isLength({min: 1})
    ]
};

const validateHobby = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    })
};

module.exports = {
    GETHobbyValidationRules,
    POSTHobbyValidationRules,
    PUTHobbyValidationRules,
    DELETEHobbyValidationRules,
    validateHobby,
};
