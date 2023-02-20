# CDS Design Tokens

This project is a [Style Dictionary](https://github.com/amzn/style-dictionary) configuration to generate design tokens for _Cadence Design System_.

**Notice**: _This code has been customized to work for all of Stretto's brands (AW, BCC, CP, TSC, TW) and platforms (Web), which can be exteded and built upon for additional platforms in the future. To view all the possible Style Dictionary configurations visit [API methods](https://amzn.github.io/style-dictionary/#/api)._

## Initial setup

Install the project dependencies via the CLI command:

```text
yarn install style-dictionary
```

## Project structure

Project file and folder structure:

- `/tokens` contains the design token input files (in JSON format)
- `/dist` contains the generated output files (This version is configured to output JS, CSS, & SCSS files)
- `sd.config.js` is the script used to generate the output files

## Editing the JSON files

• Install Figma Tokens plugin

## Running the project

You can build the design tokens from the `/tokens/` folder using the CLI command:

```text
yarn build
```

You can automatically re-build the tokens at every change using the command:

```text
yarn watch
```

The generated tokens are saved in the `/dist` folder, and organised by target file type/format.

## License

This project is under [MIT license]
