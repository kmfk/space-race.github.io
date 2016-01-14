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

1. Clone the `mission-control` repo.

    ```
    git clone https://github.com/space-race/mission-control.git
    ```

2. Clone the `mc-core` repo

    ```
    git clone https://github.com/space-race/mc-core.git
    ```

3. Run `npm link` inside of the `mc-core` clone

    ```
    cd mc-core
    npm link
    ```

4. Run `npm link mc-core` inside of the `mc-core` (Example `cd ~/projects/mission-control && npm link mc-core`)

    ```
    cd ../mission-control
    npm link mc-core
    ```

5. Run starting command

    ```
    mc start --dev
    ```
    
6. View the application: Go to [localhost:3000](http://localhost:3000)
