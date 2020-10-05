'use strict';
import * as THREE from 'three';

// +-Global Variables:_

var contaniner;
var sceneWidth, sceneHeight;
var scene;
var renderer;
var camera;
var controls;

// +-Creating Scene:_

const createScene = () => {
    sceneWidth = window.innerWidth;
    sceneHeight = window.innerHeight;
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#ff0055');

    // +-Creating Render:_

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sceneWidth, sceneHeight);

    // +-Creating Canvas:_

    contanier = document.getElementById('container');
    container.appendChild(renderer.domElement);

    // +-Creating Camera:_

    camera = new THREE.PerspectiveCamera(
        30,
        sceneWidth / sceneHeight,
        1,
        10000
    );
    camera.position.set(0, 50, 500);

    // +-Creating Lights:_

    var light = new THREE.DirectionalLight('#ffffff');
};

const update = () => {};

const render = () => {};

const init = () => {
    createScene();
    update();
};

init();
