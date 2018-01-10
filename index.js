const { getOptions } = require('loader-utils');
const { relative } = require('path');

module.exports = function() {
    // Loader Options
    const options = getOptions(this) || {};

    const path = options.context
        ? relative(options.context, this.resourcePath)
        : this.resourcePath;

    const prefix = options.prefix || '';

    if (this.cacheable) {
        this.cacheable();
    }

    return `module.exports = '/${prefix}/${path}'`;
};
