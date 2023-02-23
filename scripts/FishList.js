// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="outer">
        <div class ="names">${fish.name}</div>
            <div class="boxes">
            <div class="words"> 
            <div class="fish__name">This is ${fish.name}.</div>
            <div class="fish__species">${fish.name} is a rare species of fish called a ${fish.species}.</div>
            <div class="fish__length">${fish.name} is ${fish.length} inch's long and was harvested from ${fish.location}.</div>
            <div class="fish__diet">${fish.name} likes to eat ${fish.food}.</div>
            </div>
            <div><img  class="photos" src="${fish.image}" /></div>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}