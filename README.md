# 🩺 Care Connect

> [!NOTE]
> For detailed documentation, please refer to [DOCUMENTATION.md](./DOCUMENTATION.md).

**Care Connect** is a secure, user-friendly telemedicine platform that connects patients and doctors for remote consultations, appointment scheduling, and health record management.  
The platform reduces the need for physical visits while helping healthcare providers manage their time effectively.

---

## 🚀 Features

### 👤 Patient Portal

- Register and log in securely
- Manage personal profile
- Book and cancel appointments
- Access medical history

### 🩺 Doctor Portal

- Register and log in securely
- Manage profile and availability
- View patient history and case details

### 🛠️ Admin Panel

- Admin login and authentication
- Verify doctor credentials
- Manage users (approve, block, or delete)
- Monitor platform activity

### 📱 General

- Responsive web design for mobile and desktop
- Role-based navigation (Patient, Doctor, Admin)
- Mock data integration for development
- **Health Resources**: Real-time health topics fetched from MyHealthfinder API

---

## 🌟 Nice-to-Have Features (Future)

- Video consultations (WebRTC or Zoom API)
- Prescription upload and sharing
- Email/SMS appointment reminders
- Search and filter doctors by specialty
- Dark mode
- Multi-language support

---

## 🛠️ Tech Stack

| Layer           | Tech                                     |
| --------------- | ---------------------------------------- |
| Frontend        | React, TypeScript, JavaScript, HTML, CSS |
| State Management| Zustand                                  |
| Styling         | Tailwind CSS                             |
| Version Control | Git + GitHub                             |
| Design Tools    | Figma (Wireframes)                       |
| APIs            | MyHealthfinder API (v4)                  |
| Optional        | Node.js + Express (for backend), Docker  |

---

## 📂 Project Structure

```text
care-connect/
├── public/ # Static files (favicon, index.html)
│
└── src/ # Application source code
    ├── assets/ # Images, icons, and logos
    │
    ├── components/ # Reusable UI components
    │   ├── admin/ # Admin-specific components
    │   └── common/ # Common components
    │
    ├── context/ # React Context
    │   └── AuthContext.tsx # Authentication provider and hook
    │
    ├── data/ # Mock data
    │   └── mockData.json
    │
    ├── pages/ # Page-level components
    │   ├── Patient/
    │   ├── Doctor/
    │   └── Admin/
    │
    ├── services/ # API services
    │   ├── authService.ts
    │   └── healthService.ts # MyHealthfinder API service
    │
    ├── store/ # State management
    │   └── store.ts # Zustand store
    │
    ├── App.tsx # Main App component
    ├── main.tsx # React entry point
    └── vite-env.d.ts # TypeScript environment types
    │
    ├── eslint.config.js # ESLint configuration
    ├── vite.config.ts # Vite configuration (Proxy setup)
    ├── package.json # Project metadata and dependencies
    └── README.md # Project documentation
```

---

## 🤝 Collaboration Workflow

1. **Branch Naming:**  
   Use `feature/feature-name` for new features. Example: `feature/patient-booking`.

2. **Git Flow:**

   - `main` → Always stable
   - `dev` → Staging branch
   - `feature/*` → Individual feature branches

3. **Commit Style:**  
   Follow [Conventional Commits](https://www.conventionalcommits.org):

   ```
   feat: add booking page
   fix: resolve navbar styling bug
   refactor: improve context structure
   ```

4. **Code Review:**

- Create a Pull Request (PR) to merge features into `dev`.
- At least **2 teammates** must review and approve before merging.

---

## 📝 Development Setup

1. **Clone Repo**

```bash
git clone https://github.com/amegahed12/Care-Connect.git
cd care-connect
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run Development Server**

```bash
npm run dev
```
