# Chapter 1: Tools
The first step of becoming a full-stack developer is learning the tools of our trade.


## Objectives
We've defined the following objectives:

After this chapter, students will...

1. [Install Chrome][chrome]
1. [Install Sublime Text][sublime]
1. [Understand the Value & Basics of Keyboard Commands][keyboard]
1. [Understand Basic Unix Commands][unix]
1. [Understand Basic Git Commands][git]
1. [Link Git with Github][github]


## Install Chrome
If you haven't already, you'll want to have Chrome installed on your computer. Chrome is a great browser and comes with many developer tools out of the box. It also allows for a number of plugins to be installed which allow for even more functionality.

---
##### Do this:
1. Install the [Chrome Web Browser](https://www.google.com/chrome/browser/desktop/index.html).
1. Set it to be your default browser.


## Sublime Text
Every web developer needs a text editor; it's their most powerful tool. The text editor of choice, especially for new developers, is Sublime Text. We can understand the rationale: it's easy to use, it provides core functionality (such as syntax highlighting), and it can be further customized with all kinds of great packages.

---
##### Do this:
1. Install [Sublime Text 3](http://www.sublimetext.com/3)


## The Value of Keyboard Commands
You'll quickly learn that the primary tool of our trade is the keyboard. This tool is so valuable to us that we use it as much as possible. If there's a keyboard command that we can use instead of a trackpad or mouse, then we'll prefer the keyboard. This reality may shock you, especially the thought that you may have to become highly proficient using the keyboard. There's a reason, however, why you should embrace this practice: Keyboard commands make us more efficient.

Learning a single keyboard command, such as opening [Spotlight](https://en.wikipedia.org/wiki/Spotlight_(software)), can save you precious seconds from unnecessary clicking and scrolling. If we consider that a developer will open Spotlight dozens of times on a typical day, we'll notice that the seconds from this one shortcut will save us minutes. Imagine the amount of time you would save if you learned more commands. Those extra minutes, and eventually hours, could be spent on something better, such as raiding the pantry!

In the rest of this document, you'll be introduced to the keyboard commands that will save you a lot of time during your daily workflow in class and once you're on the job.

#### Keyboard Commands
The following commands are some of the most useful you can learn:

- opening Spotlight
    1. ⌘ + Spacebar

- opening Terminal
    1. Spotlight
    1. "ter" + Enter

- closing a program
    1. ⌘ + Q

- saving a file
    1. ⌘ + S

- taking a screenshot
    1. ⌘ + Shift + 4
    1. drag your cursor over the desired section of your screen

- opening Preferences / Settings for most applications
    1. Open a program
    1. ⌘ + ,

- switching between open applications
    1. ⌘ + tab
    1. Hold ⌘ and keep pressing tab to switch to more applications

- switching between windows on a single application
    1. ⌘ + ~

- creating the Apple Logo 
    1. Option + Shift + K

- get some lorem ipsum text
    1. Option + Shift + L

- opening Chrome
    1. Spotlight
    1. "chr" + Enter

- increase/decrease the size of text on a page
    1. ⌘ + +/-

- find something on the page in a browser window
    1. ⌘ + F

- changing tabs of a browser window
    1. ⌘ + Option + ◀ (or) ▶
    1. ⌘ + Option + [the position of the tab in your browser window]

- opening a new tab
    1. ⌘ + T

- opening a new window
    1. ⌘ + N

- closing a tab
    1. ⌘ + W

- open the last tab you closed
    1. ⌘ + Shift + T

- saving a page as a bookmark
    1. ⌘ + D

- moving your cursor to the location bar (where the url is)
    1. ⌘ + L

- opening [Sublime](http://www.sublimetext.com/)
    1. Spotlight
    1. "subl" + Enter

- go to the beginning / end of a line
    1. ⌘ + ◀ (or) ▶

- go back / forward one word
    1. Option + ◀ (or) ▶

- opening file search in Sublime
    1. ⌘ + P

- opening/closing the console in Sublime
    1. Ctrl + ~

- opening/closing Package Control in Sublime
    1. ⌘ + Shift + P

---
##### Do this:
1. [Open this file](https://github.com/gSchool/prework/tree/master/_01_tools) up on chrome and close all other applications.

1. Via Spotlight, open Sublime Text.

1. Using your keyboard switch back and forth between Sublime and Chrome (⌘ + tab). You can now use only your keyboard (with one exception).

1. Switch to Sublime and Open the Preferences. These are your Sublime preferences.

1. Add the following two lines right after the first curly brace ( `{` ):

  ```
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  ```

1. Save the file.

1. Switch back to Chrome and open a new tab. Enter in the following URL:

  ```
  https://packagecontrol.io/installation
  ```

1. Move between this tab and the `packagecontrol` tab using your keyboard.

1. Using your mouse, copy (⌘ + C) the text under Sublime Text 3 which begins with `import urlib.request...` and ends with `.write(by)`.

1. Back to your keyboard! Switch to Sublime Text and open the Sublime Text console.

1. Paste (⌘ + V) the text into the console. You may need to hit Enter to get it to run.

1. You should have Package Control installed! You'll need to restart the application to get it working in full. Close Sublime Text and then re-open it.

1. To check that package manager is installed, open up Package Control with the shortcut and then type 'list packages'.

1. Press Enter and you should see a list of your packages. Using the shortcut again should close the Package Manager.

1. Re-open Package Manager and type 'install'. Hit Enter on Install Package.

1. Once the packages are loaded find the 'Nyan Cat' plugin and install it.

1. Check to see if it's installed by going back to List Packages. Don't worry -- it shouldn't work just yet!

1. Close Sublime and go back to Chrome.

1. Go to the tab you have open with Package Control site, get into the location bar, and go to: `codeacademy.com`.

1. Save the Code Academy page as a bookmark. Close the Code Academy tab. You should be back at this page and have done lots of cool things with just your keyboard!


## Unix Commands
Every developer will perform certain tasks--navigating a file system, viewing files of a directory, etc. The following commands will help you complete these tasks and are often faster than trying to do these same tasks in the Finder.

> To use Unix commands, you'll need to open a command-line interface, such as the [Terminal](https://en.wikipedia.org/wiki/Terminal_(OS_X)).

1. Navigating through a directory
  - `cd [argument]`
1. Print the current directory
  - `pwd`
1. Viewing files and directories
  - `ls [flag]`
1. Creating a file
  - `touch [filename]`
1. Copying a file
  - `cp [origin-path/origin-filename] [destination-path/destination-filename]`
1. Moving a file
  - `mv [origin-path/origin-filename] [destination-path/destination-filename]`
1. Creating a directory
  - `mkdir [directory]`
1. Open a file with the file reader
  - `less [filename]`
1. Reading a file
  - `cat [filename]`
1. Opening a file or directory
  - `open [filename or directory]`
1. Send the output of one command to a file
  - `[command] > [filename]`
1. Deleting a file
  - `rm [filename]`
1. Deleting a directory
  - `rm -rf [directory]`

*Additional Resources*: [How to Use Terminal: The Basics](http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/).

---
##### Do this:
1. Open up Terminal with Spotlight.

1. Go to your home directory by typing `cd`.

1. Print out the current directory and take note of what it is.

1. List out the folders in your home directory and locate the Desktop and Downloads folder.

1. Create a new folder called `galvanize`. Enter that newly created folder, and then create a new folder inside called `prework`.

1. Go into the `prework` folder and create a new file called `unix-commands.txt`.

1. Open Sublime and navigate to this new `.txt` file. Type in your name on one line and your favorite color on the next line.

1. Open up Chrome and go to the following url. A file should immediately be downloaded!

  ```
  https://github.com/wiggin15/SublimeNyan/raw/master/Nyan.ttf
  ```

1. As a default, the downloaded file _should_ be in your Downloads folder but you may have manually changed it to be another folder (the Desktop is also common). Back in your Terminal, change the directory to your Downloads (or equivalent) folder.

1. List out the files there and find `Nyan.ttf`.

1. Move the `Nyan.ttf` file into the following directory: `~/Library/Fonts/`.

1. Go back to Sublime and the `unix-commands.txt` file you created. You should see Nyan Cat at the bottom of the screen as you move around the file and type! (If not, try restarting Sublime.)


## Git Commands
In the most simplistic of terms, Git manages different [versions of files](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control). Git does this amazingly well, and it's the reason why [most web-based companies use Git](http://git-scm.com/#companies-projects) to manage their codebases. We will use Git just about every day and you will likely use it as often at work.

You should have git already installed. Open your terminal and type in `git`. The terminal should either list a bunch of git commands or prompt you to install git. If for some reason that doesn't happen, try [installing git manually](http://git-scm.com/download/mac).

To learn Git, we're going to sign-up for two websites that have a number of free modules on how to code. We'll also read through a tutorial that discusses some of the basics of Git.

---
##### Do this:
1. Sign-up for an account on [Code School](https://www.codeschool.com).

1. Complete [Code School's Try Git](https://try.github.io/levels/1/challenges/1).

1. Sign-up for an account on [Code Academy](https://www.codecademy.com).

1. Complete [Code Academy's Learn Git](https://www.codecademy.com/learn/learn-git).

1. Read [Atlassian's Getting Started](https://www.atlassian.com/git/tutorials/setting-up-a-repository) (in particular the `git init` and `git config` sections).

1. Go into the `prework` folder you created in the previous step and create a new folder called `git-practice`.

1. Go into that folder and initialize git.

1. Create a new file with any name.

1. Add the file to the staging area.

1. Commit the file with a commit message! (e.g. 'I am adding files to git!')

1. With a git command, log your commit history and save that to a file called 'log.txt'.
  * Hint: Use one of the new commands you learned above to do this.


## Git with Github
Git repositories can be stored online using Github, an extremely popular hosting service. Git and Github are _different_. `git` is a program you run on your machine while Github is a website that stores those repositories. Repositories live on your machine and on Github. The primary goal of Github is to make collaboration with other developers easy.

You should have already created a Github account to get access to the prework.

1. Generate an [SSH Key](https://help.github.com/articles/generating-ssh-keys/). You'll use this for connecting to Github.

1. Create a [Github Repository](https://help.github.com/articles/create-a-repo/). Call it `git-practice`.

1. Follow the instructions on screen to push up your local repository to Github (you can skip the part about the README file).

1. Read more about the [Pull-Request Workflow](https://github.com/asmeurer/git-workflow).

*Additional Resources*: [Atlassian's Collaborating](https://www.atlassian.com/git/tutorials/syncing)

# Conclusion
You've done it! You've acquired the basic tools of a web developer. We're ready to take the next step of the pre-course: [Chapter 2: HTML][next-page].

[chrome]: #install-chrome
[sublime]: #sublime-text
[keyboard]: #the-value-of-keyboard-commands
[unix]: #unix-commands
[git]: #git-commands
[github]: #git-with-github

[next-page]: ../_02_html
