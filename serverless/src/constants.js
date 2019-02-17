const ON_PRODUCTION = process.env.NODE_ENV === "production";
const ON_DEVELOPMENT = process.env.NODE_ENV === "development";
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const GOOGLE_SHEET_ID = "1JrXaQkSndIfU7nh3NVqhzz8mtITuZlTlL56AP-6Wazs";
const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_FILE_PATH =
  "../.service-account-credentials.json";
const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS = ON_PRODUCTION
  ? JSON.parse(process.env.SERVICE_ACCOUNT_CREDENTIALS)
  : require(GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_FILE_PATH);

const GCP_PROJECT_ID = "sheets-as-cms";
const GCP_BUCKET_ID = "sheets-cms-frontend";
const INDEX_FILE_PATH = "index.html";

module.exports = {
  ON_PRODUCTION,
  ON_DEVELOPMENT,
  CLIENT_SECRET,
  GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_FILE_PATH,
  GOOGLE_SERVICE_ACCOUNT_CREDENTIALS,
  GCP_PROJECT_ID,
  GCP_BUCKET_ID,
  INDEX_FILE_PATH
};