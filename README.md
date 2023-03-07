# Email-Spammer
A simple JavaScript snippet to spam emails with a message repeating a given number of times.
This snippet prompts the user to input the number of emails they want to send and the recipient email address, then sends the specified number of emails every 2 minutes. It also includes rate limiting logic to avoid getting flagged for spamming. The program stops after sending emails for 1 hour.


## Tips
- Send messages in chunks smaller than 50 messages in a go to avoid server from timing out.


