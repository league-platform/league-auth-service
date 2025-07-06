# league-auth-service

Authentication microservice for the League platform.

## Table of Contents

- [Description](#description)
- [Architecture Used](#architecture-used)
- [Design Principles and Patterns](#design-principles-and-patterns)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Conventional Commits](#conventional-commits)
- [Contributing](#contributing)
- [License](#license)

---

## Description

This repository contains the **authentication microservice** built with Node.js and Express, using MongoDB as the database. It is based on a standardized template used across the League platform.

Features:

- Modular structure (controllers, services, routes)
- Production-ready `Dockerfile`
- CI/CD pipeline with GitHub Actions
- Environment variable support via `.env`
- Basic automated tests

---

## Architecture Used

The project follows a **microservice-based architecture** with the following characteristics:

- **REST API**: communication via HTTP endpoints
- **Dockerized**: runs in isolated containers
- **CI/CD**: automated deployment using GitHub Actions
- **DevOps in AWS**: hosted on EC2 with MongoDB in a separate instance
- **Infrastructure-as-Code**: Terraform support (in progress)

---

## Design Principles and Patterns

This service applies multiple clean code principles:

- **SOLID**: especially the Single Responsibility Principle — controllers, services, and models are separated.
- **DRY (Don’t Repeat Yourself)**: shared logic (e.g., JWT handling) is abstracted into utilities.
- **KISS (Keep It Simple, Stupid)**: clean, readable and maintainable code.
- **YAGNI (You Aren’t Gonna Need It)**: only implements what's currently required.

---

## Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Terraform CLI](https://developer.hashicorp.com/terraform)

---

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




