interface YogaPose {
  sanskritName: string;
  englishName: string;
  instructions: string[];
  duration: string;
  benefits: string[];
  precautions: string[];
  concerns: string[];
}

export const yogaPoses: YogaPose[] = [
  {
    sanskritName: "Adho Mukha Svanasana",
    englishName: "Downward-Facing Dog",
    instructions: [
      "Start on your hands and knees",
      "Spread your fingers wide and press palms into the mat",
      "Tuck your toes and lift your knees off the floor",
      "Straighten your legs as much as possible",
      "Press your heels toward the ground",
      "Keep your head between your arms, neck relaxed"
    ],
    duration: "Hold for 5-8 breaths",
    benefits: [
      "Stretches the spine, shoulders, and hamstrings",
      "Strengthens arms and legs",
      "Improves circulation",
      "Energizes the body"
    ],
    precautions: [
      "Avoid if you have carpal tunnel syndrome",
      "Be careful with high blood pressure",
      "Modify if you have shoulder injuries"
    ],
    concerns: ["back pain", "flexibility", "energy", "stress"]
  },
  {
    sanskritName: "Balasana",
    englishName: "Child's Pose",
    instructions: [
      "Kneel on the floor with toes together",
      "Sit back on your heels",
      "Separate your knees hip-width apart",
      "Lay your torso between your thighs",
      "Extend your arms forward or alongside your body"
    ],
    duration: "Hold for 1-3 minutes",
    benefits: [
      "Gently stretches the back",
      "Relieves stress and fatigue",
      "Calms the mind",
      "Helps with anxiety"
    ],
    precautions: [
      "Avoid if you have knee injuries",
      "Modify if pregnant",
      "Use support under forehead if needed"
    ],
    concerns: ["stress", "back pain", "anxiety", "relaxation"]
  },
  {
    sanskritName: "Virabhadrasana II",
    englishName: "Warrior II",
    instructions: [
      "Stand with feet wide apart",
      "Turn right foot out 90 degrees",
      "Bend right knee over ankle",
      "Extend arms parallel to floor",
      "Gaze over front middle finger"
    ],
    duration: "Hold for 5-10 breaths per side",
    benefits: [
      "Strengthens legs and core",
      "Improves balance and stability",
      "Builds stamina",
      "Opens hips and chest"
    ],
    precautions: [
      "Avoid if you have knee problems",
      "Be mindful of hip alignment",
      "Don't overextend the bent knee"
    ],
    concerns: ["strength", "balance", "energy", "flexibility"]
  }
];

export const concernsList = [
  "back pain",
  "stress",
  "flexibility",
  "energy",
  "strength",
  "balance",
  "anxiety",
  "relaxation"
];