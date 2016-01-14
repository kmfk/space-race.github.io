---
title: Development Overview
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

2. Clone your fork of the `mc-core` repo

    ```
    git clone https://github.com/your-fork/mc-core.git
    ```

3. Run `npm link` inside of your forked `mc-core` directory

    ```
    cd mc-core
    npm link
    ```

4. Link your forked core project in your mission control project

    ```
    cd ../mission-control
    npm link mc-core
    ```
    
5. Copy the `.env.example` to `.env`

    ```
    cp .env.example .env
    ```
    
6. Edit `.env` and modify Redis and MySQL credentials if necessary

7. Create a `mission_control` database on your MySQL host

8. Run setup

    ```
    mc setup
    ```

9. Run starting command

    ```
    mc start --dev
    ```
    
10. View the application: Go to [localhost:3000](http://localhost:3000)
