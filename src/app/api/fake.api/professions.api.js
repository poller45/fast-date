export const professionsObject = {
   doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
   waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
   physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Physic" },
   engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Ingeneer" },
   actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
   cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
}
export const professions = [
   { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
   { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
   { _id: "67rdca3eeb7f6fgeed471814", name: "Physic" },
   { _id: "67rdca3eeb7f6fgeed471822", name: "Ingeneer" },
   { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
   { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
]
// export function fetchAll() {
//     return professions
// }

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professions);
        }, 2000);
    });

export default {
    fetchAll
};