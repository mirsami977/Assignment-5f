# CleanCity - Environmental Issue Reporting App

A full-stack MERN application that allows users to report, track, and contribute to cleaning and environmental issues in their local area. Users can post issues, view details, make contributions, and track their own reports.

---

## **Live Site**
[Visit Live Site](https://your-live-site-url.com)

---

## **Pages & Features**

### 1. **Home Page**
- Banner with 3 slides: garbage issue, community cleaning, sustainability.
- Category Section:
  - Garbage
  - Illegal Construction
  - Broken Public Property
  - Road Damage
- Recent Complaints: Shows latest 6 issues from MongoDB
- Community Stats: Total users, total issues resolved/pending
- Volunteer CTA: Join clean drive

**Design Screenshot:**
![Home Page](./screenshots/homepage.png)

---

### 2. **Login / Register**
- Email & Password authentication with Firebase
- Google Sign-In
- Validation: Uppercase, lowercase, min 6 characters
- Redirect to private routes after login

**Design Screenshot:**
![Login Page](./screenshots/login.png)

---

### 3. **Add Issue Page**
- Fields: Title, Category, Location, Description, Image URL, Suggested Budget
- Status auto-set to "ongoing"
- Success & error messages using SweetAlert
- Stores issues in MongoDB

**Design Screenshot:**
![Add Issue](./screenshots/add-issue.png)

---

### 4. **All Issues Page**
- Displays all issues in a 3-column grid
- Card shows: Image, Title, Category, Location, Amount
- “See Details” button for each issue

**Design Screenshot:**
![All Issues](./screenshots/all-issues.png)

---

### 5. **Issue Details Page**
- Title, Category, Location, Description, Image, Date, Amount
- "Pay Clean-Up Contribution" modal with form:
  - Name, Email, Phone, Address, Amount
- Contributors Table showing all contributions for the issue

**Design Screenshot:**
![Issue Details](./screenshots/issue-details.png)

---

### 6. **My Issues Page**
- Table of issues submitted by the logged-in user
- Update Button opens modal for editing
- Delete Button removes issue permanently
- Status dropdown to change between ongoing/ended

**Design Screenshot:**
![My Issues](./screenshots/my-issues.png)

---

### 7. **My Contributions Page**
- Table of contributions made by the logged-in user
- Columns: Issue Title, Category, Paid Amount, Date
- Download PDF report for each contribution

**Design Screenshot:**
![My Contributions](./screenshots/my-contributions.png)

---

## **Tech Stack**
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase Auth
- State & Data Fetching: TanStack Query
- PDF Reports: jsPDF + jspdf-autotable

---

## **GitHub Commits**
- Minimum 15 commits on client-side
- Minimum 8 commits on server-side
- Meaningful commit messages explaining features

---

## **Instructions**
1. Clone the repository
2. `npm install` on both client and server
3. Set up Firebase Authentication and MongoDB URI in `.env`
4. Run server: `npm run server`
5. Run client: `npm start`

---

