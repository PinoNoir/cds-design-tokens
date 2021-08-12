const _ = require("lodash");
const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand, platform) {
    return {
        "source": [
            `tokens/brands/${brand}/*.json`,
            "tokens/globals/**/*.json",
            `tokens/platforms/${platform}/*.json`
        ],
        "platforms": {
            "web/js": {
                "transformGroup": "tokens-js",
                "buildPath": `dist/web/${brand}/`,
                "prefix": "cds",
                "files": [
                    // uncomment these ones if you need to generate more formats
                    // {
                    //     "destination": "tokens.module.js",
                    //     "format": "javascript/module"
                    // },
                    // {
                    //     "destination": "tokens.object.js",
                    //     "format": "javascript/object"
                    // },
                    {
                    "destination": "tokens.es6.js",
                    "format": "javascript/es6"
                    }
                ]
            },
            "web/css": {
                "transformGroup": "tokens-css",
                "buildPath": `dist/web/${brand}/`,
                "prefix": "cds",
                "files": [
                    {
                    "destination": "tokens.css",
                    "format": "css/variables"
                    }
                ]
            },
            "web/scss": {
                "transformGroup": "tokens-scss",
                "buildPath": `dist/web/${brand}/`,
                "prefix": "cds",
                "files": [
                    {
                    "destination": "tokens.scss",
                    "format": "scss/variables"
                    }
                ]
            },
            "styleguide": {
                "transformGroup": "styleguide",
                "buildPath": `dist/styleguide/`,
                "prefix": "cds",
                "files": [
                    {
                    "destination": `${platform}_${brand}.json`,
                    "format": "json/flat"
                    },
                    {
                    "destination": `${platform}_${brand}.scss`,
                    "format": "scss/variables"
                    }
                ],
            },
        },
    };
}

// REGISTER CUSTOM FORMATS + TEMPLATES + TRANSFORMS + TRANSFORM GROUPS

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
// console.log(StyleDictionaryPackage);

StyleDictionaryPackage.registerFormat({
    name: 'json/flat',
    formatter: function(dictionary) {
        return JSON.stringify(dictionary.allProperties, null, 2);
    }
});


// I wanted to use this custom transform instead of the "prefix" property applied to the platforms
// because I wanted to apply the "token" prefix only to actual tokens and not to the aliases
// but I've found out that in case of "name/cti/constant" the prefix was not respecting the case for the "prefix" part
//
// StyleDictionaryPackage.registerTransform({
//     name: 'name/prefix-token',
//     type: 'name',
//     matcher: function(prop) {
//         return prop.attributes.category !== 'alias';
//     },
//     transformer: function(prop) {
//         return `token-${prop.name}`;
//     }
// });


StyleDictionaryPackage.registerTransformGroup({
    name: 'styleguide',
    transforms: ["attribute/cti", "name/cti/kebab", "size/remToPx", "color/css"]
});

StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-js',
    transforms: ["name/cti/pascal", "size/remToPx", "color/hex"]
});

StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-css',
    transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx", "content/icon", "asset/path"]
});

StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-scss',
    // to see the pre-defined "scss" transformation use: console.log(StyleDictionaryPackage.transformGroup['scss']);
    transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx", "content/icon", "asset/path"]
});

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['web'].map(function(platform) {
    ['aw', 'bcc', 'cp', 'tsc', 'tw'].map(function(brand) {

        console.log('\n==============================================');
        console.log(`\nProcessing: [${platform}] [${brand}]`);

        const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

        if (platform === 'web') {
            StyleDictionary.buildPlatform('web/js');
            StyleDictionary.buildPlatform('web/css');
            StyleDictionary.buildPlatform('web/scss');
        }
        StyleDictionary.buildPlatform('styleguide');

        console.log('\nEnd processing');

    })
})

console.log('\n==============================================');
console.log('\nBuild completed!');