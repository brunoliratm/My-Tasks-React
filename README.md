# My Tasks React

A task management web app built with React, Vite, and Tailwind CSS, focused on productivity, a clean interface, and a responsive experience for desktop and mobile.

[![GitHub Repo](https://img.shields.io/badge/GitHub-My--Tasks--React-181717?style=for-the-badge&logo=github)](https://github.com/brunoliratm/My-Tasks-React)
[![Last Commit](https://img.shields.io/github/last-commit/brunoliratm/My-Tasks-React?style=for-the-badge)](https://github.com/brunoliratm/My-Tasks-React/commits/main)
[![Top Language](https://img.shields.io/github/languages/top/brunoliratm/My-Tasks-React?style=for-the-badge)](https://github.com/brunoliratm/My-Tasks-React)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Project Architecture](#project-architecture)
- [How to Run Locally](#how-to-run-locally)
- [Available Scripts](#available-scripts)
- [Data Persistence](#data-persistence)
- [Contribution](#contribution)
- [License](#license)
- [Author](#author)

## Overview

My Tasks React is a to-do list application with complete task creation and management operations, including dark mode and local persistence. The project is structured with reusable components, custom hooks, and clear UI-level organization, making it easy to maintain and evolve.

## Features

- Add tasks with input validation.
- Mark tasks as completed.
- Edit existing task text.
- Delete tasks individually.
- Filter by status: All, Active, and Completed.
- Dynamic counter for remaining tasks.
- localStorage persistence.
- Light/dark theme with saved browser preference.
- Responsive sidebar behavior for mobile and desktop.
- Empty state with visual feedback when there are no tasks.

## Technologies

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React (icons)
- ESLint 9

## Project Architecture

```text
my-tasks-react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   └── tasks/
│   │       ├── TaskFilter.jsx
│   │       ├── TaskInput.jsx
│   │       ├── TaskItem.jsx
│   │       └── TaskList.jsx
│   ├── hooks/
│   │   └── useTasks.js
│   ├── pages/
│   │   └── TasksPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── vite.config.js
└── package.json
```

## How to Run Locally

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
git clone https://github.com/brunoliratm/My-Tasks-React.git
cd My-Tasks-React
npm install
```

### Development Environment

```bash
npm run dev
```

Open the address shown in the terminal (usually <http://localhost:5173>).

## Available Scripts

| Script          | Description                                           |
| --------------- | ----------------------------------------------------- |
| npm run dev     | Starts the development server with hot reload.        |
| npm run build   | Generates the production build in dist/.              |
| npm run preview | Runs a local server to validate the production build. |

## Data Persistence

Tasks and theme preference are stored in the browser's localStorage:

- tasks key: task list.
- theme key: preference between light and dark.

## Contribution

Contributions are welcome.

1. Open an issue describing the enhancement or bug.
2. Create a feature branch.
3. Submit a pull request with clear context and objective.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Bruno Magno

- GitHub: <https://github.com/brunoliratm>
- Repository: <https://github.com/brunoliratm/My-Tasks-React>
