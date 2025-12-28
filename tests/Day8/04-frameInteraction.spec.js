import { test } from "@playwright/test";

//frame by url
test.skip(`Interact with frame using frame url`, async ({ page }) => {
    await page.goto(`https://leafground.com/frame.xhtml`);

    //Going inside frame 1

    const myFirstFrameURL=page.frame({url:"https://leafground.com/default.xhtml"});
    await myFirstFrameURL?.locator(`#Click`).click();

    await page.waitForTimeout(4000)
});

//frame by name
test(`Interaction frame with name`,async({page})=>{
    await page.goto((`https://leafground.com/frame.xhtml`));
    const frameByName=page.frame({name:"frame2"});
    await frameByName?.locator(`$Click`).click();
    await page.waitForTimeout(2000)

})


//frame by locator
test(`Interaction frame with locator`,async({page})=>{
    await page.goto((`https://leafground.com/frame.xhtml`));
    const frameByLocator=page.frameLocator(`[src="default.xhtml"]`);
    await frameByLocator?.locator(`$Click`).click();
    await page.waitForTimeout(2000)

})


//frame by nested frames
test(`Interaction frame with nestedFrames`,async({page})=>{
    await page.goto((`https://leafground.com/frame.xhtml`));
    const outerFrame=page.frameLocator(`[src="page.xhtml"]`);
    const innerFrame=outerFrame.frameLocator(`[id="frame2"]`);
    await innerFrame?.locator(`$Click`).click();
    await page.waitForTimeout(2000)

})
