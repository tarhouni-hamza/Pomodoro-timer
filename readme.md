# Pomodoro Timer

A simple focus timer made with HTML, CSS and vanilla JavaScript. I built it while learning to help me focus .

**Live demo:** coming soon

## Features
- Focus (25 min), short break (5 min) and long break (15 min)
- Start / pause / reset
- Counts how many focus sessions you finished
- Beep sound when time is up
- Time shows in the browser tab title

## How to run
1. Clone the repo or download the files
2. Open `index.html` in your browser

No install needed.

```bash
git clone https://github.com/YOUR-USERNAME/pomodoro-timer.git
cd pomodoro-timer
```

## Project structure
```
pomodoro-timer/
├── index.html   # page structure
├── style.css    # styling
├── script.js    # timer logic
├── LICENSE
└── README.md
```

## What I learned
- Selecting and changing elements with the DOM
- `setInterval` and `clearInterval`
- Using one `isRunning` variable to track the state of the app

## What I want to improve
- The timer can drift if the tab is in the background (I should use `Date.now()` instead of subtracting 1 each second)
- Save the session count with `localStorage`
- Let the user change the minutes
- Automatically switch to a break after a focus session

## License
MIT, see the [LICENSE](LICENSE) file.
