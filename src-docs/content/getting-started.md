---
title: Getting Started
order: 1
---

# Getting Started

## Requirements

* Node.js
    * v5.0+ required
* Redis Server
    * Redis version 2.6+ required
    * Can be installed on the same machine or a remote one
* MySQL Server
    * 5.6+ recommended
    * Can be installed on the same machine or a remote one

## Installation

1. Clone the repository

    ```
    git clone -b stable git@github.com:space-race/mission-control.git
    ```

2. Install the dependencies

    ```
    npm install
    ```

3. Run the setup assistant

    ```
    ./mc setup
    ```

4. Run the app

    ```
    npm start
    ```

## Starting Mission Control

There are three main ways to start the web and worker nodes of Mission Control.

### Self Hosted Server

When you are running Mission Control on a self hosted server the easist way to start the application is via [PM2](http://pm2.keymetrics.io/) and supply the provided `processes.json` file.

  ```
  $./node_modules/.bin/pm2 start processes.json
  ```

Notice we are using the local `PM2` package which was installed from npm. The `processes.json` file is a pm2 configuration which specifices your web and worker nodes to start.

### Procfile Based Services

Additionally there is a `Procfile` provided which specifices web and worker nodes to start. When using the `npm start` command ultimately what happens is [node-foreman](https://github.com/strongloop/node-foreman) runs the Procfile starting the processes.

[Heroku](https://heroku.com) for instances can be deployed to by pushing your checkout to heroku master, [documented here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

Or simply click this button!
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/space-race/mission-control)


### Running Development

If you plan on contributing to Mission Control you can run a local development environment by using the `npm run dev` command. This starts a build watch process and runs a node server via [nodemon](https://github.com/remy/nodemon).
