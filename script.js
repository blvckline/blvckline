loader.load('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/TShirt/glTF-Binary/TShirt.glb', function(gltf) {
  shirt = gltf.scene;
  shirt.scale.set(1.5, 1.5, 1.5);
  scene.add(shirt);
});

