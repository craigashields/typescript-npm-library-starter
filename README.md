
<div align="center">

  <h1>Typescript NPM Library Starter</h1>
  
  <p>
    Create TypeScript npm packages using this example. Boilerplate code includes CI/CD and changelogs 
  </p>

<!-- Badges -->
<p>
<a href="https://github.com/craigashields/typescript-npm-library-starter/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/craigashields/typescript-npm-library-starter" alt="contributors" />
</a>
<a href="">
    <img src="https://img.shields.io/github/last-commit/craigashields/typescript-npm-library-starter" alt="last update" />
</a>
<a href="https://github.com/craigashields/typescript-npm-library-starter/network/members">
    <img src="https://img.shields.io/github/forks/craigashields/typescript-npm-library-starter" alt="forks" />
</a>
<a href="https://github.com/craigashields/typescript-npm-library-starter/stargazers">
    <img src="https://img.shields.io/github/stars/craigashields/typescript-npm-library-starter" alt="stars" />
</a>
<a href="https://github.com/craigashields/typescript-npm-library-starter/issues/">
    <img src="https://img.shields.io/github/issues/craigashields/typescript-npm-library-starter" alt="open issues" />
</a>
</p>  
<h4>
    <a href="https://github.com/craigashields/typescript-npm-library-starter">Documentation</a>
  <span> · </span>
    <a href="https://github.com/craigashields/typescript-npm-library-starter/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/craigashields/typescript-npm-library-starter/issues/">Request Feature</a>
  </h4>
</div>

