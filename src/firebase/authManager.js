import admin from 'firebase-admin';

// Actualiza la ruta al nuevo nombre del archivo
const serviceAccount = JSON.parse(`${process.env.FIREBASE_SERVICE_ACCOUNT}`);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const authAdmin = admin.auth();
