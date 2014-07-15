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

    var starSprite = cc.Sprite.createWithSpriteFrameName("star_06.png");
    starSprite.setAnchorPoint(cc.p(0, 0));
    starSprite.setPosition(cc.p(500, 500));
    //starSprite.starData = {name: randomStar, color: colors[random], indexOfColumn: colIndex, indexOfRow: rowIndex};
    starSprite.setZOrder(120);
    this.rootNode.addChild(starSprite);

}

MainLayer.prototype.onUpdate = function () {

}

MainLayer.prototype.onExitClicked = function () {
    cc.log("onExitClicked");
}


MainLayer.prototype.onExit = function () {
    cc.log("onExit");
}

