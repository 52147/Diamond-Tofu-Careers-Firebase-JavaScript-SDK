const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

const db = admin.firestore();

app.get("/", async (req, res) => {
  try {
    const resumesRef = db.collection("resumes");
    const snapshot = await resumesRef.get();

    const data = [];
    snapshot.forEach((doc) => {
      const docData = doc.data();
      data.push({ ...docData, id: doc.id });
    });

    res.render("index", { data });
  } catch (error) {
    console.error(error);
    res.render("error");
  }
});

app.post("/update", async (req, res) => {
  const { id, status } = req.body;
  const docRef = db.collection("resumes").doc(id);
  try {
    await docRef.update({ status });
    console.log("Resume status updated successfully.");
    res.status(200).send("Success");
  } catch (error) {
    console.error("Error updating resume status:", error);
    res.status(500).send("Error");
  }
});
