let scene, camera, renderer, shirt;

init();
animate();

function init() {
  const container = document.getElementById("canvas-container");

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  camera = new THREE.PerspectiveCamera(45, container.clientWidth / 500, 0.1, 1000);
  camera.position.set(0, 1.5, 3);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, 500);
  container.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  light.position.set(0, 1, 0);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/TShirt/glTF-Binary/TShirt.glb', function(gltf) {
    shirt = gltf.scene;
    shirt.scale.set(1.5, 1.5, 1.5);
    shirt.position.y = -1; // biraz aşağı alalım
    scene.add(shirt);
    console.log("Model yüklendi.");
  }, undefined, function(error) {
    console.error("Model yüklenemedi:", error);
  });
}

function animate() {
  requestAnimationFrame(animate);
  if (shirt) {
    shirt.rotation.y += 0.005;
  }
  renderer.render(scene, camera);
      }
