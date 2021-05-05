import * as THREE from 'three/build/three';

let renderer,scene,camera;
let id;

let sphereGeometry,sphereMaterial,sphereMesh;
let pointsGeometry,pointsMaterial,pointsMesh;

let canvasSizeX = 0;
let canvasSizeY = 0;
let rotY = 0;

let texture;

function pointsThreeStart(){
  //シーン、レンダラーの初期化
  initThree();
  //カメラ初期化
  initCam();
  //画像
  initLoader();
  //オブジェクトの初期化
  initObject();
  //繰り返し処理
  onResize();
  loop();
  window.addEventListener('resize', onResize);
}

function initThree(){
  canvasSizeX = document.getElementById("app").clientWidth;
  canvasSizeY = document.getElementById("app").clientHeight;
  
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".Service__mainCanvas"),
    antialias: true,
    alpha: true,
  })

  renderer.setSize(canvasSizeX,canvasSizeY);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(new THREE.Color(0xffffff),1);

  scene = new THREE.Scene(); 
}

function initCam(){
  camera = new THREE.PerspectiveCamera(60,innerWidth / innerHeight);
  camera.position.set(0,0,18);
}

function initLoader(){
  const img = require('@/assets/header_logo.png');
  texture = new THREE.TextureLoader().load(img);
}

function initObject(){
  sphereGeometry = new THREE.SphereGeometry(3,26,26);
  sphereMaterial = new THREE.MeshBasicMaterial({
    opacity:0.8,
    color:0x111133,
    wireframe:true,
  })

  sphereMesh = new THREE.Mesh(sphereGeometry,sphereMaterial);
  scene.add(sphereMesh);

  pointsGeometry = new THREE.BufferGeometry();
  const pointsCount = 7000;
  const posArray = new Float32Array(pointsCount * 3);
  
  for(let i = 0; i < pointsCount * 3; i++){
    posArray[i] = (Math.random() - 0.5) * 30; 
  }

  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3));

  pointsMaterial = new THREE.PointsMaterial({
    size:0.15,
    map:texture,
    transparent: true,
  })

  pointsMesh = new THREE.Points(pointsGeometry,pointsMaterial);
  scene.add(pointsMesh);

}


function onResize() {
  const canvasSizeX = document.getElementById("app").clientWidth;
  const canvasSizeY = document.getElementById("app").clientHeight;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasSizeX ,canvasSizeY);

  // アスペクト比修正。
  camera.aspect = canvasSizeX / canvasSizeY;
  camera.updateProjectionMatrix();
}


function loop(){
  const targetRotY = (scrollY  / innerHeight) * 360;
  rotY += (targetRotY - rotY) * 0.02;
  sphereMesh.rotation.y = rotY * -0.01;
  pointsMesh.rotation.x = rotY *  -0.0005;
  pointsMesh.rotation.y = rotY *  0.0005;
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();
  id = requestAnimationFrame(loop);
  renderer.render(scene,camera);
}

//削除用
function pointsThreeRemove(){
  cancelAnimationFrame(id);
}

export {pointsThreeStart,pointsThreeRemove};