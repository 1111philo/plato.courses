# plato.courses

**Harness Workforce Powers.**

This is the **marketing site** for plato — the public-facing site at [plato.courses](https://plato.courses) that introduces the program to students, employers, and EDU partners.

> The plato application (the agentic learning platform itself) lives in a separate repository: **[github.com/1111philo/plato](https://github.com/1111philo/plato)**. The app is hosted at [app.plato.courses](https://app.plato.courses).

## Getting Started

The fastest way to work on this project is using AI-powered development tools.

### Option 1: AI-Powered Development (Recommended)

This project is optimized for AI-assisted coding. We recommend using tools like **Google Antigravity** or **Claude Code**.

1.  **Give Instructions**: Instead of memorizing terminal commands, simply tell your AI agent what you want to do:
    - *"Set up this project and start the development server."*
    - *"I want to add a new feature to the landing page."*
    - *"Fix the alignment on the navigation bar."*
2.  **Let the AI Handle the Rest**: Your AI agent will automatically install dependencies, run the development server, and manage file changes for you.

### Option 2: Manual Setup (Traditional)

If you prefer using the command line:

1.  **Setup**:
    ```bash
    git clone https://github.com/1111philo/plato.courses.git
    cd plato.courses
    npm install
    ```

2.  **Run**:
    ```bash
    npm run dev
    ```

    Open `http://localhost:5173` in your browser.

## Environment Setup

To enable the AI assessment features, you need to set up environment variables locally and/or on GitHub.

1.  **Get your API Keys**:
    *   **Gemini API Key**: [Get a key from Google AI Studio](https://aistudio.google.com/app/apikey).
    *   **ReCAPTCHA Site Key**: [Register a v3 site](https://www.google.com/recaptcha/admin) (ensure you select reCAPTCHA v3).

2.  **Local Development**:
    *   Copy `.env.example` to `.env`:
        ```bash
        cp .env.example .env
        ```
    *   Fill in your keys in `.env`.

3.  **GitHub Pages Deployment**:
    *   Go to your repository **Settings** > **Secrets and variables** > **Actions**.
    *   Add repository secrets for `VITE_GEMINI_API_KEY` and `VITE_RECAPTCHA_SITE_KEY`.
    *   *Note: For Vite apps on GitHub Pages, secrets typically need to be passed during the build process.*

## Contributing

We welcome contributions! If you're looking for things to contribute, please check out the [Issues on GitHub](https://github.com/1111philo/plato.courses/issues).

For detailed information on how to contribute, including our PR process, please see our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## Credits

This project was initially generated with [Google Antigravity](https://deepmind.google/technologies/gemini/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
