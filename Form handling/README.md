# 📩 Contact Form with Express & React  

This project is a **full-stack contact form** built with:  
- **Backend:** Node.js, Express  
- **Frontend:** React (with and without React Hook Form)  
- **Features:** Form validation, error handling, and API integration  

---

## 🚀 Features
- Express server with `/api/contact` endpoint  
- Handles **form submissions** (name, email, message)  
- Validates input on both frontend & backend  
- Two React implementations:  
  - **Form 1:** Controlled components with `useState`  
  - **Form 2:** Using `react-hook-form`  
- Displays **success & error messages**  

---

## 📂 Project Structure
```
.
├── server.js            # Express backend
├── frontend/            # React app
│   ├── Form.jsx         # Controlled form with useState
│   ├── Form2.jsx        # React Hook Form version
│   └── useFormSubmit.js # Custom hook to handle submission
```

---

## ⚙️ Backend Setup
1. Install dependencies:
   ```bash
   npm install express cors
   ```
2. Start server:
   ```bash
   node server.js
   ```
   Server runs on: **http://localhost:3000**  

---

## 🎨 Frontend Setup
1. Install dependencies:
   ```bash
   npm install react react-dom react-hook-form
   ```
2. Start React app:
   ```bash
   npm run dev
   ```
   Frontend runs on: **http://localhost:5174**  

---

## 🔗 API Endpoints

### GET `/api`
Check if server is running:  
```json
"Server Working"
```

### POST `/api/contact`
Send form data:  
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Response (success):**
```json
{ "success": "Message received. We'll get back to you soon!" }
```

**Response (error):**
```json
{ "error": "All fields are required" }
```

---

## 📝 Example Usage
### Controlled Form (`Form.jsx`)
- Uses `useState` to manage inputs  
- Updates values via `onChange`  

### React Hook Form (`Form2.jsx`)
- Uses `react-hook-form` for validation  
- Cleaner and less boilerplate  

---
