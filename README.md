<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Cat Shift Logo" />
</p>

<h1 align="center">🐈 Cat Shift</h1>

<p align="center">
  <strong>A high-performance collaborative task manager combining Jira's structured workflow with Notion's flexibility. Built with event-driven microservices.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="RabbitMQ" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

---

## 📖 Overview

Cat Shift is an advanced project management tool designed for teams that need both rigid structure and dynamic data tracking. Instead of relying on a monolithic backend, Cat Shift leverages a robust **Event-Driven Microservices** architecture to ensure scalability, isolated domains, and high performance.

### ✨ Key Features
- **O(1) Drag-and-Drop Operations:** Utilizes the **LexoRank algorithm** for instantaneous task reordering without mass database index updates.
- **Dynamic Custom Fields:** Implements PostgreSQL `JSONB` to allow Notion-style custom data attributes per project.
- **Dynamic RBAC:** Granular, string-based access control customized at the project level (e.g., specific roles for `task:move_to_done`).
- **Federated GraphQL API:** A single unified endpoint aggregating schemas from multiple underlying microservices.

---

## 🏗️ Architecture

This project is built as a **NestJS Monorepo** comprising the following logical services:

1. **API Gateway:** Apollo Federation V2 gateway handling client requests.
2. **Auth Service (`auth_db`):** JWT authentication and global identity management.
3. **Project Service (`project_db`):** Workspace, dynamic role creation, and permission mapping.
4. **Task Service (`task_db`):** The core engine handling LexoRank calculations and dynamic JSONB storage.
5. **Comment Service (`comment_db`):** Isolated discussion threads per task.
6. **Log Service (`log_db`):** Passive event listener for audit trails.

*For detailed Product Requirements and Software Specifications, please read the [PRD & SRS Document](docs/PRD_SRS.md).*

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Yarn](https://yarnpkg.com/) or npm
- [Docker](https://www.docker.com/) & Docker Compose

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:rafidaaziz23/cat-shift-be.git
   cd cat-shift-be
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Infrastructure Setup (Database & Message Broker):**
   Start the PostgreSQL instance and RabbitMQ via Docker Compose:
   ```bash
   docker-compose up -d
   ```

4. **Database Migration:**
   Apply Prisma migrations for all isolated microservices:
   ```bash
   cd apps/auth-service && npx prisma migrate dev && cd ../..
   cd apps/project-service && npx prisma migrate dev && cd ../..
   cd apps/task-service && npx prisma migrate dev && cd ../..
   cd apps/comment-service && npx prisma migrate dev && cd ../..
   cd apps/log-service && npx prisma migrate dev && cd ../..
   ```

### Running the Application

Since this is a monorepo, you can run the services concurrently using standard NestJS CLI commands:

```bash
# Start a specific service (e.g., API Gateway) in watch mode
nest start api-gateway --watch

# Start another service (e.g., Task Service)
nest start task-service --watch
```

---

## 🧪 Testing

```bash
# Unit tests
yarn run test

# e2e tests
yarn run test:e2e

# Test coverage
yarn run test:cov
```

---

## 👤 Author

- **Rafida Aziz** - *Backend & Architecture*

## 📄 License

This project is [MIT licensed](LICENSE).