#  DevCoach AI/ Frontend Interview Coach

A modern AI-powered chatbot designed to simulate real frontend interviews and help developers prepare effectively.  
This project focuses on **experience design + AI behavior**, making the chatbot feel like a real interviewer instead of a generic chat tool.


## Live Demo
Live URL: [DevCoach AI](https://devcoach-ai-hf8w.vercel.app/)



<img width="1895" height="986" alt="Screenshot 2026-03-22 145602" src="https://github.com/user-attachments/assets/82df5271-1d93-45d0-a282-18a424165651" />



## GitHub Repository
Repository: [ Frontend Interview Coach]( https://github.com/harshtiwari2022/devcoach-AI.git)


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

Demo video link: [ Assignment video](https://www.loom.com/share/b1026424de304ba79ce8f440ab4c3bc8)
