<p align="center">
  <img alt="TripVar" src="/static/images/travel-hero.svg" width="200" />
</p>
<h1 align="center">
  TripVar - AI Travel Planning Assistant
</h1>

<p align="center">
  A modern travel planning platform powered by AI to create personalized trip itineraries.
</p>

## 🚀 Features

- **AI-Powered Planning**: Get personalized travel recommendations based on your preferences
- **Local Insights**: Discover hidden gems and authentic experiences
- **Smart Itineraries**: Optimized travel plans that make the most of your time and budget
- **Real-time Chat**: Interactive AI assistant to help plan your perfect trip

## 🛠️ Tech Stack

- [Gatsby](https://www.gatsbyjs.com/) - React-based static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for user interfaces
- OpenAI API (Coming soon) - For AI-powered travel recommendations

## 🚀 Quick Start

1. **Clone the repository**

   ```shell
   git clone https://github.com/mfarsx/tripvar.git
   ```

2. **Install dependencies**

   ```shell
   cd tripvar
   npm install
   ```

3. **Start development server**

   ```shell
   npm run develop
   ```

4. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`

## 📁 Project Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.js
│   │   └── 404.js
│   └── styles/
│       └── global.css
├── static/
│   ├── images/
│   │   └── travel-hero.svg
│   └── icons/
│       ├── ai-assistant.svg
│       ├── local-insights.svg
│       └── plan.svg
└── gatsby-config.js
```

## 🔄 CI/CD

This project uses GitHub Actions for continuous integration and deployment. The following workflows are configured:

### Build and Test Workflow

Triggers on:

- Push to main branch
- Pull request to main branch

Actions:

- Sets up Node.js environment
- Installs dependencies
- Builds the Gatsby site
- Runs tests (coming soon)
- Creates build artifacts

```yaml
name: Build and Test
on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]
```

## 🎯 Roadmap

- [ ] Integration with OpenAI API
- [ ] User authentication
- [ ] Save and share trip itineraries
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Add comprehensive test suite
- [ ] Implement automated deployment

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mehmet Fatih Arslan**

- GitHub: [@mfarsx](https://github.com/mfarsx)

## 💫 Acknowledgments

- Built with [Gatsby](https://www.gatsbyjs.com/)
- Icons from [Material Design Icons](https://materialdesignicons.com/)
- Powered by [Tailwind CSS](https://tailwindcss.com/)

## 📊 Status

![GitHub Actions Workflow Status](https://github.com/mfarsx/tripvar/actions/workflows/gatsby.yml/badge.svg)
