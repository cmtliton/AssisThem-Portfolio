# Email Setup Instructions

## How to Configure Email Sending

The order email functionality uses **nodemailer** with SMTP to send emails to `cmtliton@gmail.com`.

### Step 1: Create Environment Variables

Create a `.env` file in the root of your project with the following variables:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Step 2: Gmail Setup (Recommended)

If you're using Gmail, you need to:

1. **Enable 2-Step Verification** on your Google account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Bulk Gadget Orders" or any name
   - Click "Generate"
   - Copy the 16-character password (use this as `SMTP_PASSWORD`)

3. **Update your `.env` file:**
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # The 16-character app password
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   ```

### Step 3: Alternative Email Providers

#### Outlook/Hotmail
```env
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

#### Yahoo Mail
```env
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

#### Custom SMTP Server
```env
SMTP_USER=your-email@yourdomain.com
SMTP_PASSWORD=your-password
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
```

### Step 4: Test the Email

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Fill out the checkout form and click "Place Order"

3. Check `cmtliton@gmail.com` for the order email

### Troubleshooting

**Error: "Invalid login"**
- Make sure you're using an App Password for Gmail, not your regular password
- Verify your email and password are correct

**Error: "Connection timeout"**
- Check your firewall settings
- Verify SMTP_HOST and SMTP_PORT are correct
- Try port 465 with `secure: true` in the transporter config

**Email not received**
- Check spam/junk folder
- Verify the recipient email is correct
- Check server logs for error messages

### Security Notes

- **Never commit your `.env` file to git** - it contains sensitive credentials
- Use App Passwords instead of your main account password
- Consider using environment-specific configurations for production

