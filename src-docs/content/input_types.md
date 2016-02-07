---
title: Available Input Types
extension_development: true 
order: 4
---

# Available Input Types

There a number of input types available to extensions to use for settings and stage configuration options. They are used by "Pipeline Settings", "Settings", and options for "Stage Types".

**NOTE: These are built into mission control core (`mc-core`) and can not be built in extensions.**

They are provided here for reference:

## Text

```
timeout: {
  name: 'Timeout',
  description: 'Timeout (in seconds)',
  required: true,
  type: 'text',
  default: 600 // 10 minutes
}
```

## Text Area

```
commands: {
  name: 'Command(s)',
  description: 'Command(s) to run',
  required: true,
  type: 'textarea'
}

```