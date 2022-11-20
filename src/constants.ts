import type stages from './stages'

// The area the airplane and enemies can move exist.
//                                                                  screen position:
export const [xMax, xMin, yMax, yMin] = [0.5, -0.5, 0.3, -0.3]   // up, down, right, left

export const updatePerSecond = 30

export const upgradeNames = [
    "Laser",
    "Autopilot",
    "Hammer",
    "ATK×2",
    "placeholder2",
    "placeholder3",
    "placeholder4",
    "placeholder5",
    "placeholder6",
] as const satisfies readonly string[]

export type UpgradeName = (typeof upgradeNames)[number]

export type StageName = keyof typeof stages

export type WeatherEffect = "Rain"

export const basePrice = {
    Laser: 15,
    Autopilot: 100,
    Hammer: 100 * 15,
    "ATK×2": 100 * 15 ** 2,
    placeholder2: 100 * 15 ** 3,
    placeholder3: 100 * 15 ** 4,
    placeholder4: 100 * 15 ** 5,
    placeholder5: 100 * 15 ** 6,
    placeholder6: 100 * 15 ** 7,
} satisfies Record<UpgradeName, number>

export const getAtk = ({ upgrades }: { upgrades: Record<UpgradeName, number> }) => ({
    Laser: upgrades.Laser + 1 * (upgrades['ATK×2'] + 1),
    Autopilot: undefined,
    Hammer: upgrades.Hammer === 0 ? undefined : 2000 * (upgrades['ATK×2'] + 1),
    "ATK×2": undefined,
    placeholder2: undefined,
    placeholder3: undefined,
    placeholder4: undefined,
    placeholder5: undefined,
    placeholder6: undefined,
} satisfies Record<UpgradeName, number | undefined>)

export const getInterval = ({ upgrades }: { upgrades: Record<UpgradeName, number> }) => ({
    Laser: 1,
    Autopilot: undefined,
    Hammer: upgrades.Hammer === 0 ? undefined : Math.ceil(50 / upgrades.Hammer),
    "ATK×2": undefined,
    placeholder2: undefined,
    placeholder3: undefined,
    placeholder4: undefined,
    placeholder5: undefined,
    placeholder6: undefined,
} satisfies Record<UpgradeName, number | undefined>)

/** If true, the name of the upgrade is shown as ??? */
export const isUpgradeNameHidden = (name: UpgradeName, state: { readonly upgrades: Record<UpgradeName, number>, readonly money: number }) => state.upgrades[name] === 0 && state.money < price(name, state) * 2 / 3
export const isWeatherSystemUnlocked = (state: { completedTutorials: Set<TutorialName> }) => state.completedTutorials.has("nextStage")
export const isVerticalMoveUnlocked = () => false

export const price = (name: UpgradeName, { upgrades }: { upgrades: Record<UpgradeName, number> }) => basePrice[name] * 2 ** upgrades[name]

/** The list of tutorials and their texts. */
export const tutorialHTML = {
    wasd: `You have become a <b>fighter</b> pilot that shoots <b>laser</b> beams. This world is peaceful, so your first mission is to protect farmers from harmful <b>birds</b>.<br>The controls are simple, <b><i class="ti ti-keyboard"></i> WASD to move</b> and aim your targets.`,
    upgrade: `You can now buy <b><i class="ti ti-chevrons-up"></i> upgrades</b> for your aircraft! To do so, <b>click</b> on the button in the <b>top left</b> corner of the screen.`,
    nextStage: `You can now move on to the <b><i class="ti ti-map-2"></i> next stage</b>! To do so, <b>click</b> the button in the <b>top right</b> corner of the screen.`,
    backToPreviousStage: `If you're finding this stage too <b>difficult</b>, go back to the previous stage and <b>try again</b> after you get more upgrades.`,
    weatherEffect: `We need to kill a <b><i class="ti ti-ufo"></i> UFO</b> in order to stop the <b><i class="ti ti-cloud-rain"></i> rain</b>. The UFO has a device that can manipulate the weather, and the rain is interfering with the <b>autopilot</b> system.`,
    // ending1congratulations: "Congratulations, you have saved the world from the aliens. Thanks for playing!",
    // TODO: "As a bonus, you can fly around vertically with the space key from now on."
}

export type TutorialName = keyof typeof tutorialHTML

/** The list of news and their headlines and texts. */
export const newsList = {
    aliensComing: ["Aliens Are Coming To Invade Earth", "According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],
    hammer: ["UFO Researchers Develop Device That Can Float Hammers In Air", "A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses \"anti - gravity\" technology to achieve the feat. The device, which the team has dubbed the \"Hammer levitator\", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly."],
    ending1: ["Scientists Have Found The Way To Move To A Higher World", "Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."],
} as const satisfies { readonly [k: string]: readonly [title: string, text: string] }

export type NewsName = keyof typeof newsList
