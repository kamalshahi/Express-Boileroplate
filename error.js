class Error {
    constructor(errObj){
        this.error.status = errObj.status;
        this.error.message = errObj.message;
        this.error.stack = errObj.stack
    };
    createError(){
        return error;
    }
};
module.exports = Error;