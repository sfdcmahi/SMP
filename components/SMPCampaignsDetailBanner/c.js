({
    doInit:function(comp,event,helper){

    },
    firEnroll:function(comp,event,helper){
        var cmpEvent =$A.get("e.c:SMPEnrollEvent")
        cmpEvent.fire()
    },
})