import { body, param, validationResult } from 'express-validator';

const GETUserValidationRules = () => {
    return [
        //Return rules
    ]
};

const POSTUserValidationRules = () => {
    return [
        // username must exist
        body('name').isLength({min: 1}),
    ]
};

const PUTUserValidationRules = () => {
    return [
        // username must exist
        param('userId').isLength({min: 1}),
        body('name').isLength({min: 1})
    ]
};

const DELETEUserValidationRules = () => {
    return [
        // username must exist
        param('userId').isLength({min: 1}),
    ]
};

const validateUser = (req, res, next) => {
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
    GETUserValidationRules,
    POSTUserValidationRules,
    PUTUserValidationRules,
    DELETEUserValidationRules,
    validateUser,
};
