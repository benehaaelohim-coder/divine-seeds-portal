DIVINE SEEDS PORTAL - UPDATED FILES

Files:
- Code.gs: Google Apps Script web-app entry point.
- Index.html: portal interface and Firebase client code.

Installation:
1. In your Apps Script project, replace Code.gs with the provided Code.gs.
2. Create/open the HTML file named exactly Index and replace its contents with Index.html.
3. Confirm the Firebase project configuration in Index.html is the intended project:
   projectId: divine-seeds-portal
4. In Firebase Console → Authentication → Sign-in method, enable Email/Password.
5. In Firebase Console → Authentication → Users, confirm the proprietor account exists:
   proprietor@divineseeds.app
6. In Firestore, create users/{AUTH_UID} (document ID exactly the Authentication UID) with:
   role: "proprietor" (string)
   name: "Your Name" (string)
7. Deploy → Manage deployments → Edit (pencil) → select New version → Deploy.
8. Open the deployed web-app URL and sign in with username proprietor and that account's password.

Notes:
- Login now accepts either "proprietor" or the full email address.
- Login errors are shown with the Firebase error code to help diagnosis.
- This is a client-side Firebase app; secure Firestore Security Rules are still required.
- Do not share passwords. The Firebase web API key is included in client code by design, but access must be protected by Firebase Authentication and Security Rules.
