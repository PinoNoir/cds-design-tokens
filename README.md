# cds-design-tokens
This project is a demonstration of a (possible) setup of [Style Dictionary](https://github.com/amzn/style-dictionary) for the generation of design tokens for the Cadence Design System.


**Notice**: *Feel free to use this code as reference, or clone it and tailor it to your needs. But keep in mind that I have done in this project is not what I suggest you to do, unless you have a very clear idea of what you need and what you want to achieve. Style Dictionary comes with [a lot of pre-defined defaults](https://amzn.github.io/style-dictionary/), that most probably will work for you. Before starting to dig into all the possible customisations that you can have, try the default settings offered by the library, look at the output files, and see if they can suit your needs. Probably they will do. If they don't, think how you want the output files generated, and see which one of the [API methods](https://amzn.github.io/style-dictionary/#/api) you can use for that specific scope.*

## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
The project is made of these files and folders:

* `/tokens` contains the design tokens input files (in JSON format)
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