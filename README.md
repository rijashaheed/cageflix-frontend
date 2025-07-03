🎬 Cageflix
Working Demo:
👉 https://cageflix-frontend-eight.vercel.app/

⚠️ Important Note:
Since the IMDb dataset doesn't include images, a set of 10–12 sample pictures is used repeatedly across movies. While search functionality works correctly, please don’t be confused by unrelated visuals.

⚙️ Setup Instructions
-Frontend
Clone this repository:
git clone https://github.com/rijashaheed/cageflix-frontend.git

-Navigate into the project:
cd cageflix-frontend

-Install dependencies:
npm install

-Run the app locally:
npm run dev
(Connected to the deployed backend API)

-Local Backend Setup (optional)
To run both frontend and backend locally:

-In App.jsx, comment the deployed fetch URL and uncomment the local one.

-Then, visit the backend repository for its setup instructions.

🧠 Tech Stack & Rationale
Frontend: React.js – for fast UI rendering and component-based design

Styling: Tailwind CSS – for clean, utility-first and responsive layouts

Backend: Node.js + Express – lightweight, scalable, and API-friendly

Database: MongoDB Atlas – flexible document-based structure, ideal for media content

🚧 Known Issues
Backend may experience a short delay on first load (Render free-tier cold start)

🌱 Future Enhancements
Add IMDb-style movie ratings (stars, score)
Integrate related movie posters and trailers
Add watch later / bookmark functionality
Create a login/signup flow for user customization

📬 Contact
For questions or issues, feel free to reach out:
📧 shaheedrija@gmail.com

