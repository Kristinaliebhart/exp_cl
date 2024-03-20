class Config {
    // Determines location where the update script is stored on server (only needed when sendDataToServer is true)
    static serverRequestLink = 'http://david.jamnig.net/tests/fittslaw/server/update.php';
    static sendDataToServer = false;

    // Calculation - Fullscreen -> Get windowInnerWidth/Height as resolution and inch of screen. Then calculate the ppi
    // PPI cannot be determined by plain javascript
    static ppi = 132.34;       // Determines proper size of elements (so that 1cm equals 1cm on every phone //Laptop: 141.21, Ipad: 264.68
    static shape = "rectangle"; // rectangle or circle (circle not adjusted)
    static intDevice = "touch".toLowerCase(); // Mouse, Touch (when touch enabled, mouseclick will not work) //mouse for laptop or touch
    static trialsPerBreakTestSet = 36;
    static trialsPerBreakPracticeSet = 4;
    static generalUsername = "none"; // Will be displayed in dataset when no username was entered
    static version = "8.4";

    // Trial Config
    static showLessScreenInformation = true;           // Shows more/less detailed trial/block information on the screen
    static isTestSet = true;                           // Determines, if test or trainings set will be used for trials
    static numBlocksTestSet = 6;                        // Amount of blocks for test set
    static numBlocksTrainingsSet = 2;                   // Amount of blocks for trainings set
    static shuffleTrialsInBlock = true;                 // Determines, if Trials should be shuffled (random position) in the current block
    static startSize = 10;                              // Size of the start element (always AxA)
    static repeatTrial = true;                          // Determines, if Trial needs to be repeated in current block due to fail
    static elementStrokeStyle = "black";                  // Element border color
    static startElementFillStyle = "rgba(144, 238, 144, 1.0)";
    static targetElementFillStyle = ["rgba(120,120,120,1.0)"]       // Also allows selection of random colors by providing more than one rgba color
    static targetElementSelectionStyle = "rgba(0, 0, 139, 1.0)";     // Dark blue color

    // Trial Config - Random Placement (in mm)
    static randomTrialPlacement = true;                // Determines if the trials will be placed on random positions of the canvas or in the middle
    static randomTrialPlacementToleranceXLeft = 3;     // Determines how much the element has to be away from the left canvas width (X) border
    static randomTrialPlacementToleranceXRight = 3;    // Determines how much the element has to be away from the right canvas width (X) border
    static randomTrialPlacementToleranceYUp = 10;       // Determines how much the element has to be away from the up canvas height (Y) border
    static randomTrialPlacementToleranceYDown = 3;     // Determines how much the element has to be away from the down canvas height (Y) border

    // Debug Flags
    static isDebug = false;                         // Enables more detailed logging
    static displayMiddlePointOfElement = false;     // Enables debug displaying of middle point of the elements
    static drawCanvasGrid = false;                  // Draws a grid all over the canvas for accurate debugging
    static drawToleranceElement = false;            // Draws the Tolerance element
    static showStartWindow = true;                 // Toggles display of start window


      static getRandomDirection1() {
        const directions = ['up', 'up-left', 'up-right', 'down', 'down-right', 'down-left'];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    static getRandomDirection2() {
        const directions = ['right', 'right-up', 'right-down', 'left', 'left-down', 'left-up'];
        return directions[Math.floor(Math.random() * directions.length)];
    }


    static trialsDataCategoriesTestSet = [];
    static trialsDataCategoriesTrainingsSet = [];
  

    // Circle: height gets automatically replaced with width
    // Category, targetWidth, targetHeight, Amplitude, trialDirection (e.g. up -> target is above start element)
    // Note: When adding the same Trial Category, the Trials will be treated as the same
    // (e.g. when the first trial got a miss, the counter will be also incremented for the other trial)
    static trialsDataCategoriesTestSet = [
       
 //1
["C1", 55, 3, 50,  Config.getRandomDirection1()],
["C2", 55, 9, 150,  Config.getRandomDirection1()],
["C3", 55, 15, 150,  Config.getRandomDirection1()],
["C4", 55, 21, 150,  Config.getRandomDirection1()],
["C5", 55, 27, 150,  Config.getRandomDirection1()],
["C6", 55, 33, 150,  Config.getRandomDirection1()],
["C7", 55, 39, 150,  Config.getRandomDirection1()],
["C8", 55, 45, 150,  Config.getRandomDirection1()],
["C9", 55, 51, 150,  Config.getRandomDirection1()],
["C10", 110, 3, 100,  Config.getRandomDirection1()],
["C11", 110, 9, 100,  Config.getRandomDirection1()],
["C12", 110, 15, 100,  Config.getRandomDirection1()],
["C13", 110, 21, 100,  Config.getRandomDirection1()],
["C14", 110, 27, 100,  Config.getRandomDirection1()],
["C15", 110, 33, 100,  Config.getRandomDirection1()],
["C16", 110, 39, 100,  Config.getRandomDirection1()],
["C17", 110, 45, 100,  Config.getRandomDirection1()],
["C18", 110, 51, 100,  Config.getRandomDirection1()],
["C19", 165, 3, 150,  Config.getRandomDirection1()],
["C20", 165, 9, 150,  Config.getRandomDirection1()],
["C21", 165, 15, 150,  Config.getRandomDirection1()],
["C22", 165, 21, 150,  Config.getRandomDirection1()],
["C23", 165, 27, 150,  Config.getRandomDirection1()],
["C24", 165, 33, 150,  Config.getRandomDirection1()],
["C25", 165, 39, 150,  Config.getRandomDirection1()],
["C26", 165, 45, 150,  Config.getRandomDirection1()],
["C27", 165, 51, 150,  Config.getRandomDirection1()],

//2
["C28", 55, 5, 150,  Config.getRandomDirection1()],
["C29", 55, 11, 150,  Config.getRandomDirection1()],
["C30", 55, 17, 150,  Config.getRandomDirection1()],
["C31", 55, 23, 150, Config.getRandomDirection1()],
["C32", 55, 29, 150,  Config.getRandomDirection1()],
["C33", 55, 35, 150,  Config.getRandomDirection1()],
["C34", 55, 41, 150,  Config.getRandomDirection1()],
["C35", 55, 47, 150,  Config.getRandomDirection1()],
["C36", 55, 53, 150,  Config.getRandomDirection1()],
["C37", 110, 5, 100,  Config.getRandomDirection1()],
["C38", 110, 11, 100,  Config.getRandomDirection1()],
["C39", 110, 17, 100,  Config.getRandomDirection1()],
["C40", 110, 23, 100,  Config.getRandomDirection1()],
["C41", 110, 29, 100, Config.getRandomDirection1()],
["C42", 110, 35, 100,  Config.getRandomDirection1()],
["C43", 110, 41, 100,  Config.getRandomDirection1()],
["C44", 110, 47, 100,  Config.getRandomDirection1()],
["C45", 110, 53, 100,  Config.getRandomDirection1()],
["C46", 165, 5, 150,  Config.getRandomDirection1()],
["C47", 165, 11, 150,  Config.getRandomDirection1()],
["C48", 165, 17, 150,  Config.getRandomDirection1()],
["C49", 165, 23, 150,  Config.getRandomDirection1()],
["C50", 165, 29, 150,  Config.getRandomDirection1()],
["C51", 165, 35, 150, Config.getRandomDirection1()],
["C52", 165, 41, 150,  Config.getRandomDirection1()],
["C53", 165, 47, 150,  Config.getRandomDirection1()],
["C54", 165, 53, 150,  Config.getRandomDirection1()],


//3
["C55", 55, 7, 150,  Config.getRandomDirection1()],
["C56", 55, 13, 150,  Config.getRandomDirection1()],
["C57", 55, 19, 150,  Config.getRandomDirection1()],
["C58", 55, 25, 150,  Config.getRandomDirection1()],
["C59", 55, 31, 150,  Config.getRandomDirection1()],
["C60", 55, 37, 150,  Config.getRandomDirection1()],
["C61", 55, 43, 150,  Config.getRandomDirection1()],
["C62", 55, 49, 150,  Config.getRandomDirection1()],
["C63", 55, 55, 150,  Config.getRandomDirection1()],
["C64", 110, 7, 100,  Config.getRandomDirection1()],
["C65", 110, 13, 100,  Config.getRandomDirection1()],
["C66", 110, 19, 100,  Config.getRandomDirection1()],
["C67", 110, 25, 100,  Config.getRandomDirection1()],
["C68", 110, 31, 100,  Config.getRandomDirection1()],
["C69", 110, 37, 100,  Config.getRandomDirection1()],
["C70", 110, 43, 100,  Config.getRandomDirection1()],
["C71", 110, 49, 100,  Config.getRandomDirection1()],
["C72", 110, 55, 100,  Config.getRandomDirection1()],
["C73", 165, 7, 150,  Config.getRandomDirection1()],
["C74", 165, 13, 150,  Config.getRandomDirection1()],
["C75", 165, 19, 150,  Config.getRandomDirection1()],
["C76", 165, 25, 150,  Config.getRandomDirection1()],
["C77", 165, 31, 150,  Config.getRandomDirection1()],
["C78", 165, 37, 150,  Config.getRandomDirection1()],
["C79", 165, 43, 150,  Config.getRandomDirection1()],
["C80", 165, 49, 150,  Config.getRandomDirection1()],
["C81", 165, 55, 150,  Config.getRandomDirection1()],


//4
["C82", 55, 3, 150, Config.getRandomDirection2()],
["C83", 55, 9, 150, Config.getRandomDirection2()],
["C84", 55, 15, 150, Config.getRandomDirection2()],
["C85", 55, 21, 150, Config.getRandomDirection2()],
["C86", 55, 27, 150, Config.getRandomDirection2()],
["C87", 55, 33, 150, Config.getRandomDirection2()],
["C88", 55, 39, 150, Config.getRandomDirection2()],
["C89", 55, 45, 150, Config.getRandomDirection2()],
["C90", 55, 51, 150, Config.getRandomDirection2()],
["C91", 110, 3, 100, Config.getRandomDirection2()],
["C92", 110, 9, 100, Config.getRandomDirection2()],
["C93", 110, 15, 100, Config.getRandomDirection2()],
["C94", 110, 21, 100, Config.getRandomDirection2()],
["C95", 110, 27, 100, Config.getRandomDirection2()],
["C96", 110, 33, 100, Config.getRandomDirection2()],
["C97", 110, 39, 100, Config.getRandomDirection2()],
["C98", 110, 45, 100, Config.getRandomDirection2()],
["C99", 110, 51, 100, Config.getRandomDirection2()],
["C100", 165, 3, 150, Config.getRandomDirection2()],
["C101", 165, 9, 150, Config.getRandomDirection2()],
["C102", 165, 15, 150, Config.getRandomDirection2()],
["C103", 165, 21, 150, Config.getRandomDirection2()],
["C104", 165, 27, 150, Config.getRandomDirection2()],
["C105", 165, 33, 150,Config.getRandomDirection2()],
["C106", 165, 39, 150, Config.getRandomDirection2()],
["C107", 165, 45, 150, Config.getRandomDirection2()],
["C108", 165, 51, 150, Config.getRandomDirection2()],


//5
["C109", 55, 5, 150, Config.getRandomDirection2()],
["C110", 55, 11, 150, Config.getRandomDirection2()],
["C111", 55, 17, 150, Config.getRandomDirection2()],
["C112", 55, 23, 150, Config.getRandomDirection2()],
["C113", 55, 29, 150, Config.getRandomDirection2()],
["C114", 55, 35, 150, Config.getRandomDirection2()],
["C115", 55, 41, 150, Config.getRandomDirection2()],
["C116", 55, 47, 150, Config.getRandomDirection2()],
["C117", 55, 53, 150, Config.getRandomDirection2()],
["C118", 110, 5, 100, Config.getRandomDirection2()],
["C119", 110, 11, 100, Config.getRandomDirection2()],
["C120", 110, 17, 100, Config.getRandomDirection2()],
["C121", 110, 23, 100, Config.getRandomDirection2()],
["C122", 110, 29, 100, Config.getRandomDirection2()],
["C123", 110, 35, 100, Config.getRandomDirection2()],
["C124", 110, 41, 100, Config.getRandomDirection2()],
["C125", 110, 47, 100, Config.getRandomDirection2()],
["C126", 110, 53, 100, Config.getRandomDirection2()],
["C127", 165, 5, 150, Config.getRandomDirection2()],
["C128", 165, 11, 150, Config.getRandomDirection2()],
["C129", 165, 17, 150, Config.getRandomDirection2()],
["C130", 165, 23, 150, Config.getRandomDirection2()],
["C131", 165, 29, 150, Config.getRandomDirection2()],
["C132", 165, 35, 150, Config.getRandomDirection2()],
["C133", 165, 41, 150, Config.getRandomDirection2()],
["C134", 165, 47, 150, Config.getRandomDirection2()],
["C135", 165, 53, 150, Config.getRandomDirection2()],


//6


["C136", 55, 7, 150, Config.getRandomDirection2()],
["C137", 55, 13, 150, Config.getRandomDirection2()],
["C138", 55, 19, 150, Config.getRandomDirection2()],
["C139", 55, 25, 150, Config.getRandomDirection2()],
["C140", 55, 31, 150, Config.getRandomDirection2()],
["C141", 55, 37, 150, Config.getRandomDirection2()],
["C142", 55, 43, 150, Config.getRandomDirection2()],
["C143", 55, 49, 150, Config.getRandomDirection2()],
["C144", 55, 55, 150, Config.getRandomDirection2()],
["C145", 110, 7, 100, Config.getRandomDirection2()],
["C146", 110, 13, 100, Config.getRandomDirection2()],
["C147", 110, 19, 100, Config.getRandomDirection2()],
["C148", 110, 25, 100, Config.getRandomDirection2()],
["C149", 110, 31, 100, Config.getRandomDirection2()],
["C150", 110, 37, 100, Config.getRandomDirection2()],
["C151", 110, 43, 100, Config.getRandomDirection2()],
["C152", 110, 49, 100, Config.getRandomDirection2()],
["C153", 110, 55, 100, Config.getRandomDirection2()],
["C154", 165, 7, 150, Config.getRandomDirection2()],
["C155", 165, 13, 150, Config.getRandomDirection2()],
["C156", 165, 19, 150, Config.getRandomDirection2()],
["C157", 165, 25, 150, Config.getRandomDirection2()],
["C158", 165, 31, 150, Config.getRandomDirection2()],
["C159", 165, 37, 150, Config.getRandomDirection2()],
["C160", 165, 43, 150, Config.getRandomDirection2()],
["C161", 165, 49, 150, Config.getRandomDirection2()],
["C162", 165, 55, 150, Config.getRandomDirection2()],
     ];
 
 
    static trialsDataCategoriesTrainingsSet = [
        ["C1", 4, 20, 150, 'right'],
        ["C34", 5, 14, 50, 'left-down'],
        ["C20", 8, 16, 100, 'down'],
        ["C12", 5, 18, 150, 'right'],
    ];
    // Predefined Clock: 12 (up), 1 (up-right), 2 (right-up), 3 (right), 4 ...
    // Can be extended
    static clockDirections = { // Possible directions with specified angle
        'up': 90,
        'up-right': 120,
        'right-up': 150,
        'right': 180,
        'right-down': 210,
        'down-right': 240,
        'down': 270,
        'down-left': 300,
        'left-down': 330,
        'left': 360,
        'left-up': 30,
        'up-left': 60,
    };

    // Determines clickTolerance (in px) where click is not in target and not outside (marked as Tolerance Click)
    static clickTolerance(amplitude) {
        return mm2px((amplitude / 2));
    }
}
