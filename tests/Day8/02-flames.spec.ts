import { test } from "@playwright/test";

test('Learning frames', async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml ");
    const allFrames=page.frames();
    const totalFrameount=allFrames.length;
    console.log(`Total frames present in one india is: ${totalFrameount}`);

    for (let i = 0; i < totalFrameount; i++) {
            const titleOfTheFrames=await allFrames[i].title();    
            console.log(`Frames title is ${i} is : ${titleOfTheFrames}`);
             
    }

    for(let values of allFrames){
        const titleOfTheFrames=await values.title();    
        console.log(`Frames title using for of loop is : ${titleOfTheFrames}`);
    }

    allFrames.forEach(async(values,index)=>{
        const titleOfTheFrames=await values.title();    
        console.log(`Frames title using for each loop  index ${index} is : ${titleOfTheFrames}`);
    })
})