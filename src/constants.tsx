/**
 * This file defines constants for the game.
 */

import type { SaveData } from "./saveData"
import type stages from "./stages"

// The area the airplane and enemies can exist.
//                                                                  screen position:
export const [xMax, xMin, yMax, yMin] = [0.5, -0.5, 0.3, -0.3]   // up, down, right, left

/** The number of game updates per second. Note that this is not frame per second (FPS), which is automatically adjusted by the browser through requestAnimationFrame(). */
export const updatePerSecond = 30

/** An array of upgrade names. */
export const upgradeNames = [
    "Laser",
    "Autopilot",
    "Hammer",
    "ATK×2",
    "Vacuum",
    "Missile",
    "placeholder4",
    "placeholder5",
    "placeholder6",
] as const satisfies readonly string[]

/** A type that represents a valid upgrade name. */
export type UpgradeName = (typeof upgradeNames)[number]

/** The maximum number of a upgrade a player can have. */
export const maxUpgrades = 25

/** A type that represents a valid stage name. */
export type StageName = keyof typeof stages

/** A type that represents a valid item name. */
export type ItemName = "Food" | "Scrap"

/** the flavor text for each item */
export const flavorText = {
    Food: "On the trail, it's good to have a hearty meal ready to go. The right foods will give you the energy you need to explore new territory.",
    Scrap: "With a little ingenuity and a lot of scrap, we can make some missiles to take down our enemies."
} satisfies Record<ItemName, string>

/** A mapping from a stage name to its weather effect. */
export const weathers = {
    Earth: "Rain",
    Universe: "Jamming",
    Mothership: null,
} as const satisfies Record<StageName, string | null>

/** A type that represents a valid weather name. */
export type WeatherEffect = typeof weathers[keyof typeof weathers]

/** Returns the debuff for the given weapon caused by the current weather. */
export const weatherDebuff = (upgrade: UpgradeName, weather: WeatherEffect) => {
    if (upgrade === "Autopilot" && weather === "Rain") { return -5 }
    if (upgrade === "Autopilot" && weather === "Jamming") { return -15 }
    if (upgrade === "Hammer" && weather === "Jamming") { return -3 }
    return 0
}

/** the initial price of each upgrades */
export const basePrice = {
    Laser: 15,
    Autopilot: 100,
    Hammer: 100 * 15,
    "ATK×2": 100 * 15 ** 2,
    Vacuum: 400 * 15 ** 3,
    Missile: 100 * 15 ** 4,
    placeholder4: 100 * 15 ** 5,
    placeholder5: 100 * 15 ** 6,
    placeholder6: 100 * 15 ** 7,
} satisfies Record<UpgradeName, number>

/** Returns the damage dealt by the weapon. */
export const getAtk = ({ getUpgrade }: Pick<SaveData, "getUpgrade">) => ({
    Laser: (getUpgrade("Laser") + 1) * (getUpgrade("ATK×2") + 1),
    Autopilot: undefined,
    Hammer: getUpgrade("Hammer") <= 0 ? undefined : 2000 * (getUpgrade("ATK×2") + 1),
    "ATK×2": undefined,
    Vacuum: undefined,
    Missile: getUpgrade("Missile") === 0 ? undefined : 100000 * (getUpgrade("ATK×2") + 1),
    placeholder4: undefined,
    placeholder5: undefined,
    placeholder6: undefined,
} satisfies Record<UpgradeName, number | undefined>)

/** Returns the interval at which the weapon is fired. */
export const getInterval = ({ getUpgrade }: Pick<SaveData, "getUpgrade">) => ({
    Laser: 1,
    Autopilot: undefined,
    Hammer: getUpgrade("Hammer") === 0 ? undefined : Math.ceil(50 / getUpgrade("Hammer")),
    "ATK×2": undefined,
    Vacuum: undefined,
    Missile: getUpgrade("Missile") === 0 ? undefined : Math.ceil(200 / getUpgrade("Missile")),
    placeholder4: undefined,
    placeholder5: undefined,
    placeholder6: undefined,
} satisfies Record<UpgradeName, number | undefined>)

/** Returns a multiplier for the number of items obtained from enemies. */
export const getVacuumGain = ({ getUpgrade }: Pick<SaveData, "getUpgrade">) => 1 + 0.2 * (getUpgrade("Vacuum") - 1)

/** If true, the name of the upgrade is shown as ??? */
export const isUpgradeNameHidden = (name: UpgradeName, state: Pick<SaveData, "upgrades" | "money">) => state.upgrades[name] === 0 && state.money < price(name, state) * 2 / 3

/** Returns a boolean value that indicates whether the weather system should be enabled (visible to the user) or not. */
export const isWeatherSystemUnlocked = (state: Pick<SaveData, "completedTutorials">) => state.completedTutorials.nextStage ?? false

/**
 * Returns a boolean value that indicates whether the player can fly vertically with the space key.
 * NOTE: I'm undecided whether to introduce this feature at some point of the game.
 */
export const isVerticalMoveUnlocked = () => false

/** Returns the interval to start the next weather effect. */
export const newWeatherEffectETA = (rand = Math.random()) => rand * updatePerSecond * 60 * 6


/** Returns the price of the upgrade. */
export const price = (name: UpgradeName, { upgrades }: Pick<SaveData, "upgrades">) => basePrice[name] * 2 ** upgrades[name]

/** Returns the cost to increase the exploration level. */
export const explorationCost = (currentLv: number) => +(500 * 1.25 ** (currentLv - 1)).toPrecision(2)

/** The list of tutorials and their texts. */
export const tutorialHTML = {
    wasd: <>You have become a <b>fighter</b> pilot that shoots <b>laser</b> beams. This world is peaceful, so your first mission is to protect farmers from harmful <b>birds</b>.<br />The controls are simple, <b><i class="ti ti-keyboard"></i> WASD</b> or <b><i class="ti ti-hand-click"></i> press</b> the edge of the screen to move and aim your targets.</>,
    upgrade: <>You can now buy <b><i class="ti ti-chevrons-up"></i> upgrades</b> for your aircraft! To do so, <b>click</b> on the button in the <b>top left</b> corner of the screen.</>,
    nextStage: <>You can now move on to the <b><i class="ti ti-map-2"></i> next stage</b>! To do so, <b>click</b> the button in the <b>top right</b> corner of the screen.</>,
    backToPreviousStage: <>If you're finding this stage too <b>difficult</b>, go back to the previous stage and <b>try again</b> after you get more upgrades.</>,
    weatherEffect: <>We need to destroy the <b><i class="ti ti-ufo"></i> UFO</b> that has a special device. This will stop the <b><i class="ti ti-cloud-rain"></i> environmental effects</b> that are interfering with the <b>autopilot</b> system.</>,
    // ending1congratulations: "Congratulations, you have saved the world from the aliens. Thanks for playing!",
    // TODO: "As a bonus, you can fly around vertically with the space key from now on."
}

/** A type that represents a valid tutorial name. */
export type TutorialName = keyof typeof tutorialHTML

/** The list of news and their headlines and texts. */
export const newsList = {
    aliensComing: ["Aliens Are Coming To Invade Earth", "According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],
    hammer: ["UFO Researchers Develop Device That Can Float Hammers In Air", "A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses \"anti - gravity\" technology to achieve the feat. The device, which the team has dubbed the \"Hammer levitator\", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly."],
    ending1: ["Scientists Have Found The Way To Move To A Higher World", "Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."],
} as const satisfies { readonly [k: string]: readonly [title: string, text: string] }

/** A type that represents a valid news name. */
export type NewsName = keyof typeof newsList