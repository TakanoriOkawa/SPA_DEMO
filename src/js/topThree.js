import * as THREE from 'three';

let renderer,scene,camera;
let triangles;
let triangles2;

const radius = 100;
let theta = 0;
let xValue = 0.002;
let yValue = 0.004;
let zValue = 0.004;


function topThreeStart(){
  //シーン、レンダラーの初期化
  initThree();
  //カメラ初期化
  initCam();
  //オブジェクトの初期化
  initObject();
  //繰り返し処理
  loop();
  //リサイズ
  onResize();
  window.addEventListener('resize', onResize);
}

function initThree(){
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".mv__mainCanvas"),
    antialias: true,
    alpha: true,
  })
  renderer.setSize(innerWidth,innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene = new THREE.Scene(); 
}

function initCam(){
  camera = new THREE.PerspectiveCamera(45,innerWidth / innerHeight ,1 , 1000);
  camera.position.set(0,0,10);
}

function initObject(){
  const n = 800;
  const n2 = 600;
  const geometry = new THREE.BufferGeometry();
  const geometry2 = new THREE.BufferGeometry();

  const positions = new Float32Array(n * 3 * 3);
  const positions2 = new Float32Array(n2 * 3 * 3);
  const colors = new Float32Array(n * 3 * 3);
  
  // 三角形の配置距離
  const L = 200;
  const L2 = 30;
  for (let i=0; i<positions.length; i+=9) {
    for(let j=0; j<9; j+=3) {
      let x,y,z;
      let x2,y2,z2;

      //1つの頂点に必要な3つのX,Y,Z座標ごとにループを回す。
      if (j === 0 ) {
        x = L * Math.random() - L/2;
        y = L * Math.random() - L/2;
        z = L * Math.random() - L/2;

        x2 = L2 * Math.random() - L2/2;
        y2 = L2 * Math.random() - L2/2;
        z2 = L2 * Math.random() - L2/2;
      } else {
        const l = 15;
        const l2 = 2;
        x = positions[i] + (l2 * (Math.random() - 0.5));
        y = positions[i+1] + (l2 * (Math.random()  - 0.5));
        z = positions[i+2] + (l2 * (Math.random()  - 0.5));

        x2 = positions2[i] + (l * (Math.random() - 0.5));
        y2= positions2[i+1] + (l * (Math.random()  - 0.5));
        z2 = positions2[i+2] + (l * (Math.random()  - 0.5));
      }

      //位置情報代入
      positions[i+j]   = x;
      positions[i+j+1] = y;
      positions[i+j+2] = z;

      positions2[i+j]   = x2;
      positions2[i+j+1] = y2;
      positions2[i+j+2] = z2;

      //場所に応じて色が変わる。
      const R = (Math.abs(positions[i]) / (180/2));
      const G = (Math.abs(positions[i+1]) / (180/2));
      const B = (Math.abs(positions[i+2]) / (180/2));
      const color = new THREE.Color().setRGB(R,G,B);

      colors[i]     = color.r;
      colors[i+j+1] = color.g;
      colors[i+j+2] = color.b;
    }
  }
  geometry.setAttribute( 'position', new THREE.BufferAttribute(positions, 3));
  geometry2.setAttribute( 'position', new THREE.BufferAttribute(positions2, 3));
  geometry2.setAttribute( 'color', new THREE.BufferAttribute( colors, 3));
  geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3));

  const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide,vertexColors: THREE.VertexColors,wireframe: true});
  const material2 = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide ,vertexColors: THREE.VertexColors});

  triangles = new THREE.Mesh(geometry, material);
  triangles2 = new THREE.Mesh(geometry2, material2);

  scene.add(triangles);
  scene.add(triangles2);
}

let id;
function loop(){
  id = requestAnimationFrame(loop);

  theta += 0.2;
  camera.position.x = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.MathUtils.degToRad( theta ) );

  camera.lookAt( scene.position );
  camera.updateMatrixWorld();

  triangles.rotation.x += xValue;
  triangles2.rotation.x -= yValue;
  triangles.rotation.y += xValue;
  triangles2.rotation.y -= yValue;
  triangles2.rotation.z += zValue;

  renderer.render(scene,camera);
}

function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // レンダラーのサイズを調整する
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // アスペクト比修正。
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

//削除用
function topThreeRemove(){
  cancelAnimationFrame(id);
}

export {topThreeStart,topThreeRemove};