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
  date: "16.10.2026",
  session: "Day 10 · Quater-Finals",
  gatesOpen: "10:30",
  firstMatch: "12:00",
  weather: "26°C · Partly sunny, showers in the evening ",

  // CENTRE COURT ORDER OF PLAY
  // Use "yes" on normal tournament days.
  // Change to "no" for the final 4 days, when there are no separate sessions.
  separateSessions: "no",

  // When separateSessions is "yes", this notice appears after Match 2.
  sessionBreak: {
    time: "After Match 2",
    title: "Day session ends",
    message: "Centre Court will be emptied before the evening session."
  },

  orderOfPlay: [
    {
      time: "12:00",
      round: "Quarter-final",
      players: "T. Arribage / A. Olivetti vs. F. Cabral / J. Tracey",
      score: "",
      note: "Not before 12:00"
    },
    {
      time: "14:30",
      round: "Quarter-final",
      players: "R. Jodar vs. C. Ruud",
      score: "",
      note: "Not before 14:30"
    },
    {
      time: "18:00",
      round: "Quarter-final",
      players: "D. Medvedev vs. T. Paul",
      score: "",
      note: "Not before 18:00"
    },
    {
      time: "21:00",
      round: "Roger Federer Exhibition Match",
      players: "R. Federer / Na Li vs. D. Safina / M. Safin",
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
