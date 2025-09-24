## React Employee Management System (EMS)

A lightweight Employee Management System built with React and Vite. It features a simple role-based login (admin and employee), task assignment by admin, task progress tracking by employees, and persistence via browser `localStorage`. Designed for demonstration and learning, with a clean, modern UI using Tailwind CSS.

### Tech Stack
- **React 19** for UI
- **Vite 6** for fast dev/build
- **Tailwind CSS 4** for styling
- **ESLint 9** for code quality
- **localStorage** for persistence (no backend required)

### Features
- **Role-based auth (demo)**: Admin and Employee login flows
- **Admin dashboard**: Create and assign tasks to employees
- **Employee dashboard**: View tasks and update status through workflow
- **Task workflow**: New → Active → Completed or Failed
- **Persistent data**: Employees and tasks are stored in `localStorage`

### Demo Credentials
- **Admin**: `admin@me.com` / `123`
- **Employee**: `e@e.com` / `123`

Note: Credentials and data are for demo only and live in the browser.

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Install
```bash
npm install
```

### Run (Development)
```bash
npm run dev
```
This starts Vite with HMR. Open the printed local URL in your browser.

### Build (Production)
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Project Structure
```text
/public
/src
  /assets
  /components
    /Auth
      Login.jsx               # Demo login form; uses provided credentials
    /Dashboard
      AdminDashboard.jsx      # Admin header, task creation, all tasks
      EmployeeDashboard.jsx   # Employee header, counts, task list/actions
    /TaskList
      TaskList.jsx            # Renders task cards by status
      AcceptTask.jsx          # Active task card
      NewTask.jsx             # New task card
      CompleteTask.jsx        # Completed task card
      FailedTask.jsx          # Failed task card
    /other
      AdminHeader.jsx         # Admin view header (logout, etc.)
      Header.jsx              # Employee view header (logout, user info)
      AllTask.jsx             # Admin view of all tasks
      CreateTask.jsx          # Admin form to create/assign tasks
  /context
    AuthContext.jsx           # React context for employee dataset
    AuthProvider.jsx          # Bootstraps localStorage and provides data
  /utils
    localStorage.jsx          # Helpers to init/read/write localStorage
  App.jsx                     # Auth flow and dashboard routing
  index.css                   # Tailwind + global styles
  main.jsx                    # App bootstrap
eslint.config.js
vite.config.js
package.json
README.md
```

## How It Works

### Authentication (Demo)
- `App.jsx` checks `localStorage.loggedInUser` on load to restore session.
- `Login.jsx` calls `handleLogin(email, password)` in `App.jsx`.
- Admin login is hardcoded. Employee login is validated against the employee list from `AuthContext`.

### Data and Persistence
- `AuthProvider.jsx` initializes default employees and tasks via `setLocalStorage()` and exposes `[userData, setUserData]` through `AuthContext`.
- All changes (new tasks, status updates) mutate the in-memory context and are saved back to `localStorage` for persistence across refreshes.

### Task Lifecycle
- Admin creates a task in `CreateTask.jsx` and assigns it to an employee.
- Employee sees tasks in `TaskList.jsx` grouped by status flags: `newTask`, `active`, `completed`, `failed`.
- Employees can progress tasks:
  - New → Active → Completed
  - Active → Failed

## Configuration
No environment variables required. Styling is handled by Tailwind CSS. You can adjust theme and utility classes in `index.css` and any component styles.

## Notes and Limitations
- This is a client-only demo using `localStorage`. Data resets per browser/profile.
- Authentication is not secure and is intended only for demonstration.
- There is no server, database, or API. Add a backend to make it production-ready.

## Extending the App
- Replace `localStorage` with a proper backend (REST/GraphQL) and auth.
- Add user management (create employees, roles/permissions).
- Add task comments, attachments, due date reminders.
- Add filtering, search, and pagination for large task lists.
- Add tests (unit and integration) and CI.

## Scripts
- `npm run dev`: Start dev server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

