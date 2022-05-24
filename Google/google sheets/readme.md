# Usage

### Get Access To Sheets

- Go to the https://console.developers.google.com/

- Create a new project.

- Credentials -> Create Credentials -> Service-account key.

- Click "Enable APIs and services."

- Find "Google Sheets API" and enable it.

### Create Service Account

- Go to https://console.developers.google.com/iam-admin/serviceaccounts .

- Create a service account.

- Click "Create Key" and choose JSON.

- Save the file.

- On the table row, click Actions -> Edit.

- Show Domain-Wide Delegation -> Enable G-Suite Domain-Wide Delegation.

- Open your Google Sheet.

- In the top right, click "Share".

- Grant edit permission to your service account email (or make it public).

### Add Environment Variables

- To securely access the API, we need to include the secret with each request.
