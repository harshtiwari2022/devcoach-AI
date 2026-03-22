# Smart Parking Lot System

A modern AI-powered chatbot designed to simulate real frontend interviews and help developers prepare effectively.  
This project focuses on **experience design + AI behavior**, making the chatbot feel like a real interviewer instead of a generic chat tool.


## Live Demo
Live URL: [smartparkingsyste.netlify.app](https://smartparkingsyste.netlify.app/)

## GitHub Repository
Repository: [smart-parking-system](https://github.com/harshtiwari2022/smart-parking-system)


## Features

- AI-powered frontend interview simulation  
- Interview mode (ask & evaluate answers)  
- Teaching mode with structured explanations  
- Evaluation feedback (correct, missing, improvements)  
- Context-aware follow-up handling  
- Suggested questions for quick start  
- Typing indicator for realistic experience  
- Clean and responsive chat UI 


## Tech Stack

- **Frontend:** React (Vite)  
- **Styling:** Custom CSS  
- **Backend:** Node.js, Express.js  
- **AI:** Google Gemini API (gemini-2.5-flash)  
- **Deployment:** Vercel 


## Application Flow

1. User opens the chatbot interface  
2. User asks a question or starts interview mode  
3. Backend processes input with custom prompt logic  
4. AI determines response type:
   - Interview  
   - Teaching  
   - Evaluation  
5. Response is returned and displayed with formatting  
6. Chat updates dynamically with smooth UX 


## Components Overview

- **Sidebar** – Navigation and chat reset  
- **ChatBox** – Main conversation logic  
- **Message** – Chat message UI with Markdown support  
- **API Service** – Handles backend communication  


## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/harshtiwari2022/devcoach-AI.git
   ```
2. Navigate to the project directory:
    ```bash
    cd devcoach-AI
    ```
3. Install dependencies:
    ```bash 
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Start Run backend::
    ```bash
    node index.js
    ```


## Future Improvements

- Chat history persistence
- Personalized interview difficulty
- Voice interaction
- Performance tracking dashboard 
- Backend integration with database

## Demo Video

Demo video link: [ Assignment video](https://docs.google.com/videos/d/1MQQtec479tdMem0zAXKlvhBZMfPlQxrwZIvFQeGb2WY/edit?usp=sharing)