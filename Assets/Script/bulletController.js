#pragma strict

var speed : float = 2.0;

function Start () {
	
}

function Update () {
	transform.Translate(Vector3.right * speed * Time.deltaTime);
	if(transform.position.x > 5.3){
		Destroy(this.gameObject);
	}
}


//function OnCollisionEnter(collision:Collision){
//	print("bullet collider");
//	
//}

function OnTriggerEnter2D(collider:Collider2D){
	if(collider.tag.Equals("Player")){
	}else{
		Destroy(this.gameObject);
	}
}
