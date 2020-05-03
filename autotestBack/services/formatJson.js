/**
 * Configure format of data sent in json
 */

const formatError = err => ({ error: err.message });

const formatDataResult = rows => ({
    message: "success",
    data: rows
});

module.exports = {
    formatError,
    formatDataResult
}