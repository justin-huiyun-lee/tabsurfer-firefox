# TabSurfer

Open source Firefox extension inspired by tmux. I have waaay too many tabs open for different things, so this will help me organize my tabs.

## What is it

If you've used Tmux before you'll be familiar with this concept. You can name your work sessions, like "Calculus 1", "Cool Project that I'll never finish #100", "Job stuff", etc. Now you don't need the calculus textbook pdf, funny cat videos, and documentations on the same browser window. You can just save them with TabSurfer, and open one set of tabs when you like.

## Credits

This was an idea that my friend [**Mahasvin24**](https://github.com/Mahasvin24) and I worked on (but failed) during a hackathon. I unironically needed this so I tried to rebuild it.
.
.
.
.
.
.
.

## Step-by-Step Build Instructions (I use firefox's API to get all the opened tabs to put them in sessions. I gotta get this approved)

### Prerequisites

- Node.js (Probably any newer versions will work, but I used v22.8.0)
- npm (same as node but I used v10.8.2)

### Steps to Build

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tabsurfer-firefox.git
   cd tabsurfer-firefox
   ```

   just do `npm install` to install all the dependencies.

   I just put the manifest.json into firefox's extension tester and it worked. I'm pretty sure it doesn't work on other browsers cuz I'm using firefox API to get all the tabs to put in sessions.

Also I released this code on github. its open source. I'm not tryna make money off of this. I just wanted to make this for myself and I thought it would be cool to share it with others.
