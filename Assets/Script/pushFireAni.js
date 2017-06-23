#pragma strict

var scale:int = 1;
var offset:float = 0.25;


function Start () {
	
}

function Update () {
	GetComponent(Renderer).material.mainTextureScale = new Vector2(scale,-1);
	GetComponent(Renderer).material.mainTextureOffset = new Vector2(offset,0);
}
