---
title: Updating Mission Control
general: true
order: 5
---

# Updating Mission Control

Stop Mission Control

```
cd /path/to/mission-control
mc stop
```

Update Core

```
npm update mc-core
```

Update any extensions you'd like to. Example:

```
npm update mc-ext-basics
```

Re-run Setup Tool and run any migrations available

```
mc setup
```

Start Mission Control again

```
mc start
```
