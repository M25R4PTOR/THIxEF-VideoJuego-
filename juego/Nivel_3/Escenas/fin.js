class Fin extends Phaser.Scene {
    constructor() {
        super({key: "Fin"});
    }

    preload(){
        // background doble
        this.load.image('background', './assets/background.png');

        this.load.bitmapFont('letras', './assets/bitmap/hyperdrive.png', './assets/bitmap/hyperdrive.xml');
    }

    create() {
		this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.crearBackground();

        this.crearPuntuacion();

        this.auxiliar=true;
        this.textoTitulo = this.add.bitmapText(gameSettings.gameWidth/2, gameSettings.gameHeight/2 - 50, 'letras', 'NIVEL COMPLETADO', 50).setOrigin(0.5);
        this.textoTitulo.setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000);
        this.textoEnter = this.add.bitmapText(gameSettings.gameWidth/2, gameSettings.gameHeight/2 + 50, 'Presiona ENTER para volver a elegir nivel\n   "T" para Twittear puntuacion', 20).setOrigin(0.5);
        this.textoEnter.setTint(0xff0000);

        this.tweens.add({
			targets: this.textoEnter,
			props: {
				alpha:{
					value: 0,
					duration: 700
				}
			},
			repeat: -1,
			yoyo: true,
			ease: 'Sine.easeOut'
        });
        
        this.boton = this.input.keyboard.addKeys( { 'intro': Phaser.Input.Keyboard.KeyCodes.ENTER, 'twittear': Phaser.Input.Keyboard.KeyCodes.T} );

    }

    update(){
        background.tilePositionX += 0.2;

        
         if (Phaser.Input.Keyboard.JustDown(this.boton.intro)) {
            location.replace("../../index.html");
           
        }

        if (Phaser.Input.Keyboard.JustDown(this.boton.twittear)) {
            var enlace = document.getElementById("twittear");
            enlace.href = "https://twitter.com/intent/tweet?text=He completado el Nivel 3 de THIxEF con " + gameSettings.puntos + " Puntos!";
            enlace.click();
        }
    }

    crearBackground(){
        background = this.add.tileSprite(gameSettings.gameWidth/2, gameSettings.gameHeight/2, 960, 304, 'background');
    }

    crearPuntuacion(){
		texto = this.add.text(300, 0, 'Puntuación: '+ gameSettings.puntos, { fontFamily: 'Arial', fontSize: 14, color: '#ffffff', align: 'left' });
		texto.setScrollFactor(0);
	}
    
}
