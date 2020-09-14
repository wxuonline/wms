const fabric = require('@umijs/fabric');

module.exports = {
    ...fabric.stylelint,
    rules: {
        indentation: 4,
        'no-descending-specificity': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['mixin', 'extend', 'content'],
            },
        ],
    },
};
