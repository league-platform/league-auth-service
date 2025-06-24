# league-service-template
Template-based microservice for the League platform.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
  - [Local Development](#local-development)
  - [Testing](#testing)
  - [Static Analysis](#static-analysis)
  - [Docker](#docker)
  - [Deploy to QA](#deploy-to-qa)
- [Conventional Commits](#conventional-commits)
- [Contributing](#contributing)
- [License](#license)

## Description

This repository is a **template** for all League microservices.  
It includes:

- Basic folder layout (`src/`, `infra/qa/`, etc.)  
- `Dockerfile` and `.dockerignore`  
- GitHub Actions CI pipeline for QA  
- Terraform scaffold for deploying to QA  
- Husky + Commitlint setup for Conventional Commits  

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) v18 or higher  
- [npm](https://docs.npmjs.com/cli/v9/commands/npm) (comes with Node.js)  
- [Terraform CLI](https://developer.hashicorp.com/terraform)  
- [Docker](https://www.docker.com/)  

## Setup

1. **Create your new service** via **Use this template** in GitHub.  
2. **Clone your new repo**:
   ```bash
   git clone git@github.com:league-platform/{{repo-name}}.git
   cd {{repo-name}}

## Conventional Commits

This template enforces Conventional Commits via Husky and Commitlint.


1. **Format**:
    ```<type>(<scope>): <description>

2. **Common types**:
- feat: new feature
- fix: bug fix
- docs: documentation only changes
- style: code formatting, no logic changes
- refactor: code change that neither fixes a bug nor adds a feature
- perf: performance improvements
- test: adding or updating tests
- chore: build task or auxiliary tool changes

3. **Example**:

git commit -m "feat(auth): add signup endpoint"
git commit -m "fix(ci): correct Dockerfile path for QA deploy"


