class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    preload() {
        this.rKey = this.input.keyboard.addKey('R');

    }

    create() {

    }

    update() {
        this.add.text(200, 200, '                             You Did It!!\n \n                                  Nice!!\n                      Press R to play again', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '50px'});
        if(Phaser.Input.Keyboard.JustDown(this.rKey)) {
            this.scene.start("platformerScene");
        }
        
    }
}