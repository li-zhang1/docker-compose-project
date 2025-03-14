module.exports = {
  async up(db, client) {
    try {
      await db.collection("movies").insertMany([
        { title: "Avatar" },
        { title: "Star Wars" },
        { title: "Terminator" },
        { title: "Titanic" },
      ]);
      console.log("✅ Movies inserted successfully.");
    } catch (error) {
      console.error("❌ Error inserting movies:", error);
      throw error; // Ensure migration fails if there's an error
    }
  },

  async down(db, client) {
    try {
      await db.collection("movies").deleteMany({
        title: { $in: ["Avatar", "Star Wars", "Terminator", "Titanic"] },
      });
      console.log("✅ Movies deleted successfully.");
    } catch (error) {
      console.error("❌ Error deleting movies:", error);
      throw error; // Ensure rollback fails if there's an error
    }
  },
};

