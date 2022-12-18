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
export const newWeatherEffectETA = (rand = Math.random()) => rand * 60 * 24


/** Returns the price of the upgrade. */
export const price = (name: UpgradeName, { upgrades }: Pick<SaveData, "upgrades">) => basePrice[name] * 2 ** upgrades[name]

/** Returns the cost to increase the exploration level. */
export const explorationCost = (currentLv: number) => +(500 * 1.25 ** (currentLv - 1)).toPrecision(2)

/** The list of tutorial names. */
export const tutorialName = ["wasd", "upgrade", "nextStage", "backToPreviousStage", "weatherEffect"] as const

/** A type that represents a valid tutorial name. */
export type TutorialName = typeof tutorialName[number]

/** A type that represents a valid news name. */
export type NewsName =
    | "aliensComing"
    | "hammer"
    | "ending1"

export type EnemyName =
    | "Bird"
    | "UFO"
    | "Weather Effect UFO"
    | "Mothership"
