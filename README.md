# API Task

This repository contains tests for a small REST-style CRUD app. However, there is no application code
that implements this application. 

Your task is to:

1. Write a small (REST) API, which follows the test specs outlaid in tests
of this repository.

2. Ammend the tests (and your application code) in a way that every rerun of the tests
will reproduce same results without restarting the application.

3. If you add any other functionality that is not included in the current tests, add tests
for that functionality as well.

## Tests setup

1. Install latest Node (at least Node v16)

2. Install packages with `yarn install`

## Running tests

On Linux

`API_URL="YOUR_APPLICATION_URL_GOES_HERE" yarn test`

On Windows cmd (Command Prompt)

```cmd
setx API_URL "YOUR_APPLICATION_URL_GOES_HERE"
yarn test
```

## Submission

1. Fork this repository

2. Solve task laid out by the tests. Commit and publish code.

3. Add persons laid out in the task e-mail as members to your repository. Do not make your
repository public.

## Evaluation

Your submission will be evaluated in the following categories:

- Adherence to the specs laid out in tests

- Quality of the code: [Clean code rules](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)

- Git practices and commit message quality: [How to write a good commit message](https://www.gitkraken.com/learn/git/best-practices/git-commit-message)

## Other notes

You are free to use whatever language/framework/technologies you want.

Along with code submit instructions how to start the application.

No database setup is necessary, in fact, it is preferred that you do not use one. It is fine to hold data only as long
as the application is running (in RAM).

