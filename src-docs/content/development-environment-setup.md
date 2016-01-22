---
title: Dev Environment Setup
dev: true
order: 1
---

# Development Overview

To get started developing, follow the steps below.

## Dependencies

* Node 5+
* MySQL 5.6+
* Redis

## Setup

1. Create a Mission Control project by cloning the `mission-control` repo.

    ```
    git clone https://github.com/space-race/mission-control.git
    ```
    
2. Go to the `mc-core` repository and fork it.

    https://github.com/space-race/mc-core

3. Clone your fork of the `mc-core` repo

    ```
    git clone https://github.com/your-fork/mc-core.git
    ```

4. Run `npm link` inside of your forked `mc-core` directory

    ```
    cd mc-core
    npm link
    ```

5. Link your forked core project in your mission control project

    ```
    cd ../mission-control
    npm link mc-core
    ```
    
6. Copy the `.env.example` to `.env`

    ```
    cp .env.example .env
    ```
    
7. Edit `.env` and modify Redis and MySQL credentials if necessary

8. Create a `mission_control` database on your MySQL host

9. Run setup

    ```
    mc setup
    ```

10. Run starting command

    ```
    mc start --dev
    ```
    
11. View the application: Go to [localhost:3000](http://localhost:3000)

12. Watch the logs by using pm2 logs command

    ```
    ./node_modules/mc-core/node_modules/.bin/pm2 logs
    ```

    If you have pm2 installed globally, you can just run:
    
    ```
    pm2 logs
    ```

13. Visit the [Development Overview](/mission-control/docs/development-overview.html) to review the contribution guide.
