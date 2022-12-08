const professions = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Physic" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Ingeneer" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
}
const qualities = {
    tedious: { _id: "67rdca3eeb7f6fgeed471198", name: "Tedious", color: "primary" },
    strange: { _id: "67rdca3eeb7f6fgeed471100", name: "Strange", color: "secondary" },
    buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Buller", color: "success" },
    alcoholic: { _id: "67rdca3eeb7f6fgeed471101", name: "Alcoholic", color: "danger" },
    handsome: { _id: "67rdca3eeb7f6fgeed471102", name: "Handsome", color: "info" },
    uncertain: { _id: "67rdca3eeb7f6fgeed471103", name: "Uncertain", color: "dark" },

}

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Jon Dorian",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Koks",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Bob Marley",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Samanta Saint",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Sheldon Cooper",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Leonard Howsteder",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Govard Volovec",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Nikola Tesla",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Monika Heller",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Ratatui",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Joui Tribiani",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Bred Pit",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    },
]
export function fetchAll() {
    return users
}
