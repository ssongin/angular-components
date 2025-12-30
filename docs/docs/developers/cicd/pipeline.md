---
sidebar_position: 2
---

# Pipelines

## PR Jobs

### Layer 1

* **validate-commit** - validates if commit is written according **[rules](./commit.md)**

### Layer 2

* **build** - tries to build components, depends on *validate-commit*
* **build-docusaurus** - tries to build docusaurus documentation, depends on *validate-commit*

### Layer 3

* **test** - runs tests to check if everything is good, depends on *build*
* **lint** - executes Angular Linting, depends on *build*
* **storybook-build** - tries to build storybook, depends on *build*

## Master Jobs

### Layer 1

* **release** - Based on **[commit message](./commit.md)** increments version via Changeset and commits that to master branch. Builds all projects. Publishes built projects to Github Packages. Job is skipped in case if version bump in "none" or commit starts with: 
    * chore(release)
    * Merge

### Layer 2

* **deploy_docs** - Builds Docusaurus and all Storybooks, compiles into single folder and publishes to Github Pages. Depends partially on *release*. 
