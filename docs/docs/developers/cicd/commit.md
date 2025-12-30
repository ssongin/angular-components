---
sidebar_position: 1
---

# Commits 

## Commit format 

### Message format

*commit_type*(optional scope/task): *commit description* 

### Message examples

feat(button): Add button component

cicd(TASK-1729): Deploy documentation to Github Pages

fix: Remove broken element from popup

## Allowed commit types

| Commit type  | Version increment | Purpose                                                                                                                                   |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **epic**     | major             | Introduces a large, cross-cutting change that significantly alters the product direction or architecture (often spans multiple features). |
| **major**    | major             | Introduces breaking changes that are incompatible with previous versions.                                                                 |
| **feat**     | minor             | Adds a new backward-compatible feature or capability.                                                                                     |
| **build**    | patch             | Changes related to build tools, bundlers, or dependencies that do not affect runtime behavior.                                            |
| **chore**    | patch             | Maintenance tasks and housekeeping that do not modify application behavior (e.g., cleanup, configs).                                      |
| **cicd**     | patch             | Changes to CI/CD pipelines, workflows, or deployment automation.                                                                          |
| **fix**      | patch             | Fixes a bug or incorrect behavior without changing the public API.                                                                        |
| **perf**     | patch             | Improves performance without changing functionality or APIs.                                                                              |
| **refactor** | patch             | Internal code restructuring without changing external behavior.                                                                           |
| **revert**   | patch             | Reverts a previous commit without introducing new functionality.                                                                          |
| **style**    | patch             | Code style changes (formatting, linting) that do not affect logic or behavior.                                                            |
| **docs**     | none              | Documentation-only changes that do not affect code behavior.                                                                              |
| **test**     | none              | Adds or updates tests without modifying production code.                                                                                  |
