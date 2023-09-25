Project Readme: Learning ES6 Features
This project is designed to help you learn and practice the features introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015. ES6 brought significant enhancements to the JavaScript language, and this project will guide you through understanding and implementing these features.
Table of Contents
Learning Objectives
Requirements
General
Setup
Configuration Files
Learning Objectives
By the end of this project, you will be able to explain the following concepts without needing external references:
What ES6 is: Understand the significance and purpose of ECMAScript 6.
New Features Introduced in ES6: Familiarize yourself with the key enhancements brought by ES6.
The Difference Between a Constant and a Variable: Understand the distinction between constants and variables in JavaScript.
Block-Scoped Variables: Learn how ES6 introduced block-scoped variables using let and const.
Arrow Functions and Function Parameters Default Values: Comprehend the usage of arrow functions and their default parameter values.
Rest and Spread Function Parameters: Explore the rest and spread operators for function parameters.
String Templating in ES6: Learn about string templating, a new way to create strings in ES6.
Object Creation and Properties in ES6: Discover how ES6 simplifies object creation and property assignment.
Iterators and for-of Loops: Understand the concepts of iterators and how to use for...of loops to iterate through iterable objects.
Requirements
General
All code files should use the .js extension.
All code files should end with a new line.
A README.md file, located at the root of the project folder, is mandatory and should contain project-related information.
Setup
Your code will be executed on Ubuntu 18.04 LTS using Node.js 12.11.x.
Allowed editors include: vi, vim, emacs, and Visual Studio Code.
Install Node.js 12.11.x by following the provided commands:
bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Verify your Node.js and npm versions:
bash
Copy code
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Configuration Files
The project includes configuration files that are essential for linting and testing:
package.json: Contains scripts and project dependencies for Jest, Babel, and ESLint.
babel.config.js: Babel configuration for preset environments targeting the current Node.js version.
.eslintrc.js: ESLint configuration with rules tailored for the project.
To install the required dependencies, run the following command in your project directory:
bash
Copy code
npm install

Running Tests and Linting
Use the provided scripts to run tests and lint your code:
npm test: Run Jest tests.
npm run lint: Lint your code using ESLint.
npm run check-lint: Lint specific JavaScript files.
npm run dev: Use Babel to execute your JavaScript code (for development).
npm run full-test: Run ESLint and Jest tests together.
Please ensure that you meet the project's requirements and follow the provided guidelines while working on your code. Happy learning and coding!


