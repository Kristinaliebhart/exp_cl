class Config {
    // Determines location where the update script is stored on server (only needed when sendDataToServer is true)
    static serverRequestLink = 'http://david.jamnig.net/tests/fittslaw/server/update.php';
    static sendDataToServer = false;

    // Calculation - Fullscreen -> Get windowInnerWidth/Height as resolution and inch of screen. Then calculate the ppi
    // PPI cannot be determined by plain javascript
    static ppi = 129.25;       // Determines proper size of elements (so that 1cm equals 1cm on every phone //Laptop: 141.21, Ipad: 264.68
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

    // Circle: height gets automatically replaced with width
    // Category, targetWidth, targetHeight, Amplitude, trialDirection (e.g. up -> target is above start element)
    // Note: When adding the same Trial Category, the Trials will be treated as the same
    // (e.g. when the first trial got a miss, the counter will be also incremented for the other trial)
     static trialsDataCategoriesTestSet = [
       //amplitude 1
        ["C1", 4, 20, 150, 'right'],
        ["C2", 15, 6, 150, 'up'],
        ["C3", 9, 15, 150, 'up-right'],
        ["C4", 10, 8, 150, 'up'],
        ["C5", 7, 7, 150, 'right-up'],
        ["C6", 15, 18, 150, 'up-right'],
        ["C7", 16, 10, 150, 'right-up'],
        ["C8", 8, 16, 150, 'right'],
        ["C9", 24, 10, 150, 'up'],
        ["C10", 5, 14, 150, 'right'],
        ["C11", 16, 5, 150, 'right-up'],
        ["C12", 5, 18, 150, 'right'],
        //amplitude 2
        ["C13", 4, 20, 100, 'down-left'],
        ["C14", 15, 6, 100, 'right-down'],
        ["C15", 9, 15, 100, 'down-left'],
        ["C16", 10, 8, 100, 'right-down'],
        ["C17", 7, 7, 100, 'down-right'],
        ["C18", 15, 18, 100, 'right-down'],
        ["C19", 16, 10, 100, 'down'],
        ["C20", 8, 16, 100, 'down'],
        ["C21", 24, 10, 100, 'right-down'],
        ["C22", 5, 14, 100, 'down'],
        ["C23", 16, 5, 100, 'down-left'],
        ["C24", 5, 18, 100, 'right-down'],
        //amplitude 3
        ["C25", 4, 20, 50, 'left'],
        ["C26", 15, 6, 50, 'left-up'],
        ["C3", 9, 15, 50, 'left'],
        ["C28", 10, 8, 50, 'up-left'],
        ["C29", 7, 7, 50, 'left'],
        ["C30", 15, 18, 50, 'left-down'],
        ["C31", 16, 10, 50, 'left-up'],
        ["C32", 8, 16, 50, 'up-left'],
        ["C33", 24, 10, 50, 'left-up'],
        ["C34", 5, 14, 50, 'left-down'],
        ["C35", 16, 5, 50, 'up-left'],
        ["C36", 5, 18, 50, 'left']
       
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
