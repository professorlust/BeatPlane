#pragma strict

var speed:float = 0.6;

private var initialX:float;

function Start () {
	initialX = transform.position.x;
}

function Update () {
	if(transform.position.x < - 14){
		transform.position = Vector3(16,0,-1);
	}else{
		transform.Translate(- speed * Time.deltaTime,0,0);
	}
}
