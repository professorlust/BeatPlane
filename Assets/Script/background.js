#pragma strict

var speed:float = 0.6;

private var initialX:float;

function Start () {
	initialX = transform.position.x;
}

function Update () {
	if(transform.position.x < - (9.88 + speed * Time.deltaTime)){
		transform.position = Vector3(initialX,0,0);
	}else{
		transform.Translate(- speed * Time.deltaTime,0,0);
	}
}
