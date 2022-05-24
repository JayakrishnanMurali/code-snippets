import { google } from "googleapis";

export default async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: "1S0dHGWsymzIzUdzc3JE4d8MVjpXcj4uc_4LYafGtG44",
    range: "A1:C1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        ["01/01/2020", "Jayakrishnan", "Alappuzha"],
        ["02/02/2020", "Rahul Ram", "Bangalore"],
      ],
    },
  });

  return res.status(201).json({
    data: response.data,
  });
};
