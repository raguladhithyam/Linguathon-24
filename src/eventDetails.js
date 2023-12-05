import VocabSonic from "./images/poster/vocabsonic.jpeg";


export const events = [
  {
    "name": "Vocab Sonic",
    "alias": "Fun with Cross Words",
    "image": VocabSonic,
    "aboutEvent": "Round 1 : Dive into audio quiz, Round 2: Solve crosswords based on puzzle",
    "eventDetail": ["questions on spot"],
    "rules": [
      "The decision of the judges will be final.",
      "TEST test test TEST test test TEST"
    ],
    "judgingCriteria": [
      "TEST test",
      "TEST test",
      "TEST test",
      "TEST test",
      "TEST test"
    ],
    "coordinators": {
      "students": [
        { "name": "Ragul", "phone": "8668113739" },
        { "name": "Praveena", "phone": "9344475244" }
      ],
      "faculty": ["Dr. Sreejana S", "Srikala"]
    },
    "schedule": {
      "day": "11th June",
      "venue": "LH 1",
      "time": "10:30 AM"
    }
  },
]





function eventDetails() {
  return (
    <div>eventDetails</div>
  )
}

export default eventDetails
