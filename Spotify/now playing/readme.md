# Usage

### Create Spotify Application

- Go to the https://developer.spotify.com/dashboard/ and login

- Click Create an App.

- Fill out the name and description and click create.

- Click Show Client Secret.

- Save your Client ID and Secret. You'll need these soon.

- Click Edit Settings.

- Add `http://localhost:3000` as a redirect URI.

### Authentication

- There are a variety of ways to authenticate with the Spotify API, depending on your application. Since we only need permission granted once, we'll use the Authorization Code Flow.

- First, we'll have our application request authorization by logging in with whatever scopes we need.

- After authorizing, you'll be redirected back to your `redirect_uri`. In the URL, there's a `code` query parameter. Save this value.

- Next, we'll need to retrieve the refresh token. You'll need to generate a Base 64 encoded string containing the client ID and secret from earlier.

### Add Environment Variables

- To securely access the API, we need to include the secret with each request.
