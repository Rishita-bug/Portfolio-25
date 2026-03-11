# Google Sheets Setup Guide

This guide will help you store contact information from your resume form in Google Sheets.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "Portfolio Resume Contacts" (or whatever you prefer)
3. In Row 1, add these column headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`

## Step 2: Create the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();

    sheet.appendRow([
      timestamp,
      data.name,
      data.email
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **💾 Save** and name it "Contact Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Select **Web app**
4. Configure:
   - **Description**: Contact form handler
   - **Execute as**: Me (your@email.com)
   - **Who has access**: **Anyone**
5. Click **Deploy**

### Authorization (First Time Only)

You'll need to authorize the script:

1. Click **Authorize access**
2. Choose your Google account
3. You'll see a warning "Google hasn't verified this app"
4. Click **Advanced** → **Go to [project name] (unsafe)**
5. Click **Allow**

## Step 4: Copy Your Web App URL

After deployment, you'll see a **Web app URL** like:

```
https://script.google.com/macros/s/AKfycby...LONG_ID.../exec
```

**Copy this entire URL** - you'll need it in the next step.

## Step 5: Add URL to Your Project

1. In your project root, create a file called `.env.local`
2. Add this line with your actual URL:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec
```

3. Replace `YOUR_ACTUAL_URL` with the URL you copied

**Important:** Use `VITE_` prefix (not `REACT_APP_`) because this project uses Vite.

### Important Notes:
- The file must be named exactly `.env.local`
- It should be in the root directory (same level as `package.json`)
- Don't commit this file to git (it's already in `.gitignore`)

## Step 6: Restart Your Dev Server

If your app is running, **stop it and restart**:

```bash
# Press Ctrl+C to stop
# Then restart
npm start
```

The app needs to restart to load the new environment variable.

## Testing

1. Go to your About page
2. Click "resume"
3. Fill out the form with test data
4. Click "View Resume"
5. Check your Google Sheet - you should see a new row!

## Troubleshooting

### Data not appearing in sheet
- Check Apps Script execution logs: In the script editor, click **Executions** on the left
- Make sure you deployed with "Anyone" access
- Verify the URL in `.env.local` is correct

### Environment variable not working
- Make sure the file is named `.env.local` (not `.env` or `env.local`)
- Make sure it's in the project root
- Restart your development server after creating the file
- Check for typos in `VITE_GOOGLE_SCRIPT_URL`
- Make sure you're using `VITE_` prefix, not `REACT_APP_`

### Resume not opening
- The form will still work even if Google Sheets fails
- Check browser console for errors (F12)

## Security

- The Web app URL is public but can only **add** data to your sheet
- People cannot read your existing data with just the URL
- Keep the actual Google Sheet private (don't share it)
- The URL in `.env.local` is only used during development
- For production, add the environment variable to your hosting provider (Netlify, Vercel, etc.)

## Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. Add the environment variable in your hosting platform's settings
2. Variable name: `VITE_GOOGLE_SCRIPT_URL`
3. Value: Your Web app URL

Each platform has a different place for environment variables - check their documentation.
