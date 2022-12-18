import type { ItemName, NewsName, TutorialName } from "../../constants";

export default {
    // Entries can be omitted if the key and value are the same.

    ...{
        "flavorText-Food": "On the trail, it's good to have a hearty meal ready to go.\nThe right foods will give you the energy you need to explore new territory.",
        "flavorText-Scrap": "With a little ingenuity and a lot of scrap,\nwe can make some missiles to take down our enemies.",
    } satisfies Record<`flavorText-${ItemName}`, string>,
    ...{
        "tutorial-wasd": <>You have become a <b>fighter</b> pilot that shoots <b>laser</b> beams. This world is peaceful, so your first mission is to protect farmers from harmful <b>birds</b>.<br />The controls are simple, <b><i class="ti ti-keyboard mr-1"></i>WASD</b> or <b><i class="ti ti-hand-click mr-1"></i>press</b> the edge of the screen to move and aim your targets.</>,
        "tutorial-upgrade": <>You can now buy <b><i class="ti ti-chevrons-up mr-1"></i>upgrades</b> for your aircraft! To do so, <b>click</b> on the button in the <b>top left</b> corner of the screen.</>,
        "tutorial-nextStage": <>You can now move on to the <b><i class="ti ti-map-2 mr-1"></i>next stage</b>! To do so, <b>click</b> the button in the <b>top right</b> corner of the screen.</>,
        "tutorial-backToPreviousStage": <>If you're finding this stage too <b>difficult</b>, go back to the previous stage and <b>try again</b> after you get more upgrades.</>,
        "tutorial-weatherEffect": <>We need to destroy the <b><i class="ti ti-ufo mr-1"></i>UFO</b> that has a special device. This will stop the <b><i class="ti ti-cloud-rain mr-1"></i>environmental effects</b> that are interfering with the <b>autopilot</b> system.</>,
    } satisfies Record<`tutorial-${TutorialName}`, preact.ComponentChildren>,
    ...{
        "news-aliensComing-headline": "Aliens Are Coming To Invade Earth",
        "news-aliensComing-text": "According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win.",
        "news-hammer-headline": "UFO Researchers Develop Device That Can Float Hammers In Air",
        "news-hammer-text": "A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses \"anti - gravity\" technology to achieve the feat. The device, which the team has dubbed the \"Hammer levitator\", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly.",
        "news-ending1-headline": "Scientists Have Found The Way To Move To A Higher World",
        "news-ending1-text": "Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes.",
    } satisfies Record<`news-${NewsName}-${"headline" | "text"}`, string>
}
