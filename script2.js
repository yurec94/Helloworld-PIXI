//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
    Rectangle = PIXI.Rectangle;
//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
var stage = new Container,
    renderer = autoDetectRenderer(256,256);
    document.body.appendChild(renderer.view);
//load an image and run the `setup` function when it's done
  loader
  .add(["images/cat.png", "images/tilesets.png"])
  .on("progress", loadProgressHandler)
  .load(setup);
  function loadProgressHandler(loader, resource){
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress.toFixed(2) + "%" );
  }////

  function setup() {
    console.log("setup");
  var texture = TextureCache["images/tilesets.png"]
  var rectangle = new Rectangle(192, 128, 64, 64);
  texture.frame = rectangle;
  var rocket = new Sprite(texture);
  stage.addChild(rocket);

  var cat = new Sprite(resources["images/cat.png"].texture);
  cat.position.set(128,128);
  cat.anchor.set(0.5,0.5)
  cat.rotation = 1.57;
  stage.addChild(cat);

  renderer.render(stage);

  }
