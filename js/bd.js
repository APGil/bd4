function bubbles() {
    "use strict";
    
    document.getElementById("graph").className = "none";
    document.getElementById("surv").className = "no_op";
    document.getElementById("surv2").className = "no_op";
    document.getElementById("surv3").className = "no_op";
    
    
    //BIG DROPDOWNS 
    //dd1
    if (document.getElementById('drop1').value === 'musica') {
    
        document.getElementById("op1_1").className = "bb1";
        document.getElementById("op2_1").className = "no_op";
        document.getElementById("op3_1").className = "no_op";
    }
    
    if (document.getElementById('drop1').value === 'lit') {
        
        document.getElementById("op2_1").className = "bb2";
        document.getElementById("op1_1").className = "no_op";
        document.getElementById("op3_1").className = "no_op";
    }
    
    if (document.getElementById('drop1').value === 'cine') {
        
        document.getElementById("op3_1").className = "bb3";
        document.getElementById("op1_1").className = "no_op";
        document.getElementById("op2_1").className = "no_op";
    }
    
    if (document.getElementById('drop1').value === 'none') {
    
        document.getElementById("op1_1").className = "no_op";
        document.getElementById("op2_1").className = "no_op";
        document.getElementById("op3_1").className = "no_op";
        
    }
    
    //dd2
    
    if (document.getElementById('drop2').value === 'musica2') {
    
        document.getElementById("op11_1").className = "bb11_1";
        document.getElementById("op22_1").className = "no_op";
        document.getElementById("op33_1").className = "no_op";
    }
    
    if (document.getElementById('drop2').value === 'lit2') {
        
        document.getElementById("op22_1").className = "bb22_1";
        document.getElementById("op11_1").className = "no_op";
        document.getElementById("op33_1").className = "no_op";
    }
    
    if (document.getElementById('drop2').value === 'cine2') {
        
        document.getElementById("op33_1").className = "bb33_1";
        document.getElementById("op11_1").className = "no_op";
        document.getElementById("op22_1").className = "no_op";
    }
    
    if (document.getElementById('drop2').value === 'none2') {
    
        document.getElementById("op11_1").className = "no_op";
        document.getElementById("op22_1").className = "no_op";
        document.getElementById("op33_1").className = "no_op";
        
    }
    
    /*dd3*/
    
    if (document.getElementById('drop3').value === 'musica3') {
    
        document.getElementById("op111_1").className = "bb111_1";
        document.getElementById("op222_1").className = "no_op";
        document.getElementById("op333_1").className = "no_op";
    
    }
    
    if (document.getElementById('drop3').value === 'lit3') {
        
        document.getElementById("op222_1").className = "bb222_1";
        document.getElementById("op111_1").className = "no_op";
        document.getElementById("op333_1").className = "no_op";
    }
    
    if (document.getElementById('drop3').value === 'cine3') {
        
        document.getElementById("op333_1").className = "bb333_1";
        document.getElementById("op111_1").className = "no_op";
        document.getElementById("op222_1").className = "no_op";
    }
    
    if (document.getElementById('drop3').value === 'none3') {
    
        document.getElementById("op111_1").className = "no_op";
        document.getElementById("op222_1").className = "no_op";
        document.getElementById("op333_1").className = "no_op";
        
    }
    
    
    //SEGONA TANDA DE DROP DOWNS
    
    //dd1
    if (document.getElementById('drop11').value === 'dir1') {
        document.getElementById("op1_2").className = "bb1_2";
        document.getElementById("op2_2").className = "no_op";
        document.getElementById("op3_2").className = "no_op";
    }
    
    if (document.getElementById('drop11').value === 'dg1') {
        
        document.getElementById("op2_2").className = "bb2_2";
        document.getElementById("op1_2").className = "no_op";
        document.getElementById("op3_2").className = "no_op";
    }
    
    if (document.getElementById('drop11').value === 'tip1') {
        
        document.getElementById("op3_2").className = "bb3_2";
        document.getElementById("op1_2").className = "no_op";
        document.getElementById("op2_2").className = "no_op";
    }
    
    if (document.getElementById('drop11').value === 'none11') {
    
        document.getElementById("op1_2").className = "no_op";
        document.getElementById("op2_2").className = "no_op";
        document.getElementById("op3_2").className = "no_op";
        
    }
    
    //dd2
    
    if (document.getElementById('drop22').value === 'dir2') {
    
        document.getElementById("op11_2").className = "bb11_2";
        document.getElementById("op22_2").className = "no_op";
        document.getElementById("op33_2").className = "no_op";
    }
    
    if (document.getElementById('drop22').value === 'dg2') {
        
        document.getElementById("op22_2").className = "bb22_2";
        document.getElementById("op11_2").className = "no_op";
        document.getElementById("op33_2").className = "no_op";
    }
    
    if (document.getElementById('drop22').value === 'tip2') {
        
        document.getElementById("op33_2").className = "bb33_2";
        document.getElementById("op11_2").className = "no_op";
        document.getElementById("op22_2").className = "no_op";
    }
    
    if (document.getElementById('drop22').value === 'none22') {
    
        document.getElementById("op11_2").className = "no_op";
        document.getElementById("op22_2").className = "no_op";
        document.getElementById("op33_2").className = "no_op";
        
    }
    
    /*dd3*/
    
    if (document.getElementById('drop33').value === 'dir3') {
    
        document.getElementById("op111_2").className = "bb111_2";
        document.getElementById("op222_2").className = "no_op";
        document.getElementById("op333_2").className = "no_op";
    
    }
    
    if (document.getElementById('drop33').value === 'dg3') {
        
        document.getElementById("op222_2").className = "bb222_2";
        document.getElementById("op111_2").className = "no_op";
        document.getElementById("op333_2").className = "no_op";
    }
    
    if (document.getElementById('drop33').value === 'tip3') {
        
        document.getElementById("op333_2").className = "bb333_2";
        document.getElementById("op111_2").className = "no_op";
        document.getElementById("op222_2").className = "no_op";
    }
    
    if (document.getElementById('drop33').value === 'none33') {
    
        document.getElementById("op111_2").className = "no_op";
        document.getElementById("op222_2").className = "no_op";
        document.getElementById("op333_2").className = "no_op";
    }
    
    //TERCERA TANDA DE DROP DOWNS
    
    //dd1
    if (document.getElementById('drop111').value === 'edu1') {
        document.getElementById("op1_3").className = "bb1_3";
        document.getElementById("op2_3").className = "no_op";
        document.getElementById("op3_3").className = "no_op";
    }
    
    if (document.getElementById('drop111').value === 'inv1') {
        
        document.getElementById("op2_3").className = "bb2_3";
        document.getElementById("op1_3").className = "no_op";
        document.getElementById("op3_3").className = "no_op";
    }
    
    if (document.getElementById('drop111').value === 'cue1') {
        
        document.getElementById("op3_3").className = "bb3_3";
        document.getElementById("op1_3").className = "no_op";
        document.getElementById("op2_3").className = "no_op";
    }
    
    if (document.getElementById('drop111').value === 'none111') {
    
        document.getElementById("op1_3").className = "no_op";
        document.getElementById("op2_3").className = "no_op";
        document.getElementById("op3_3").className = "no_op";
        
    }
    
    //dd2
    
    if (document.getElementById('drop222').value === 'edu2') {
    
        document.getElementById("op11_3").className = "bb11_3";
        document.getElementById("op22_3").className = "no_op";
        document.getElementById("op33_3").className = "no_op";
    }
    
    if (document.getElementById('drop222').value === 'inv2') {
        
        document.getElementById("op22_3").className = "bb22_3";
        document.getElementById("op11_3").className = "no_op";
        document.getElementById("op33_3").className = "no_op";
    }
    
    if (document.getElementById('drop222').value === 'cue2') {
        
        document.getElementById("op33_3").className = "bb33_3";
        document.getElementById("op11_3").className = "no_op";
        document.getElementById("op22_3").className = "no_op";
    }
    
    if (document.getElementById('drop222').value === 'none222') {
    
        document.getElementById("op11_3").className = "no_op";
        document.getElementById("op22_3").className = "no_op";
        document.getElementById("op33_3").className = "no_op";
        
    }
    
    /*dd3*/
    
    if (document.getElementById('drop333').value === 'edu3') {
    
        document.getElementById("op111_3").className = "bb111_3";
        document.getElementById("op222_3").className = "no_op";
        document.getElementById("op333_3").className = "no_op";
    
    }
    
    if (document.getElementById('drop333').value === 'inv3') {
        
        document.getElementById("op222_3").className = "bb222_3";
        document.getElementById("op111_3").className = "no_op";
        document.getElementById("op333_3").className = "no_op";
    }
    
    if (document.getElementById('drop333').value === 'cue3') {
        
        document.getElementById("op333_3").className = "bb333_3";
        document.getElementById("op111_3").className = "no_op";
        document.getElementById("op222_3").className = "no_op";
    }
    
    if (document.getElementById('drop333').value === 'none333') {
    
        document.getElementById("op111_3").className = "no_op";
        document.getElementById("op222_3").className = "no_op";
        document.getElementById("op333_3").className = "no_op";
    }
    
    //SMALL DROPDOWNS
    
    if (document.getElementById('drop1_1').value === 'phil') {
        document.getElementById("suboptxt1_1").className = "bb2";
        document.getElementById("suboptxt2_1").className = "no_op";
        document.getElementById("suboptxt3_1").className = "no_op";
    }
    
    if (document.getElementById('drop1_1').value === 'none') {
        document.getElementById("suboptxt1_1").className = "no_op";
        document.getElementById("suboptxt2_1").className = "no_op";
        document.getElementById("suboptxt3_1").className = "no_op";
    }
}

