/**
 * Configure format of data sent in json
 */

const formatError = err => ({ error: err.message });

module.exports = {
    formatError
}