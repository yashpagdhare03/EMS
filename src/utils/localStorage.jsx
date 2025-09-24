
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix login bug",
        "taskDescription": "Resolve issue preventing users from logging in.",
        "taskDate": "2025-09-07",
        "category": "Bug Fix",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update docs",
        "taskDescription": "Add instructions for API authentication.",
        "taskDate": "2025-09-10",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Design homepage",
        "taskDescription": "Create wireframes for homepage redesign.",
        "taskDate": "2025-09-12",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "firstName": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Write unit tests",
        "taskDescription": "Increase code coverage for user module.",
        "taskDate": "2025-09-08",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Refactor dashboard",
        "taskDescription": "Improve performance of analytics dashboard.",
        "taskDate": "2025-09-14",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy service",
        "taskDescription": "Push notification service to staging server.",
        "taskDate": "2025-09-09",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Prepare report",
        "taskDescription": "Summarize sprint progress for management.",
        "taskDate": "2025-09-11",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": { "active": 2, "newTask": 0, "completed": 1, "failed": 1 }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Optimize query",
        "taskDescription": "Reduce load time of sales report query.",
        "taskDate": "2025-09-07",
        "category": "Database",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix UI bug",
        "taskDescription": "Resolve misaligned button in settings page.",
        "taskDate": "2025-09-10",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Research library",
        "taskDescription": "Check feasibility of using charting library.",
        "taskDate": "2025-09-13",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Backup DB",
        "taskDescription": "Perform full backup of production database.",
        "taskDate": "2025-09-07",
        "category": "Database",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Review PR",
        "taskDescription": "Check code quality for payment gateway module.",
        "taskDate": "2025-09-09",
        "category": "Code Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Configure CI/CD",
        "taskDescription": "Update pipeline to include security checks.",
        "taskDate": "2025-09-12",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Fix API response",
        "taskDescription": "Correct mismatched fields in API output.",
        "taskDate": "2025-09-08",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Set up meeting",
        "taskDescription": "Schedule sprint planning meeting.",
        "taskDate": "2025-09-07",
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Design poster",
        "taskDescription": "Create event poster for hackathon.",
        "taskDate": "2025-09-11",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix CSS issue",
        "taskDescription": "Resolve broken styles in profile page.",
        "taskDate": "2025-09-09",
        "category": "Frontend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Conduct interview",
        "taskDescription": "Interview candidate for backend role.",
        "taskDate": "2025-09-14",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": { "active": 2, "newTask": 0, "completed": 1, "failed": 1 }
  }
];

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees, admin}

}