const { relative } = require('path');

module.exports = function() {
    const path = this.options && this.options.context
        ? relative(this.options.context, this.resourcePath)
        : this.resourcePath;

    if (this.cacheable) {
        this.cacheable();
    }

    return `module.exports = '/${path}'`;
};
