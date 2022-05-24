# Usage

### Get Access To Analytics

- Go to the https://console.developers.google.com/

- Create a new project.

- Credentials -> Create Credentials -> Service-account key.

- Click "Enable APIs and services."

- Find "Google Analytics API" and enable it.

### Create Service Account

- Go to https://console.developers.google.com/iam-admin/serviceaccounts .

- Create a service account.

- Click "Create Key" and choose JSON.

- Save the file.

- On the table row, click Actions -> Edit.

- Show Domain-Wide Delegation -> Enable G-Suite Domain-Wide Delegation.

- Go to the Admin panel inside Google Analytics.

- Click "User Management."

- Add the `client_email` from your service account.

### Add Environment Variables

- To securely access the API, we need to include the secret with each request.
