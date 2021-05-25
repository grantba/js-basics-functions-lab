// Code your solution in this file!
function distanceTravelledInFeet(beginning, end) {
    // takes in the beginning and destination blocks and returns the number of feet travelled.
    // Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) 
    // representing 34th St to 38th St, returns 1056 ((38-34)*264)
    if (beginning < end) {
        let result = (end - beginning) * 264; 
        return result; 
    }
    else {
        let result = (beginning - end) * 264;
        return result;
    }
};

function calculatesFarePrice(beginning, end) {
    let feet = distanceTravelledInFeet(beginning, end);

    if (feet <= 400) {
        return 0;
    }
    else if (feet > 400 && feet < 2001) {
        // the price is 2 cents per foot (not including 400, which are free!)
        let difference = (feet * 2) - 800;
        let price = difference / 100;
        return price;
    }
    else if (feet > 2000 && feet < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
};

function distanceFromHqInBlocks(block) {
    // Returns the number of blocks from Scuber's headquarters to the pickup location.
    if (block > 42) {
        let result = block - 42;
        return result;
    }
    else {
        let result = 42 - block;
        return result;
    }
};

function distanceFromHqInFeet(block) {
    // Returns the number of feet from Scuber's headquarters to the pickup location. 
    // You can use your distanceFromHqInBlocks function 
    // to help return the correct value here.
    let distance = distanceFromHqInBlocks(block);
    return distance * 264;
};
