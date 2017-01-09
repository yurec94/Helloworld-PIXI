//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;

//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
var stage = new Container,
    renderer = autoDetectRenderer(512,512);
document.body.appendChild(renderer.view);

  loader
  .add("images/treasureHunter.json")
  .load(setup);

var dungeon, explorer, treasure, door, id;

function setup() {
    //1. Access the `TextureCache` directly
    var dungeonTexture = TextureCache["dungeon.png"];
    dungeon = new Sprite(dungeonTexture);
    stage.addChild(dungeon);
    //2. Access the texture using the loader's `resources`:
    explorer = new Sprite(
      resources["images/treasureHunter.json"].texture["explorer.png"]
    );
    explorer.x = 68;
    explorer.y = stage.height / 2 - explorer.height / 2;
    stage.addChild(explorer);

    id = PIXI.loader.resources["images/treasureHunter.json"].textures;

    treasure = new Sprite(id["treasure.png"]);
    treasure.x = stage.width -treasure.width - 48;
    treasure.y = stage.height / 2 - treasure.height / 2;
    stage.addChild(treasure);

    door = new Sprite(id["door.png"]);
    door.position.set(32, 0);
    stage.addChild(door);

    var = numberOfBlobs = 6,
          spacing = 48,
          xOffset = 150;

    for (var i = 0; i < numberOfBlobs; i++) {
      var blob = new Sprite(id["blob.png"]);

      var x = spacing * i + xOffset;
      var y = randomInt(0, stage.height - blob.height);

      blob.x = x;
      blob.y = y;
      stage.addChild(blob);
    }
    renderer.render(stage);
  }
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
