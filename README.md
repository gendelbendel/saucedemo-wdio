# saucedemo-wdio

This is a project showcasing the usage of Webdriver.io against a known test site, saucedemo.com, with some standards that I try to follow as much as possible

## Installation

After cloning the repo:

```
npm i
```

## Usage

Running all the e2e tests:

```
npm run wdio
```

Running e2e tests for a given suite (in this example, the `auth` suite):

```
npm run wdio:auth
```

Running unit tests:

```
npm run unit
```

## Available suites

At this time, these are the available suites if you want a more specific set of tests to run:

- `auth`: Runs e2e tests specifically around the login features
- `inventory`: Runs e2e tests specifically around the inventory and product listing features

## License

This repo is using the [BSD-3-Clause License](LICENSE).
