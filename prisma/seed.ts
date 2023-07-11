import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getFrustrations().map((frustration) => {
      return db.frustration.create({ data: frustration });
    })
  );
}

seed();

function getFrustrations() {
  return [
    {
      author: "Luis",
      content: "I feel like I'm going nowhere.",
    },
    {
      author: "Michael",
      content: "I feel tired every day",
    },
    {
      author: "Julian",
      content: "I'm hopeless and helpless",
    },
    {
      author: "Sylvia",
      content: "I'm sick of feeling like I don't have a voice.",
    },
    {
      author: "Laura",
      content: "I just feel unsatisfied with everything",
    },
    {
      author: "William Jameson",
      content: "I don't want to do anything ever, just lie on my bed all the time.",
    },
    {
      author: "Nina",
      content: "I feel like nothing goes well for me!",
    },
  ];
}