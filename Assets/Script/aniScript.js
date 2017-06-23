#pragma strict

private var animator:Animator;
private var info:AnimatorStateInfo;

function Start () {
	animator = GetComponent(Animator);

}

function Update () {
		info =animator.GetCurrentAnimatorStateInfo(0);
        // 判断动画是否播放完成
        if (info.normalizedTime >= 1.0f)
        {
            //播放完毕，要执行的内容

            Destroy(this.gameObject);	
        }
}
