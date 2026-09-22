# ⚡ EMS Pro — Employee Management System

> A modern, high-performance **Employee Management System** built with **React**, **Vite**, **Tailwind CSS**, and **Supabase**. Features role-based dashboards, real-time database synchronization, interactive stat counters, workforce search directory, and a state-of-the-art glassmorphic dark UI.

---

## ✨ Features

- 🛡️ **Role-Based Workspaces**:
  - **Administrator Dashboard**: Dispatch new tasks to team members, view workforce task breakdown, and search employee profiles.
  - **Employee Dashboard**: Manage personal tasks, accept incoming assignments, and update completion/failure status in real time.
- ⚡ **Supabase Cloud Database Integration**:
  - Seamless sync with PostgreSQL cloud database (`profiles` and `tasks` tables).
  - Built-in fallback mode to `localStorage` if environment variables are not configured.
- 💎 **State-of-the-Art UI/UX**:
  - Deep Space Glassmorphism theme with ambient glowing backdrops.
  - Lucide icons, dynamic stat counters, and progress bar breakdown.
- 🔑 **1-Click Demo Login Shortcuts**:
  - Quick demo credentials buttons for instant testing without manual typing.
- 🔍 **Live Workforce Search Filter**:
  - Real-time filtering by employee name or email.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Glassmorphism |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Backend & Database** | [Supabase](https://supabase.com/) (PostgreSQL + RLS) |
| **Typography** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |

---

## 🔑 Demo Credentials

Test both roles directly from the Login page or using the credentials below:

| Role | Email | Password |
| :--- | :--- | :--- |
| 🛡️ **Admin** | `admin@me.com` | `123` |
| 👨‍💼 **Employee** | `e@e.com` | `123` |
| 👨‍💼 **Employee (Sneha)** | `employee2@example.com` | `123` |
| 👨‍💼 **Employee (Ravi)** | `employee3@example.com` | `123` |

---

## 🚀 Quick Start Guide

### 1. Clone the Repository
```bash
git clone https://github.com/Anupt03/Employment-Management-System.git
cd Employment-Management-System
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory (or copy from `.env.example`):
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Setup Supabase Database Schema
1. Open your [Supabase SQL Editor](https://supabase.com/dashboard).
2. Copy and run the SQL script located in [`supabase/schema.sql`](./supabase/schema.sql).

### 5. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🗄️ Database Schema

### `profiles` Table
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` (PK) | Unique user identifier |
| `first_name` | `TEXT` | User's full/first name |
| `email` | `TEXT` (Unique) | User email address |
| `password` | `TEXT` | Login password |
| `role` | `TEXT` | User role (`admin` \| `employee`) |

### `tasks` Table
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` (PK) | Unique task identifier |
| `assigned_to` | `UUID` (FK) | References `profiles.id` |
| `task_title` | `TEXT` | Title of the task |
| `task_description` | `TEXT` | Task instructions |
| `task_date` | `TEXT` | Task due date |
| `category` | `TEXT` | Task category (e.g. Design, Dev, QA) |
| `status` | `TEXT` | Status (`newTask` \| `active` \| `completed` \| `failed`) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
