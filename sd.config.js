module.exports = {
  format: {
    // Adding a custom format to show how to get an alias's name.
    customFormat: function ({ dictionary, options }) {
      return dictionary.allTokens.map(token => {
        let value = JSON.stringify(token.value);
        // new option added to decide whether or not to output references
        if (options.outputReferences) {
          // the `dictionary` object now has `usesReference()` and
          // `getReferences()` methods. `usesReference()` will return true if
          // the value has a reference in it. `getReferences()` will return
          // an array of references to the whole tokens so that you can access its
          // name or any other attributes.
          if (dictionary.usesReference(token.original.value)) {
            const reference = dictionary.getReferences(token.original.value);
            value = reference.name;
          }
        }

        return `export const ${token.name} = ${value};`
      }).join(`\n`)
    }
  },


  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      prefix: 'cds',
      files: [{
        destination: '_cds-token-variables.js',
        format: 'customFormat',
        options: {
          outputReferences: true,
        }
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      prefix: 'cds',
      files: [{
        destination: '_cds-token-variables.css',
        format: 'css/variables',
        options: {
          outputReferences: true, // new setting, if true will use variable references
        }
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      prefix: 'cds',
      files: [{
        destination: '_cds-token-variables.scss',
        format: 'scss/variables',
        options: {
          outputReferences: true, // new setting, if true will use variable references
        }
      }]
    }
  }
}