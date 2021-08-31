// Import filters
const dateFilter = require('./src/_11ty/filters/date');

module.exports = function (config) {
    config.addWatchTarget('./src/assets/sass/');

    // Register Filters
    config.addFilter('date', dateFilter);

    // Register Collections
    config.addCollection('posts_en', function (collection) {
        return collection.getFilteredByGlob('./src/en/posts/*.md');
    });

    config.addCollection('posts_es', function (collection) {
        return collection.getFilteredByGlob('./src/es/posts/*.md');
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
