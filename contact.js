
const THREE = require('three');
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader.js');
const loader = new GLTFLoader();

loader.load('http://localhost:8000/C:/Users/bhara/Desktop/Site 23-06-202/scene.gltf',   
 function (gltf) {
  const model = gltf.scene;
  scene.add(model);
}, undefined, function (error) {
  console.error(error);
});
