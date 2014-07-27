//
// CleanerScoreScene class
//
var MainLayer = function () {
    cc.log("MainLayer")
};

MainLayer.prototype.onDidLoadFromCCB = function () {
    if (sys.platform == 'browser') {
        this.onEnter();
    }
    else {
        this.rootNode.onEnter = function () {
            this.controller.onEnter();
        };
    }

    this.rootNode.onExit = function () {
        this.controller.onExit();
    };
};

MainLayer.prototype.onEnter = function () {
    cc.log("onEnter  ----->  ")

    this.initItemArray();
    this.initTables();

}


var itemArray;
var colorNameArray =
    [
        'star_01.png',
        'star_02.png',
        'star_03.png',
        'star_04.png',
        'star_05.png',
        'star_06.png',
        'star_07.png',
        'star_08.png'
    ];

/**
 * 90*90 * 8
 */
MainLayer.prototype.initTables = function () {
    itemArray = new Array(8);
    for (var r = 0; r < 8; r++) {
        itemArray[r] = new Array();
        for (var c = 0; c < 8; c++) {
            itemArray[r][c] = createRandomItems(r, c);
            cc.log(String.format('itemArray[{0}][{1}]=', r, c) + itemArray[r][c]);
        }
    }
    for (var r = 0; r < 8; r++) {
        for (var c = 0; c < 8; c++) {
            this.rootNode.addChild(itemArray[r][c]);
        }
    }
}

MainLayer.prototype.initItemArray = function () {
    itemArray = new Array(9);

}

function createRandomItems(r, c) {
    var colorName = colorNameArray[parseInt(Math.random() * colorNameArray.length)];
    cc.log(colorName + '===============>');
    var starSprite = cc.Sprite.createWithSpriteFrameName(colorName);
    starSprite.setAnchorPoint(cc.p(0.5, 0.5));
    starSprite.setPosition(cc.p(r * 90 + 45, c * 90 + 45));
    //starSprite.starData = {name: randomStar, color: colors[random], indexOfColumn: i, indexOfRow: k};
    starSprite.setZOrder(120);
    return starSprite;
}

MainLayer.prototype.createNewSprite = function () {

}

MainLayer.prototype.onUpdate = function () {

}

MainLayer.prototype.onExitClicked = function () {
    cc.log("onExitClicked");
}


MainLayer.prototype.onExit = function () {
    cc.log("onExit");
}


