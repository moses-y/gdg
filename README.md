# GDG: Conversational AI Agent for Kenya Finance Bill 2025

This project is a conversational AI agent designed to help users understand and interact with the Finance Bill 2025 for Kenya. It leverages [Google Dialogflow CX](https://cloud.google.com/dialogflow/cx) to provide intelligent, context-aware conversations, making complex legislative content accessible to all Kenyans.

## Features

- **Conversational Interface:** Engage in natural language conversations about the Finance Bill 2025.
- **Powered by Dialogflow CX:** Utilizes Google Dialogflow CX for advanced intent recognition and dialogue management.
- **Accessible via Web:** Deployed as a static site on GitHub Pages for easy public access.
- **User-Friendly:** Simple, intuitive interface for both citizens and professionals.
- **Open Source:** Contributions are welcome to improve and expand the agent’s capabilities.

## How It Works

1. **Frontend:** The web interface (HTML, CSS, JS) allows users to interact with the AI agent.
2. **Dialogflow CX Integration:** User queries are sent to a Dialogflow CX agent configured for the Finance Bill 2025, which processes the input and returns contextually relevant responses.
3. **Deployment:** The site is automatically deployed to GitHub Pages using GitHub Actions for continuous integration and delivery.

## Deployment

This project uses GitHub Actions to deploy the site to GitHub Pages. Any changes pushed to the `main` branch (or triggered manually) will automatically update the live site at:

**[https://moses-y.github.io/GDG/](https://moses-y.github.io/GDG/)**

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/moses-y/GDG.git
   ```
2. **Install dependencies:**  
   No build step is required for static deployment. All code is in `index.html`, `script.js`, and `styles.css`.

3. **Dialogflow CX Setup:**  
   - You need a Google Cloud project with Dialogflow CX enabled.
   - Configure your Dialogflow agent for the Finance Bill 2025.
   - Update the frontend to connect to your Dialogflow CX endpoint (see `script.js` for integration points).

4. **Local Development:**  
   Open `index.html` in your browser to test locally.

5. **Deployment:**  
   Push changes to the `main` branch or trigger the GitHub Actions workflow manually.

## Contributing

Contributions are welcome! Please open issues or submit pull requests to help improve the project.

## License

[Specify your license here, e.g., MIT, Apache 2.0, etc.]

---

*This project aims to make the Finance Bill 2025 more accessible and understandable for all Kenyans through conversational AI.*