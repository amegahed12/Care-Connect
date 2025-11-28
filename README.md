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

```markdown
📂 Project Structure
care-connect/
├── public/ 
│
├── src/ 
│  ├── assets/ 
│  ├── components/
│  │  ├── common/ # Reusable UI components
│  │  │   ├── Button.jsx
│  │  │   ├── Input.jsx
│  │  │   ├── FormField.jsx
│  │  │   ├── Navbar.jsx
│  │  │   ├── Modal.jsx
│  │  │   └── Avatar.jsx
│  │  │
│  │  ├── patient/
│  │  │   ├── AppointmentCard.jsx
│  │  │   ├── DoctorCard.jsx
│  │  │   └── AppointmentForm.jsx
│  │  │
│  │  ├── Admin/
│  │  └── ProtectedRoute.tsx
│  │
│  ├── data/
│  │  └──mockData.json
│  │ 
│  ├── pages/ # Page-level components
│  │  ├── Doctor/
│  │  ├── Admin/
│  │  ├── Patient/
│  │  │  ├── Patient-Login.jsx
│  │  │  ├── Patient-Register.jsx
│  │  │  ├── Profile.jsx
│  │  │  ├── PatientLayout.jsx
│  │  │  ├── Appointments.jsx
│  │  │  └── MedicalHistory.jsx
│  │  │
│  │  └── HomePage.tsx
│  │
│  ├── context/
│  │  └── AuthContext.tsx
│  │
│  ├── services/
│  │ └── api.js
│  │
│  ├── styles/ 
│  │   ├── Appointments.css
│  │   ├── Global.css
│  │   ├── Login_Register.css
│  │   ├── Profile.css
│  │   └── MedicalHistory.css
│  │
│  ├── utils/
│  │  └── formatDate.ts
│  │
│  ├── App.tsx
│  ├── App.css
│  ├── index.css
│  ├── main.tsx
│  └── vite-env.d.ts
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
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
