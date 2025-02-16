# 🖥️ TechWordle - A Developer's Word Game

## 🎯 About The Game

TechWordle challenges developers to guess technical terms, library names, and programming concepts. Each day features a new word from the vast world of technology and programming. With an intuitive interface featuring both light and dark modes, you can play comfortably regardless of your preferred development environment.

### ✨ Features

- 💻 Curated dictionary of technical terms and library names
- 🎨 Seamless theme switching between light and dark modes
- 📖 Comprehensive how-to-play guide accessible anytime
- 🎯 Daily technical challenges
- 📊 Progress tracking and statistics
- 💾 Persistent game state and settings
- ⌨️ Keyboard shortcuts for efficient play
- 📱 Responsive design for coding on the go

## 🎮 Game Interface

The game features a clean, modern interface with:

- Theme Toggle: Switch between light and dark modes with a single click
- How to Play: Access game rules and examples through the help button
- Virtual Keyboard: Interactive key display showing letter statuses
- Statistics: Track your solving progress and streaks

## 🎯 How to Play

Access the in-game tutorial anytime by clicking the "How to Play" button. Here's a quick overview:

1. Guess the tech term in 6 tries
2. Words include library names (like REDUX), tech terms (like QUERY), or coding concepts
3. Color indicators show your progress:
   - 🟩 Green: Letter is correct and in right spot
   - 🟨 Yellow: Letter is in word but wrong spot
   - ⬜ Gray: Letter is not in word

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/yourusername/techwordle.git

# Install dependencies
cd techwordle
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start playing!

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [React Context](https://reactjs.org/docs/context.html)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com)

## 📂 Project Structure

```
techwordle/
├── components/
│   ├── GameBoard/
│   ├── Keyboard/
│   ├── ThemeToggle/
│   ├── HowToPlay/
│   └── Stats/
├── data/
│   └── wordlist.ts    # Technical terms dictionary
├── contexts/
│   └── ThemeContext.ts
├── hooks/
├── pages/
├── styles/
├── types/
└── utils/
```

## 🧪 Running Tests

```bash
# Run test suite
npm test

# Watch mode
npm run test:watch
```

## 📈 Roadmap

- [ ] Add more technical categories (Frontend, Backend, DevOps)
- [ ] Implement difficulty levels
- [ ] Add programming language-specific modes
- [ ] Include brief explanations of terms after each game
- [ ] Add keyboard shortcuts for theme switching
- [ ] Enhance accessibility features

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Word List Contributions
Want to add more technical terms? Submit a PR to update `data/wordlist.ts`. Ensure words are:
- 5 letters long
- Technology-related
- Commonly used in development

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👏 Acknowledgments

- Inspired by the original [Wordle](https://www.nytimes.com/games/wordle/index.html)
- Amazing developer community for word suggestions
- Open source libraries used in this project

## 📫 Contact

Uday N. Chakraborty - [@uday-nc](https://github.com/uday-nc)

---
<div align="center">
Built with 💻 by developers, for developers
</div>
