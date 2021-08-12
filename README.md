# cds-design-tokens
This project is a potential setup of [Style Dictionary](https://github.com/amzn/style-dictionary) for generating design tokens for the *Cadence Design System*.


**Notice**: *This code has been customized to work for all of Stretto's brands (AW, BCC, CP, TSC, TW) and platforms (Web), which can be exteded upon in the future. To view other Style Dictionary customizations visit [API methods](https://amzn.github.io/style-dictionary/#/api).*

## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
Project file and folder structure:

* `/tokens` contains the design token input files (in JSON format)
* `/dist` contains the generated output files (in different formats for the web including: Javascript, CSS, & SCSS)
* `build.js` is the script used to generate the output files

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