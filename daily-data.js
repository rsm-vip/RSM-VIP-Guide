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
  date: "18.10.2026",
  session: "Day 12 · Finals",
  gatesOpen: "12:30",
  firstMatch: "14:00",
  weather: "31°C · Partly Cloudy",

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
      time: "14:00",
      round: "Doubles final",
      players: "F. Cabral / J. Tracey vs. L. Miedler / N. Oberleitner",
      score: "",
      note: "Not before 14:00"
    },
    {
      time: "16:30",
      round: "Semi-final",
      players: "A. Davidovich vs. J. Jodar",
      score: "",
      note: "Not before 16:30"
     }
    ],
  

  // HOSPITALITY OPENING HOURS
  hospitalityOpen: "15:00",

  hospitalityHours: [
    { label: "F&B service", opens: "15:00", closes: "21:30" },    
  ]
};
