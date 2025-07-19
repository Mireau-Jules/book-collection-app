Overview
A modern web application for managing your personal book collection. This app allows you to catalog, search, and organize your books with a clean, intuitive interface.

Features
View your book collection in an elegant card layout

Search books by title or author

Filter by book categories

Add new books with cover images

Responsive design works on all devices

Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Git

Installation
1. Clone the repositories
First, clone both the frontend and backend repositories:

bash
# Clone frontend
git clone https://github.com/Mireau-Jules/book-collection-app
cd book-collection-frontend

# Clone backend 
git clone https://github.com/your-username/book-collection-backend.git ../book-collection-backend
2. Set up the backend
bash
cd ../book-collection-backend
npm install
3. Set up the frontend
bash
cd ../book-collection-frontend
npm install
Running the Application
Start the backend server
From the backend directory:

bash
npx json-server --watch db.json --port 3001
Start the frontend development server
From the frontend directory:

bash
npm run dev
The application will be available at http://localhost:5173

Project Structure
Frontend
text
/src
  /components
    BookCard.jsx
    BookList.jsx
    SearchBar.jsx
    AddBookForm.jsx
  /styles
    *.module.css
  App.jsx
  main.jsx
Backend
text
/db.json        # Database file
package.json
Configuration
The frontend is configured to connect to http://localhost:3001 by default

To change the API endpoint, create a .env file in the frontend root:

text
VITE_API_URL=http://your-api-url:port
Future Roadmap
User authentication system

Reading progress tracking

Book rating and reviews

Export/import functionality

Mobile application version

Troubleshooting
If you encounter issues:

Ensure both servers are running

Verify no other services are using ports 3001 or 5173

Check console logs for errors

Delete node_modules and reinstall dependencies if needed

Contributing
Contributions are welcome. Please open an issue to discuss proposed changes before submitting a pull request.

License
This project is licensed under the MIT License.