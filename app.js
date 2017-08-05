PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(600, 800, {
	transparent: true,
	resolution: 1
});
document.getElementById('display').appendChild(renderer.view);
