'use strict';

module.exports = {
  plugins: ['plugins/markdown', 'plugins/summarize'],
  source: {
    include: ['src'],
    exclude: [
      /* array of paths to exclude */
    ],
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_',
  },

  opts: {
    template: 'templates/default', // same as -t templates/default
    encoding: 'utf8', // same as -e utf8
    destination: './docs/',
    recurse: true, // same as -r
    // tutorials: 'path/to/tutorials', // same as -u path/to/tutorials
  },
};
