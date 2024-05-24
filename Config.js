class Config {
    // Determines location where the update script is stored on server (only needed when sendDataToServer is true)
    static serverRequestLink = 'http://david.jamnig.net/tests/fittslaw/server/update.php';
    static sendDataToServer = false;

    // Calculation - Fullscreen -> Get windowInnerWidth/Height as resolution and inch of screen. Then calculate the ppi
    // PPI cannot be determined by plain javascript
    static ppi = 132.34;       // Determines proper size of elements (so that 1cm equals 1cm on every phone //Laptop: 141.21, Ipad: 132.34
    static shape = "rectangle"; // rectangle or circle (circle not adjusted)
    static intDevice = "touch".toLowerCase(); // Mouse, Touch (when touch enabled, mouseclick will not work) //mouse for laptop or touch
    static trialsPerBreakTestSet = 27;
    static trialsPerBreakPracticeSet = 4;
    static generalUsername = "none"; // Will be displayed in dataset when no username was entered
    static version = "8.4";


     //TODO: change for study
    static run = "1";                                   //1-6 or 1-3
    static input_device = "Finger"                      //Finger or Stylus
    static isTestSet = true;                           // Determines, if test or trainings set will be used for trials

    // Trial Config
    static showLessScreenInformation = true;           // Shows more/less detailed trial/block information on the screen
    static numBlocksTestSet = 1;                        // Amount of blocks for test set
    static numBlocksTrainingsSet = 1;                   // Amount of blocks for trainings set
    static shuffleTrialsInBlock = true;                 // Determines, if Trials should be shuffled (random position) in the current block
    static startSize = 10;                              // Size of the start element (always AxA)
    static repeatTrial = true;                          // Determines, if Trial needs to be repeated in current block due to fail
    static elementStrokeStyle = "black";                  // Element border color
    static startElementFillStyle = "rgba(211, 211, 211, 1.0)"; //gray
    static targetElementFillStyle = ["rgba(252,63,76,1.0)"]       // red
    static targetElementSelectionStyle = "rgba(0, 255, 0, 1.0)";     // green
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

/*
    static getRandomDirection1() {
       // const directions = ['up', 'up-left', 'up-right', 'down', 'down-right', 'down-left'];
       const directions = ['up','down'];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    static getRandomDirection2() {
       // const directions = ['right', 'right-up', 'right-down', 'left', 'left-down', 'left-up'];
       const directions = ['right', 'left'];
        return directions[Math.floor(Math.random() * directions.length)];
    }
    */

     static getRandomDirection1() {
        // Zufällige Auswahl zwischen "up" und "down"
        return Math.random() < 0.5 ? 'up' : 'down';
    }

    // Ergänze die Klasse um die getRandomDirection2 Methode
    static getRandomDirection2() {
        // Zufällige Auswahl zwischen "left" und "right"
        return Math.random() < 0.5 ? 'left' : 'right';
    }

    static trialsDataCategoriesTestSet = [];
    static trialsDataCategoriesTrainingsSet = [];
  

    // Circle: height gets automatically replaced with width
    // Category, targetWidth, targetHeight, Amplitude, trialDirection (e.g. up -> target is above start element)
    // Note: When adding the same Trial Category, the Trials will be treated as the same
    // (e.g. when the first trial got a miss, the counter will be also incremented for the other trial)
    static trialsDataCategoriesTestSet = [


//1
["C1", 3, 3, 60,  'down'],
["C2", 9, 3, 60, 'down'],
["C3", 15, 3, 60, 'up'],
["C4", 21, 3, 60,  'up'],
["C5", 27, 3, 60,  'down'],
["C6", 33, 3, 60,  'up'],
["C7", 39, 3, 60,  'down'],
["C8", 45, 3, 60,  'down'],
["C9", 51, 3, 60,  'up'],
["C10", 3, 3, 100, 'up'],
["C11", 9, 3, 100,  'down'],
["C12", 15, 3, 100, 'down'],
["C13", 21, 3, 100,  'up'],
["C14", 27, 3, 100, 'down'],
["C15", 33, 3, 100, 'up'],
["C16", 39, 3, 100, 'down'],
["C17", 45, 3, 100, 'down'],
["C18", 51, 3, 100, 'up'],
["C19", 3, 3, 140,  'up'],
["C20", 9, 3, 140, 'down'],
["C21", 15, 3, 140,  'up'],
["C22", 21, 3, 140, 'up'],
["C23", 27, 3, 140,  'up'],
["C24", 33, 3, 140,  'down'],
["C25", 39, 3, 140,  'down'],
["C26", 45, 3, 140, 'up'],
["C27", 51, 3, 140,  'down'],

//2


["C28", 5, 5, 60,  'up'],
["C29", 11, 5, 60, 'up'],
["C30", 17, 5, 60,  'down'],
["C31", 23, 5, 60, 'up'],
["C32", 29, 5, 60,  'down'],
["C33", 35, 5, 60,  'up'],
["C34", 41, 5, 60,  'down'],
["C35", 47, 5, 60,  'up'],
["C36", 53, 5, 60, 'down'],
["C37", 5, 5, 100,  'up'],
["C38", 11, 5, 100, 'up'],
["C39", 17, 5, 100, 'down'],
["C40", 23, 5, 100,  'up'],
["C41", 29, 5, 100, 'down'],
["C42", 35, 5, 100,  'up'],
["C43", 41, 5, 100,  'down'],
["C44", 47, 5, 100,  'up'],
["C45", 53, 5, 100,  'up'],
["C46", 5, 5, 140,  'down'],
["C47", 11, 5, 140,  'down'],
["C48", 17, 5, 140,  'up'],
["C49", 23, 5, 140,  'up'],
["C50", 29, 5, 140, 'down'],
["C51", 35, 5, 140, 'up'],
["C52", 41, 5, 140,  'down'],
["C53", 47, 5, 140,  'down'],
["C54", 53, 5, 140,  'up'],


//3
["C55", 7, 7, 60,  'up'],
["C56", 13, 7, 60,  'down'],
["C57", 19, 7, 60, 'down'],
["C58", 25, 7, 60, 'up'],
["C59", 31, 7, 60, 'down'],
["C60", 37, 7, 60, 'up'],
["C61", 43, 7, 60,  'down'],
["C62", 49, 7, 60,  'down'],
["C63", 55, 7, 60,  'up'],
["C64", 7, 7, 100, 'down'],
["C65", 13, 7, 100,  'up'],
["C66", 19, 7, 100, 'down'],
["C67", 25, 7, 100, 'up'],
["C68", 31, 7, 100,  'down'],
["C69", 37, 7, 100, 'up'],
["C70", 43, 7, 100,  'up'],
["C71", 49, 7, 100,  'up'],
["C72", 55, 7, 100,  'down'],
["C73", 7, 7, 140, 'up'],
["C74", 13, 7, 140, 'down'],
["C75", 19, 7, 140,  'down'],
["C76", 25, 7, 140, 'down'],
["C77", 31, 7, 140,  'up'],
["C78", 37, 7, 140,  'down'],
["C79", 43, 7, 140, 'up'],
["C80", 49, 7, 140, 'up'],
["C81", 55, 7, 140, 'down'],


//4
["C82", 3, 3, 60, 'right'],
["C83", 3, 9, 60,'right'],
["C84", 3, 15, 60, 'left'],
["C85", 3, 21, 60, 'right'],
["C86", 3, 27, 60, 'left'],
["C87", 3, 33, 60, 'left'],
["C88", 3, 39, 60, 'right'],
["C89", 3, 45, 60, 'left'],
["C90", 3, 51, 60, 'left'],
["C91", 3, 3, 100, 'left'],
["C92", 3, 9, 100, 'right'],
["C93", 3, 15, 100, 'right'],
["C94", 3, 21, 100,'left'],
["C95", 3, 27, 100,'right'],
["C96", 3, 33, 100, 'right'],
["C97", 3, 39, 100, 'left'],
["C98", 3, 45, 100, 'right'],
["C99", 3, 51, 100, 'left'],
["C100", 3, 3, 140,'right'],
["C101", 3, 9, 140,'left'],
["C102", 3, 15, 140, 'right'],
["C103", 3, 21, 140, 'left'],
["C104", 3, 27, 140, 'right'],
["C105", 3, 33, 140,'left'],
["C106", 3, 39, 140, 'right'],
["C107", 3, 45, 140, 'right'],
["C108", 3, 51, 140,'left'],


//5
["C109", 5, 5, 60, 'right'],
["C110", 5, 11, 60, 'left'],
["C111", 5, 17, 60, 'left'],
["C112", 5, 23, 60, 'left'],
["C113", 5, 29, 60, 'right'],
["C114", 5, 35, 60, 'right'],
["C115", 5, 41, 60, 'left'],
["C116", 5, 47, 60, 'right'],
["C117", 5, 53, 60, 'left'],
["C118", 5, 5, 100, 'right'],
["C119", 5, 11, 100, 'right'],
["C120", 5, 17, 100, 'right'],
["C121", 5, 23, 100,'left'],
["C122", 5, 29, 100, 'right'],
["C123", 5, 35, 100, 'right'],
["C124", 5, 41, 100, 'left'],
["C125", 5, 47, 100,'right'],
["C126", 5, 53, 100, 'left'],
["C127", 5, 5, 140, 'right'],
["C128", 5, 11, 140, 'left'],
["C129", 5, 17, 140, 'right'],
["C130", 5, 23, 140, 'left'],
["C131", 5, 29, 140, 'left'],
["C132", 5, 35, 140, 'right'],
["C133", 5, 41, 140, 'left'],
["C134", 5, 47, 140, 'right'],
["C135", 5, 53, 140, 'left'],


//6


["C136", 7, 7, 60, 'right'],
["C137", 7, 13, 60,'left'],
["C138", 7, 19, 60, 'right'],
["C139", 7, 25, 60, 'right'],
["C140", 7, 31, 60,'right'],
["C141", 7, 37, 60, 'left'],
["C142", 7, 43, 60, 'right'],
["C143", 7, 49, 60,'left'],
["C144", 7, 55, 60, 'left'],
["C145", 7, 7, 100, 'right'],
["C146", 7, 13, 100, 'left'],
["C147", 7, 19, 100,'right'],
["C148", 7, 25, 100, 'right'],
["C149", 7, 31, 100, 'left'],
["C150", 7, 37, 100, 'right'],
["C151", 7, 43, 100, 'left'],
["C152", 7, 49, 100,'right'],
["C153", 7, 55, 100, 'left'],
["C154", 7, 7, 140,'right'],
["C155", 7, 13, 140,'left'],
["C156", 7, 19, 140, 'left'],
["C157", 7, 25, 140, 'right'],
["C158", 7, 31, 140, 'right'],
["C159", 7, 37, 140, 'left'],
["C160", 7, 43, 140, 'right'],
["C161", 7, 49, 140,'left'],
["C162", 7, 55, 140,'right'],


     ];
 
 
    static trialsDataCategoriesTrainingsSet = [
        ["C111", 5, 17, 60, Config.getRandomDirection2()],
        ["C15", 33, 3, 100,  Config.getRandomDirection1()],
        ["C47", 11, 5, 140,  Config.getRandomDirection1()],
        ["C139", 7, 25, 60, Config.getRandomDirection2()],
        ["C83", 3, 9, 60, Config.getRandomDirection2()],
        ["C147", 7, 19, 100, Config.getRandomDirection2()],
        ["C127", 5, 5, 140, Config.getRandomDirection2()],
        ["C56", 13, 7, 60,  Config.getRandomDirection1()],
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
