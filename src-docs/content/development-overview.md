---
title: Development Overview
dev: true
order: 1
---

# Development Overview

## PRs & Issues on GitHub

All issues for mission control should be opened against [the "core" repository (mc-core)](https://github.com/space-race/mc-core) unless they belong to a specific extension.

PRs on `mc-core` should be opened against the `develop` (default) branch.

Issues are generally organized into Milestones. You can view [a nice layout of the milestones here](/mission-control/docs/milestones.html) on the documentation site.

## Setting up a Development Environment

To get started developing, check out our [Development Environment Setup Guide](/mission-control/docs/development-environment-setup.html).

## Main Repositories

* **"Mission Control" — [space-race/mission-control](https://github.com/space-race/mc-mission-control)**
  * Starting point for end-users.
* **"MC Core" — [space-race/mc-core](https://github.com/space-race/mc-core)**
  * Core functionality of Mission Control
  * This is where most work is done aside from individual extensions.
* **"Documentation" — [space-race/space-race.github.io](https://github.com/space-race/space-race.github.io)**
  * Documentation for Mission Control (this website)
* **"Mission Control Extension Validator" — [space-race/mc-extension-validator](https://github.com/space-race/mc-extension-validator)**
  * A script that can easily be added to tests for an extension to validate its schema, etc.
* **"Mission Control Host Provisioner" — [space-race/mc-provision](https://github.com/space-race/mc-provision)**
  * A provisioning script to set up a host for running Mission Control
  * The base for the community AMI

## Extension Repositories

This list may be incomplete, but here is a list of some first-party extensions for Mission Control.

* mc-ext-basics
* mc-ext-github
* mc-ext-aws *(WIP)*
* mc-ext-aws-ec2 *(planned)*
* mc-ext-slack *(WIP)*
