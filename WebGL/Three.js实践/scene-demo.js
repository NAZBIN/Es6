const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas });

const scene = new THREE.Scene();

const objects = [];

const radius = 1;
const widthSegments = 6;
const heightSegments = 6;
const sphereGeometry = new THREE.SphereBufferGeometry(
  radius,
  widthSegments,
  heightSegments
);

//sun  emisive属性设置挡没有光照射下的颜色值.
const sunGemetry = new THREE.MeshPhongMaterial({ emisive: 0xffff00 });
const sunMesh = new THREE.Mesh(sphereGeometry, sunGemetry);
sunMesh.scale.set(5, 5, 5); //make the sun large.
scene.add(sunMesh);
objects.push(sunMesh);
//earth
const earthMaterial = new THREE.MeshPhongMaterial({
  color: 0x2233ff,
  emissive: 0x112244,
});
const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
earthMesh.position.x = 10;
scene.add(earthMesh);
objects.push(earthMesh);


// light
{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.pointLight(color, intensity);
  scene.add(light);
}

// camera position and direction 向下看
{
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 50, 0);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);
}
