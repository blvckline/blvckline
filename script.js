let scene, camera, renderer, shirt, controls;

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

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 1, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(2, 2, 5);
  scene.add(dirLight);

  const loader = new THREE.GLTFLoader();
  loader.load('tshirt.glb', function(gltf) {
    shirt = gltf.scene;
    shirt.scale.set(1.5, 1.5, 1.5);
    shirt.position.y = -1;
    scene.add(shirt);
  }, undefined, function(error) {
    console.error("Model yüklenemedi:", error);
  });

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
}

function animate() {
  requestAnimationFrame(animate);
  if (shirt) {
    shirt.rotation.y += 0.005;
  }
  controls.update();
  renderer.render(scene, camera);
}
