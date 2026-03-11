# EmailJS Setup Guide

This guide will help you set up EmailJS to automatically send your resume to people who request it.

## What is EmailJS?

EmailJS lets you send emails directly from your website without a backend server. The free tier includes 200 emails per month, which should be plenty for a portfolio site.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** (top right)
3. Create a free account using your email or Google account
4. Verify your email if required

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services** (left sidebar)
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended if you have Gmail)
   - Or any other provider you use
4. Click **Connect Account**
5. For Gmail:
   - Click **Connect to Gmail**
   - Choose your Google account
   - Allow EmailJS to send emails on your behalf
6. Give your service a name (e.g., "Portfolio Gmail")
7. Click **Create Service**
8. **Copy your Service ID** (looks like `service_abc1234`) - you'll need this later

## Step 3: Upload Your Resume

1. In the EmailJS dashboard, click your profile icon (top right)
2. Go to **General** → **Attachments**
3. Click **Upload New Attachment**
4. Upload your resume PDF
5. After upload, you'll see your file listed
6. **Important**: Note the exact filename (e.g., `RishitaB-resume-edited.pdf`)

## Step 4: Create Email Template

1. Go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Replace the default template with this:

### Template Settings:
- **Template Name**: Resume Request

### Email Template Content:

**Subject:**
```
Your requested resume - Rishita Baghel
```

**Content:**
```
Hi {{to_name}},

Thank you for your interest in my work! As requested, I've attached my resume to this email.

Feel free to reach out if you have any questions or would like to discuss potential opportunities.

Best regards,
Rishita Baghel
rishitabaghel@gmail.com
```

### Template Variables:
Make sure these variables are set up:
- `to_name` - The recipient's name
- `to_email` - The recipient's email address
- `reply_to` - Reply-to email (will be set to their email)

### Add Attachment:
1. Scroll down to **Attachments** section in the template editor
2. Click **Add Attachment**
3. Select your uploaded resume file
4. Click **Save**

5. **Copy your Template ID** (looks like `template_xyz5678`) - you'll need this

## Step 5: Get Your Public Key

1. Go to **Account** (left sidebar)
2. Look for **API Keys** section
3. Find your **Public Key** (looks like `AbCdEfGhIjKlMnOp`)
4. Copy this key

## Step 6: Add Configuration to Your Project

1. Open or create `.env.local` in your project root
2. Add these three lines with your actual values:

```
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

Replace:
- `service_abc1234` with your actual Service ID
- `template_xyz5678` with your actual Template ID
- `AbCdEfGhIjKlMnOp` with your actual Public Key

**Important:** Use `VITE_` prefix (not `REACT_APP_`) because this project uses Vite.

## Step 7: Restart Your Dev Server

```bash
# Press Ctrl+C to stop your server
# Then restart it
npm start
```

## Testing

1. Go to your About page
2. Click "resume"
3. Fill out the form with your own email
4. Click "Send Resume"
5. Check your inbox - you should receive your resume!

## Troubleshooting

### Email not arriving
- Check your spam/junk folder
- Verify your Service ID, Template ID, and Public Key are correct in `.env.local`
- Make sure the resume file is uploaded and attached to the template
- Check the EmailJS dashboard under **Email Logs** for any errors

### "Something went wrong" error
- Open browser console (F12) to see detailed error
- Verify all three environment variables are set correctly
- Make sure you're using `VITE_` prefix, not `REACT_APP_`
- Make sure you restarted the dev server after adding variables
- Check that your EmailJS service is connected properly

### Resume attachment missing
- Make sure you uploaded the resume in EmailJS dashboard
- Verify the file is attached to your email template
- The file size must be under 5MB for EmailJS free tier

### Gmail blocking
- If using Gmail, make sure you authorized EmailJS to send from your account
- Check Gmail settings to ensure EmailJS hasn't been blocked

## Email Limits

Free tier: **200 emails/month**

If you exceed this:
- Upgrade to a paid plan ($7-15/month for 1000-5000 emails)
- Or switch to a different solution

## Customization

You can customize the email template in the EmailJS dashboard at any time:
1. Go to **Email Templates**
2. Click on your template
3. Edit the subject, message, or attachments
4. Click **Save**

Changes take effect immediately - no need to redeploy your site!

## Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. Add all three environment variables in your hosting platform's settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
2. Use the same values from your `.env.local` file

Each platform has a different place for environment variables - check their documentation.

## Security Notes

- Your Public Key is safe to include in frontend code
- EmailJS Service ID and Template ID are also safe to expose
- These only allow sending emails via your template, not reading or accessing your email account
- Rate limiting is handled by EmailJS automatically
