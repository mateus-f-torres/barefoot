# Auxiliary Tools
The why and how I choose to use this tools in my development workflow.  
Most of them don't significantly change the code and could be easily removed or modified if needed.  
Their focus is to automate tasks that although important are tedious and repetitive to do.  
A super side bonus is ensuring a code style inside your repository, therefore leading to more productive PRs.  

* [Husky](#husky)
* [Prettier](#prettier)
* [ESLint](#eslint)
* [Others](#others)

## Husky
[**Husky**](https://github.com/typicode/husky) helps us work with _git hooks_ in a more simple fashion.  
Hooks can run tasks in between our normal git workflow (similar to _pre_ and _post_ npm scripts).  
There are 3 hooks defined in `husky.config.js`  

### pre-commit
Runs [**lint-staged**](https://github.com/okonet/lint-staged) on any file a developer tries to commit.  
At the moment whenever a `.js` file is to be committed that file is formatted, linted and tested.  
If any tool in the pipeline throws an error the **whole commit is denied** and a message is shown.  
This is to prevent "bad" code from entering the repository and to favor smaller, more focused commits.  

### pre-commit-message
Continuing with the theme of small meaningful commits we now go to the actual message written.  
Commit messages matter but developers tend to either don't care or follow a personal style that is different from the rest.  
To make following a standard painless we use [**Commitizen**](https://github.com/commitizen/cz-cli) \(with the [**conventional-changelog**](https://github.com/commitizen/cz-conventional-changelog) flavor).  
Whenever `git commit` is called a form will appear on the command line to help you write the commit message.  

### commit-msg
Since developers can still use some other method besides `git commit` how can we ensure that the standards are followed ?  
Simple... We lint the message with [**commitlint**](https://github.com/conventional-changelog/commitlint).  
Make sure to match the standard you chose to follow.  

## Prettier
Tabs or spaces, semicolons or no semicolons, single or double quotes, and a million other vain issues to discuss.  
Everyone has had that one meeting called only to argue about this things... please don't.  
Just change [**Prettier**](https://prettier.io/) and let's move on with our lives.  
PS: I'm using [**EditorConfig**](https://editorconfig.org/) as a fallback here... just in case.  

## ESLint
Some things aren't so black and white when it comes to code quality and witting style.  
Javascript is a pretty awesome language in my opinion, but it does have some quirks that can trip newcomers.  
To help with those cases and to aid with the code style we are using [**ESLint**](https://eslint.org/) with [**Javascript Standard Style**](https://standardjs.com/).  

## Others
* [**nvm**](https://github.com/nvm-sh/nvm), used to manage the project's `nodejs` version.
* [**Travis CI**](https://travis-ci.com/), used to build and run the full test suite on every PR.
* [**Codecov**](https://codecov.io/), used to provide the test coverage percentage of PRs.
* [**Netlify**](https://www.netlify.com/), used to deploy the project after the master branch is changed.

