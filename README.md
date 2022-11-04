# Toolhub

This is an application which enables one to provide missing citations to Wikimedia content.

## Website link

The website can be accessed via the following link `tool-hub-lilac.vercel.app`.

## System requirement

You can access the website from any browser. As long as your device can run a browser, you're good to go.

## Summary of the user workflow

- The user logs into the website using their Wiki account. Once at the homepage of the website, there are random excerpts provided from Wikimedia that lack citation.
- Clicking on the Fix Now button takes the user to the page where they can make any relevant changes to the specific article.
- Clicking on Next displays a different randomized piece of text lacking citation which can be fixed by clicking on the Provide Citation button.
- The user can also navigate to the other sections of the website such as the Leaderboard or the Dashboard through the navigation links provided on the top right side of every page.

### The Leaderboard

The leaderboard provides a list of users with the most contribution over the specified period of time.
Different timelines including the past 7 days, 14 days, 30 days and All-Time have been provided.
Clicking on any of the timelines should provide the list of users with the most contributions if any within that specified period.

### The Dashboard

The dashboard provides information on the available tools and their usage.
Information provided about the tools include:
(i) Total number of tools in the records.
(ii) Number of tools with missing information.
(iii) Percentage of tools with missing information compared with the total number of tools in the records.
(iv) Number of tools edited using this record management tool.

## Packages Used

Jest testing library - install the jest testing library from npm using the command `npm i jest`.

## Set Up Instructions  and How To Contribute

- To set up the project on your local computer or to contribute to this project, follow the steps below:
- Fork the repository.
- Clone tne repository to your local device using the command `git clone <your forked repository url>`.
- Open the files cloned by moving into the directory and opening it using the text editor of your choice.
- Once the project is open on your text editor, run `npm install` to install all the npm packages used within the project.
- You can now access all the functionalities of the project.
- Run `npm start` to start the development server which will serve your project on port 3000 by default. The project opens automatically in your default browser.
- You can go through the summary of workflow above to view the detailed functionality of the website.
- To continue to contribute to the project, follow the steps below:
- Add an upstream remote pointing to this repository using the command `git remote add upstream <upstream url>`.
- Checkout to a branch using the command `git checkout -b <branch name>` and make any inclusion or changes to the existing code base.
- Once you're done, add your changes to the staging area using the command `git add .`. Remember to include the dot as that ensures you're adding all your changes to the staging area. `git add .` is a shortened version of `git add --all`.
- Commit your changes using the command  `git commit -m <your commit message>`.
- Push your code using the command `git push`.
- Open a pull request and wait for the review of the changes you've made.
