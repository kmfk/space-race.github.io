---
title: Stage Types
extension_development: true 
order: 8
---

# Building a Stage Type

Stages can be added to a Pipeline using a "Stage Type". An example would be, "Pause for X seconds". Here's what it would look like:

```
'use strict'

module.exports = {

  id: 'pause_execution_for_x_seconds',
  name: 'Pause for X Seconds',
  description: 'Pauses execution of the pipeline for a period of time.',
  icon: '/extensions/mc/basics/icons/pause_execution_for_x_seconds.svg',

  options: {
    length: {
      name: 'Length',
      description: 'Length of time to pause for (in seconds).',
      required: true
    }
  },

  execute: function(stage) {

    let seconds = stage.option('length')

    stage.log('Beginning pause for ' + seconds +' seconds')

    setTimeout(() => {
      stage.log('Finished pause for ' + seconds +' seconds')
      stage.succeed()
    }, seconds * 1000)

  }

}
```
