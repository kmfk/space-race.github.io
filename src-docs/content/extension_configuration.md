---
title: Extension Configuration
extension_development: true 
order: 2
---

# Building an Extension

Extensions are typically built around a vendor (ex. Slack) and may include a number of stage types, settings, and more that work in together to provide an integration and/or toolset.

## Extension Spec and Requirements

* Extension Packages must start with `mc-ext-`

There is partial spec of sorts, and notes on [GitHub Issue #86 "New Extension Format Spec"](https://github.com/space-race/mc-core/issues/86)

## Extension Registering

Each extension provides an `index.js` at the top level.

Example `index.js`

```
'use strict'

module.exports = {

  vendor: 'mc',
  id: 'github',
  name: 'GitHub',
  description: 'Extension for working with GitHub, including cloning repos, handling webhooks, and the status API.',
  
  webhooks: [
    require('./src/webhooks/execute-pipeline')
  ],
  
  stages: [
    require('./src/stages/clone-repo')
  ],
  
  logs: [],
  
  accounts: [
    require('./src/accounts/github-oauth')
  ]
  
}

```