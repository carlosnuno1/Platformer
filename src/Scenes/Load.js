class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        this.load.atlas("platformer_characters", "monochrome_tilemap_transparent_packed.png", "mycharacter.json");

        this.load.image("tilemap_tiles", "monochrome_tilemap_packed.png");
        this.load.tilemapTiledJSON("platformer-level-1", "myplatformermap.tmj");  

        this.load.spritesheet("tilemap_sheet", "monochrome_tilemap_packed.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.audio("jump", "newjumpsound.mp3");
        this.load.audio("jump2", "secondjumpsound.mp3");
        this.load.audio("pickup", "pickupsound.mp3");
        this.load.audio("spikedeath", "spikedeath.mp3");

        this.load.multiatlas("kenny-particles", "kenny-particles.json");
    }

    create() {
        cursors = this.input.keyboard.createCursorKeys();
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_characters', {
                prefix: "tile_",
                start: 0,
                end: 2,
                suffix: ".png",
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0000.png" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0001.png" }
            ],
        });

    }

    update() {
        this.add.text(200, 200, '                             My Platformer\n \n                      Left arrow to move left\n                   Right arrow to move right\n    Collect butterflies to use them as double jumps\n                     Press Up arrow to Begin\n', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '50px'});
        if(Phaser.Input.Keyboard.JustDown(cursors.up)) {
            this.scene.start("platformerScene");
        }
        
    }
}