const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Seed data
  const users = [
    {
      username: "user1",
      email: "user1@example.com",
    },
    {
      username: "user2",
      email: "user2@example.com",
    },
    {
      username: "user3",
      email: "user3@example.com",
    },
  ];

  const thoughts = [
    {
      thoughtText: "This is user1's first thought",
      username: "user1",
      reactions: [],
    },
    {
      thoughtText: "This is user2's first thought",
      username: "user2",
      reactions: [],
    },
    {
      thoughtText: "This is user3's first thought",
      username: "user3",
      reactions: [],
    },
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.log("Seeding complete!");
  process.exit(0);
});
