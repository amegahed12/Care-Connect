# Care-Connect Documentation

## 1. Project Overview
Care-Connect is a comprehensive healthcare management platform designed to bridge the gap between patients, doctors, and administrators. It facilitates appointment booking, patient management, and doctor verification, all within a modern, responsive web application.

### Key Features
- **Role-Based Access Control**: Distinct portals for Patients, Doctors, and Administrators.
- **Appointment Management**: Patients can book appointments, and doctors can view their schedules.
- **Doctor Verification**: Administrators can verify doctor credentials.
- **Dashboard Analytics**: Visual insights for administrators and doctors.
- **Responsive Design**: Optimized for desktop and mobile devices.

## 2. Architecture & Tech Stack

### Technology Stack
- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

### Architectural Decisions
- **State Management**: Zustand was chosen for its simplicity and minimal boilerplate. The store is persisted to `localStorage` to maintain state across reloads.
- **Styling**: Tailwind CSS provides a utility-first approach, enabling rapid UI development and consistent design tokens.
- **Routing**: React Router handles client-side navigation with protected routes to ensure security based on user roles.

## 3. Setup & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd care-connect
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

### Running Development Server
Start the local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production
Create a production-ready build:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```

## 4. Folder Structure

```
src/
├── components/         # Reusable UI components
│   ├── admin/          # Admin-specific components
│   ├── common/         # Shared components (Buttons, Inputs, etc.)
│   └── ProtectedRoute.tsx # Route guard component
├── context/            # React Contexts (e.g., AuthContext)
├── data/               # Mock data for development
├── pages/              # Page components (Views)
│   ├── Admin/          # Admin portal pages
│   ├── Doctor/         # Doctor portal pages
│   ├── Patient/        # Patient portal pages
│   └── HomePage.tsx    # Landing page
├── services/           # API and business logic services
│   ├── authService.ts  # Authentication logic
│   └── healthService.ts # External health API integration
├── store/              # Global state management
│   └── store.ts        # Zustand store definition
├── App.tsx             # Main application component & Routing
└── main.tsx            # Entry point
```

## 5. Component Documentation

### Core Components

#### `ProtectedRoute`
- **Path**: `src/components/ProtectedRoute.tsx`
- **Purpose**: Wraps routes to restrict access based on user roles.
- **Props**:
    - `children`: The component to render if access is granted.
    - `allowedRoles`: Array of roles ('admin', 'doctor', 'patient') permitted to access the route.

### Pages

#### Admin Portal
- **Dashboard**: Overview of platform activity.
- **Manage Patients/Doctors**: CRUD operations for users.
- **Credential Verification**: Workflow for approving new doctor accounts.

#### Patient Portal
- **Dashboard**: View upcoming appointments and health metrics.
- **Book Appointment**: Interface to find doctors and schedule visits.

#### Doctor Portal
- **Dashboard**: View daily schedule and patient list.

## 6. State Management

The application uses **Zustand** for global state management, defined in `src/store/store.ts`.

### Store Structure (`AppState`)
- **`registeredUsers`**: Array of all users registered in the system.
- **`appointments`**: Array of all appointments.

### Key Actions
- `addUser(user)`: Registers a new user.
- `addAppointment(appointment)`: Schedules a new appointment.
- `updateAppointment(id, updates)`: Modifies appointment details (e.g., status).
- `getAppointmentsByPatient(patientId)`: Retrieves appointments for a specific patient.

### Persistence
The store uses `persist` middleware to save the state to `localStorage` under the key `care-connect-storage`.

## 7. API Integration

### Proxy Configuration
The project is configured to proxy requests to `https://odphp.health.gov` for health resources.
- **Config**: `vite.config.ts`
- **Prefix**: `/api`

### Auth Service
- **Path**: `src/services/authService.ts`
- **Functionality**: Simulates authentication against mock data and the local store.
- **Mock Credentials**:
    - Admin: `admin` / `admin123`
    - Doctor: (email from mockData) / `doctor123`
    - Patient: (email from mockData) / `patient123`
