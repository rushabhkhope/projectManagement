# Project Management System

## Overview

The Project Management System is a web application designed to streamline and optimize project management processes. It allows users to create, manage, and track projects, tasks, and categories efficiently. The system facilitates collaboration among team members and provides clear visibility into project progress.

### Key Features:

1. **User Authentication and Authorization:**
   - Users can register and log in securely.
   - Role-based access control ensures proper authorization for different actions.

2. **Project Management:**
   - Users can create, update, and delete projects.
   - Each project includes essential details like title, description, start date, end date, and estimated story points.

3. **Task Management:**
   - Users can create, update, and delete tasks associated with a project.
   - Tasks can be assigned to specific users and categorized for better organization.

4. **Category Management:**
   - Users can create, update, and delete categories for tasks.
   - Categories help in classifying and grouping tasks based on their nature.

5. **User Roles:**
   - Users can have different roles within a project (Admin, Member).
   - Admins have elevated privileges for project management.

6. **Swagger API Documentation:**
   - Well-documented APIs using Swagger for easy integration and understanding.

7. **Category Validation:**
   - Categories are validated to ensure they exist before associating them with tasks.

8. **Unit Testing:**
   - Implementing unit tests using Jest to ensure code reliability.

9. **Swagger Integration:**
   - Centralized Swagger documentation for easy reference and testing.

10. **GitHub Repository:**
    - The project is hosted on GitHub for version control and collaboration.

## Technologies Used:

- **Frontend:**
  - React with Vite for a fast and efficient development experience.
  - Tailwind CSS for responsive and clean UI design.

- **Backend:**
  - Node.js with Express for building robust APIs.
  - MongoDB with Mongoose for database management.

- **Authentication:**
  - JWT (JSON Web Tokens) for secure user authentication.

- **Testing:**
  - Jest and Supertest for unit testing and API testing.

- **Documentation:**
  - Swagger for comprehensive API documentation.

## Next Steps:

- Continue adding functionalities such as task assignments, user roles, and project progress tracking.
- Implement front-end features for a seamless user experience.
- Enhance error handling and implement user feedback mechanisms.

