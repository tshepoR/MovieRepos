import Joi from 'joi';

class FormHelper {

    static validateFormProperty = (dataOject, property, schema) => {
        const errors = {};
        const modelState = { ...dataOject };
        const propertySchema = {
            [property]: schema[property]
        }
        const propertyObj = { [property]: modelState[property] };

        const { error } = Joi.validate(propertyObj, propertySchema);

        if (error) {
            errors[error.details[0].path[0]] = error.details[0].message;
        }

        if (Object.keys(errors).length > 0) {
            return errors
        } else {
            return null;
        }

    }

    static validateFormSchema = (dataOject, schema) => {
        const errors = {};
        const modelState = { ...dataOject };
        const { error: errorsDetails } = Joi.validate(modelState, schema, { abortEarly: false });
        if (errorsDetails) {
            errorsDetails.details.forEach((error, index) => {
                errors[error.path[0]] = error.message;
            })
        }
        if (Object.keys(errors).length > 0) {
            return errors
        } else {
            return null;
        }

    }

}

export default FormHelper;