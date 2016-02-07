---
title: Comparison to Other DevOps Tools
getting_started: true
order: 4
---

# Comparison to Other DevOps Tools

## Jenkins

Jenkins has a ton of history and a huge community. Like Mission Control, it can be used for almost anything, but it is a bit dated in the modern dev-ops world.

## Spinnaker

Spinnaker is Netflix's open-source continuous deployment tool. It is pretty cool, but it is a pretty significant system to run. At the time of writing this, it runs 8 microservices and utilizes 10GB of memory while idle. To be fair though, it is designed for a large scale. Mission Control is a lighter-weight alternative. There are great concepts in Spinnaker and a lot of experience there, but we hope that Mission Control will be a bit more accessible to a larger community.

## Go Continuous Delivery

Mission Control is similar to Go CD, but a bit simpler and with a different Stack. Go CD uses primarily Ruby and Java.

## Terraform (by HashiCorp)

While infrastructure can be deployed using extensions with Mission Control, its goal is to orchestrate other tools, not necessarily replace them. Terraform is focused on deploying infrastructure. Mission Control can use terraform within its pipelines and as part of your workflows.
