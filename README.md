# Cadence Design System Tokens
This project is a possible [Style Dictionary](https://github.com/amzn/style-dictionary) configuration to generate design tokens for *Cadence Design System*.


**Notice**: *This code has been customized to work for all of Stretto's brands (AW, BCC, CP, TSC, TW) and platforms (Web), which can be exteded and built upon for additional platforms in the future. To view all the possible Style Dictionary configurations visit [API methods](https://amzn.github.io/style-dictionary/#/api).*

## Initial setup
Install the project dependencies via the CLI command:

```
npm install style-dictionary 
```

## Project structure
Project file and folder structure:

* `/tokens` contains the design token input files (in JSON format)
* `/dist` contains the generated output files (in different formats for the web including: Javascript, CSS, & SCSS)
* `build.js` is the script used to generate the output files

## Editing the JSON files
• Install Figma Tokens plugin

## Running the project
You can build the design tokens from the `/tokens/` folder using the CLI command:

```
npm run build
```
You can automatically re-build the tokens at every change using the command:

```
npm run watch
```

The generated tokens are saved in the `/dist` folder, and organised by target platform.

## License

This project is under [MIT license]