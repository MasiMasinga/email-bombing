# NodeJS Email-Spammer
A simple JavaScript snippet to spam emails with a message repeating a given number of times.
This snippet prompts the user to input the number of emails they want to send and the recipient email address, then sends the specified number of emails every 2 minutes. It also includes rate limiting logic to avoid getting flagged for spamming. The program stops after sending emails for 1 hour.

## Getting Started

1. clone the GitHub Repository `gh repo clone MasiMasinga/email-bombing`.

2. install [Node.js v10.xx](https://nodejs.org/en/) on your local machine

3. open shell inside project
    * run ``npm install``
    * run ``node index.js``

4. Instructions on How to setup Nodemailer using Gmail - https://miracleio.me/snippets/use-gmail-with-nodemailer/

5. Once project is up and running, the first prompt you will receive ``How many emails do you want to send? ``

## Tips
- Send messages in chunks smaller than 50 messages at a go to avoid server from timing out.
- By default, Gmail accounts have a sending limit of 500 emails per day. Gmail Workspace (formerly G Suite) accounts have a sending limit of 2000 emails per day.
- If Gmail detects the email bomber, sending from that account may be temporarily paused; use at your own risk.

## Disclaimer
- The creator of this tool cannot be held responsible for any outcome resulting from its use. Please remember that this tool is intended for fun and games only and should not be used for harmful intentions. It is wrong and illegal to use email bombers to harass or attack others, and we do not support such actions in any way.




