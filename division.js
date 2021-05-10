class Divisions{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=b.rectangle(x,y,10,200,options);
        w.add(wo,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,10,200)
    }
}