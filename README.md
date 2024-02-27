# Team Profile Generator

## Description

The Team Profile Generator is a command-line application that allows managers to easily generate a webpage displaying summaries for each member of their software engineering team. This application prompts the user to enter information about team members, including managers, engineers, and interns, and then generates an HTML file with the provided information.

## Features

- Add team members: The application allows users to add managers, engineers, and interns to their team.
- Gather information: Users are prompted to enter information such as name, employee ID, email address, and specific details depending on the role (office number for managers, GitHub username for engineers, and school for interns).
- Generate HTML: Once all team members are added, the application generates an HTML file displaying summaries for each team member, including their name, role, ID, email, and role-specific information.
- Easy to use: The application provides a user-friendly interface with prompts and menus for adding team members and finishing the team building process.

## Installation

To install and use the Team Profile Generator, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

After installing the dependencies, you can use the Team Profile Generator as follows:

1. Open a terminal and navigate to the project directory.
2. Run `node index.js` to start the application.
3. Follow the prompts to enter information about team members, including managers, engineers, and interns.
4. Choose to add additional team members or finish building the team when done.
5. Once all team members are added, the application will generate an HTML file in the `output` folder.

## Credits

- [Inquirer.js]
- [Node.js]
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