<br>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tech Stack](#tech-stack)

<br>

## Installation

To install and set up the project, follow these steps:

1. Clone the repository: 

    ```
    git clone [repository url]
    ```

    Remember to delete the existing .git folder

    OR

    Use Template

2. Initialise local git repo

    ```
    git init
    ```

3. Navigate to the project directory: cd [project directory]
4. Install dependencies: 
    
    ```
    npm install
    ```

5. Change package.json

   You'll want to change you're `package.json` file to contain information about you're own library. You'll want to change the following

   - name
   - description
   - version
   - keywords
   - author
   - license
   - repo information - This is important as if you plan to deploy to NPM, this is what will be used to automatically identify your README.

6. Github Actions

   This starter includes Github actions, located in the `.github\workflows` folder. The `main.yml` will be used for pushes to any branch. Whereas the `publish.yml` will only be applied to the branch you specify. It's worth noting that if you push this code, as-is, to your Github repo, the `main.yml` will run, however the `publish.yml` will not. This is because the `branches` field in the yaml file needs to be replaced with your main branch name. For example, if you are using `master` then the yaml should be changed to the following

   ```yaml
    name: Publish
    on:
    workflow_run:
        workflows: [CI]
        types:
        - completed
        branches:
        - "master"
   ```

   I'd recommend, leaving this file alone until you're up and running and have read through the rest of the documentation.


7. Github Secret

   You will need a personal token if you want to use the Github `publish.yml`. Follow the below for information 

    - Go to Github
    - Click your profile icon at the top right 
    - Select `Settings`
    - Scroll to the bottom, on the left hand menu, select `Developer Settings`
    - Select `Person Access Tokens` > `Tokens (classic)`
    - Create a new token and ensure it has scopes to `repo`, `workflow`, `write:packages`

    The next part will require you to have a repo in Github as we'll be adding a repo secret

    - Navigate to your repo
    - Select `Settings` 
    - Select `Secrets and variables` > `Actions` from the left menu
    - `New repository secret`
        - `Name`: `GIT_TOKEN`
        - `Secret`: The value from the Github secret you created

    As well as a Github Secret, you will want to enable read/write permissions on the repo. 

    - Go to your Github Repo
    - Settings
    - Actions > General (found on the left hand side)
    - Under Workflow Permissions at the bottom, select `read and write permissions` and `Allow Github actions to create and approve pull requests`

8. NPM Secret
    - If you want to automatically deploy to NPM using the publish script, you will need an `Automation` NPM token. 
      [Follow these instructions](https://docs.npmjs.com/creating-and-viewing-access-tokens) to create a token.
    - Once you have the token, navigate to your repo
    - Select `Settings` 
    - Select `Secrets and variables` > `Actions` from the left menu
    - `New repository secret`
        - `Name`: `NPM_TOKEN`
        - `Secret`: The value from the NPM secret

9. Initialise changeset

   This template uses `changeset` for version control and deployment to NPM. Firstly, you will need to initialise `changeset`

    - Open Terminal
    - Run `npx changeset init` to initialise. A new folder will be created `.changeset` and this folder will include `config.json` and `README.md`. No need to do anything with these.
    
    Now that `changeset` has been initialised, you can create a new changeset. 

    - In terminal, run `npx changeset`. You will be prompted to with some questions. 
    - Once completed, you can increment the version and create / add to the CHANGELOG by running `npx changeset version`

10. Testing

    This template includes a `testing` folder that will let you test the output of the build using `npm link`. You shouldn't commit this to your git repo so I'd recommend, you add the `testing` folder to the `.gitignore` file or move the `testing` folder outside of the project directory.

11. Deploy to Github

    You can do this using the git cli or using VSCode Source Control, depending on your preference. 

<br>

## NPM Scripts

Below is a brief explanation of the scripts listed in the `package.json` file.

- `npm run dev`

   This command will run `vitest` test scripts. In this example it will be the `example.test.ts` file. This will
   run `vitest` in watch mode. This package does not include a `vitest.config.ts` file but you may choose to 
   add one if you want to include additional options. 

-  `npm run test`

   This will run `vitest` test scripts as a one off without watch mode. 

-  `npm run lint`

    This is just a lint script to ensure no typos etc

-  `npm run build`

    This will use `tsup` to bundle the Typescript code into Javascript CJS and ESM files. The output files are determined by the `main`, `module` and `types` fields in the `package.json`

<br>

## Usage

Now you have an understanding of the basics, let's start using the package as it is and then you can start creating your awesome Typescript library.

### Build and Test

We'll start by building the function and locally testing it using `npm link`. For full information on `npm link`, [see here](https://docs.npmjs.com/cli/v9/commands/npm-link)

The below will reference `typescript-npm-library-starter` which is the package name, however, if you have changed this to your own name, then you'll want to replace `typescript-npm-library-starter` with your package name.

- Open Terminal
- Run command `npm run build`. This will create a `/dist/` directory which will contain a CommonJs file and a ES Module Javascript file. 
- Run command `npm link`. This will essentially link your repo to the global `node_modules` folder on your machine

Next we'll test the CommonJS output

- In your Terminal, navigate to the `/testing/cjs` folder. 
- We need to link the global package to this project. Run `npm link typescript-npm-library-starter`. You'll see a `node_modules` folder appear with our code in it.
- Run command `node index.js`. The filtered users will be displayed in the console.
- Once you are done testing, you need to unlink the package from this project. Run `npm unlink typescript-npm-library-starter`

Now we'll test the ESM

- In your Terminal, navigate to the `/testing/esm` folder. 
- We need to link the global package to this project. Run `npm link typescript-npm-library-starter`. You'll see a `node_modules` folder appear with our code in it.
- Run command `node index.js`. The filtered users will be displayed in the console.
- Once you are done testing, you need to unlink the package from this project. Run `npm unlink typescript-npm-library-starter`

When you are happy with your testing, ensure you unlink the package from the global modules folder.

- Navigate back to the main directory
- Run `npm unlink typescript-npm-library-starter`

### Use Github Actions

In this section, we'll be actually publishing the function to NPM.  

Firstly, make sure you're package name is unique by searching NPM for your package name. If it's there then you are going to have to change it to something unique.

Next, you'll want to make sure that the `branches` field in the `Publish.yml` has been updated with your main / master branch name.  

As long as you've followed everything else, you can now commit and push your changes to Github and Github Actions will publish the package to NPM. 

<br>

## Closing Thoughts

This repo is intended to give a simple starter to anyone wanting to create a Typescript library and deploy to NPM. I'd really welcome feedback, good or bad so that I can make this repo better.

<br>

## Contributing

To contribute to the project, please follow these guidelines:

1. Fork the repository: Click the "Fork" button on the top right corner of the repository page.
2. Create a new branch: git checkout -b [new branch name]
3. Make your changes and commit them: git commit -m "your commit message"
4. Push to the branch: git push origin [new branch name]
5. Submit a pull request: Click the "New pull request" button on the repository page and follow the instructions.

<br>

## License

[MIT](https://github.com/craigashields/typescript-npm-library-starter/blob/master/LICENSE) © [Craig Shields](https://github.com/craigashields)

<br>

## Features

### [Typescript](https://www.typescriptlang.org/)

This repository provides a boilerplate codebase for creating a Typescript library for NPM. It is designed to help you quickly set up your project structure and get started with building your own library.

### [tsup](https://github.com/egoist/tsup)

Tsup, a fast TypeScript module bundler, is included in this repository to simplify the bundling process of your library. It helps you package your TypeScript code into a CJS and EMS files that can be easily consumed by other applications or libraries. Tsup optimizes the output bundle size and ensures efficient runtime performance.

### [vitest](https://vitest.dev/guide/)

Vitest is included in this repository as the testing suite. It offers a fast and lightweight testing experience for your Typescript library. With Vitest, you can write and run tests to ensure the correctness and quality of your codebase.

### [Changesets](https://github.com/changesets/changesets)

To maintain a clean and organized version control workflow, this repository integrates Changesets. Changesets allow you to manage your library's versioning and changelog in a structured manner. It helps you keep track of changes made between versions, making it easier to communicate updates to your users.

### [Github Actions](https://docs.github.com/en/actions)

This repository leverages Github Actions for automated workflows and CI/CD (Continuous Integration/Continuous Deployment). With Github Actions, you can define custom workflows that automatically build, test, and deploy your library in response to various events, such as pushing changes to the repository or creating a pull request. This streamlines your development process and ensures that your library is consistently built and tested in a controlled environment.

