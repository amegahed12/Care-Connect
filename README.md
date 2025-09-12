# 🩺 Care Connect

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
| Styling         | Tailwind CSS                             |
| Version Control | Git + GitHub                             |
| Design Tools    | Figma (Wireframes)                       |
| Optional        | Node.js + Express (for backend), Docker  |

---

## 📂 Project Structure

```
care-connect/
├── public/ # Static files (favicon, index.html)
└── src/
├── assets/ # Images, icons, logos
├── components/ # Reusable UI components
│ ├── Button.tsx
│ ├── Navbar.tsx
│ └── ...
├── context/ # React context for auth, theme, etc.
│ └── AuthContext.tsx
├── hooks/ # Custom hooks
│ └── useAuth.ts
├── pages/ # Page-level components
│ ├── Patient/
│ │ ├── PatientDashboard.tsx
│ │ └── BookAppointment.tsx
│ ├── Doctor/
│ │ └── DoctorDashboard.tsx
│ └── Admin/
│ └── AdminDashboard.tsx
├── services/ # API calls & mock data
│ └── api.ts
├── styles/ # Global styles or Tailwind config
├── utils/ # Helper functions
│ └── formatDate.ts
├── App.tsx # App entry point
├── main.tsx # ReactDOM render
└── vite-env.d.ts # TypeScript env types
├── .eslintrc.js # ESLint config
├── .prettierrc # Prettier config
├── package.json
└── README.md
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
