# Exam Archive — Next.js Starter

This is a starter project for your Exam Papers website. It is intentionally minimal so you can run locally and then connect to Firebase & Google Drive service account.

## Steps to run locally
1. Create project folder and save files shown in this document (maintain file paths).
2. Create `.env.local` file in the project root with:

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=app_id

If your Drive files are public and you want the quick dev-mode viewer:
NEXT_PUBLIC_DRIVE_PUBLIC=true

For production Drive proxy (private files):
SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'



3. Install dependencies:

npm install



4. Run dev server:

npm run dev


5. Open http://localhost:3000

## What this starter includes
- `pages/index.jsx` — main browse UI that fetches `/api/papers` (mock)
- `pages/admin.jsx` — admin form to add new paper (currently mock)
- `pages/api/papers` — returns mock JSON (swap with Firestore later)
- `pages/api/drive/[fileId]` — Drive proxy; supports dev-mode using public Drive preview or service account streaming
- `components/PaperCard.jsx` — preview + download UI

## Next steps (to finish production)
- Create Firebase project, enable Firestore and Auth
- Replace `/api/papers` with Firestore queries (see `lib/firebase.js`)
- Implement server-side admin endpoints that verify Firebase ID tokens
- For private Drive files: create a Google Cloud Service Account, share Drive folder with it, and set `SERVICE_ACCOUNT_KEY` env
- Add protective rules and admin checks
