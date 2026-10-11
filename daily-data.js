/*
  ================================================================
  DAILY UPDATE FILE — EDIT THIS FILE EACH MORNING
  ================================================================

  Change only the words and times inside quotation marks.
  Keep the commas, quotation marks, brackets and field names in place.
  Save the file, then refresh the website.
*/

window.DAILY_DATA = {

  // TODAY AT A GLANCE
  date: "11.10.2026",
  session: "Day 5 · Round 3",
  gatesOpen: "10:30",
  firstMatch: "12:00",
  weather: "26°C · Mostly Sunny",

  // CENTRE COURT ORDER OF PLAY
  // Use "yes" on normal tournament days.
  // Change to "no" for the final 4 days, when there are no separate sessions.
  separateSessions: "yes",

  // When separateSessions is "yes", this notice appears after Match 2.
  sessionBreak: {
    time: "After Match 2",
    title: "Day session ends",
    message: "Centre Court will be emptied before the evening session."
  },

  orderOfPlay: [
    {
      time: "12:00",
      round: "Round 3",
      players: "B. Shelton (3) vs A. Gea",
      score: "(5)6-7 (3)6-7",
      note: "Not before 12:00"
    },
    {
      time: "14:30",
      round: "Round 3",
      players: "H. Hurkacz vs Y. Zhou (WC)",
      score: "6-2 3-6 6-3",
      note: "Follows Match 1"
    },
    {
      time: "18:00",
      round: "Round 3",
      players: "A. Zverev (1) vs. Q. Halys",
      score: "",
      note: "Not before 18:00"
    },
    {
      time: "21:00",
      round: "Round 3",
      players: "A. Fokina (25) vs. F. Tiafoe (7) ",
      score: "",
      note: "Follows Match 3"
    }
  ],

  // HOSPITALITY OPENING HOURS
  hospitalityOpen: "11:30",

  hospitalityHours: [
    { label: "Lunch service", opens: "11:30", closes: "15:00" },
    { label: "Dinner service", opens: "17:00", closes: "21:30" },
    { label: "Bar service", time: "17:00", closes: "21:30" }
  ]
};
