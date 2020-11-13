// jsを記述する際はここに記載していく

$('.btn1').on("click" ,function() {
    let cpu__hand = Math.floor(Math.random() * 3) ;
    if (cpu__hand == 0) {
        document.getElementById("cpu__img").src = "img/gu.png";
    } else if (cpu__hand == 1) {
        document.getElementById("cpu__img").src = "img/choki.png";
    } else {
        document.getElementById("cpu__img").src = "img/pa.png";
    }
    

    var player__hand = $('.btn1').val();
    //    player__hand = player__hand.value;

    console.log(player__hand);
    console.log(cpu__hand);

    // グー=0　チョキ=1　パー=2
    // プレイヤーの勝ち=w 負け=l 引き分け=d

    if (cpu__hand == 0) {
        var result = "d";
    } else if (cpu__hand == 1 ) {
        result = "w";
    } else {
        var result = "l";
    }

        console.log(result)
    if (result == "w") {
        document.getElementById("kekka").innerHTML = "あなたの勝ちです";
        console.log("あなたの勝ち")
    } else if (result == "l") {
        document.getElementById("kekka").innerHTML = "あなたの負けです";
        console.log("あなたの負け")
    } else {
        document.getElementById("kekka").innerHTML = "あいこです";
        console.log("あいこ")
    }
    
    })

    $('.btn2').on("click" ,function() {
        let cpu__hand = Math.floor(Math.random() * 3) ;
        if (cpu__hand == 0) {
            document.getElementById("cpu__img").src = "img/gu.png";
        } else if (cpu__hand == 1) {
            document.getElementById("cpu__img").src = "img/choki.png";
        } else {
            document.getElementById("cpu__img").src = "img/pa.png";
        }
        
    
        var player__hand = $('.btn2').val();
        //    player__hand = player__hand.value;
    
        console.log(player__hand);
        console.log(cpu__hand);
    
        // グー=0　チョキ=1　パー=2
        // プレイヤーの勝ち=w 負け=l 引き分け=d
    
        if (cpu__hand == 1) {
            var result = "d";
        } else if (cpu__hand == 2 ) {
            result = "w";
        } else {
            var result = "l";
        }
    
            console.log(result)
        if (result == "w") {
            document.getElementById("kekka").innerHTML = "あなたの勝ちです";
            console.log("あなたの勝ち")
        } else if (result == "l") {
            document.getElementById("kekka").innerHTML = "あなたの負けです";
            console.log("あなたの負け")
        } else {
            document.getElementById("kekka").innerHTML = "あいこです";
            console.log("あいこ")
        }
    
        })
    
        $('.btn3').on("click" ,function() {
            let cpu__hand = Math.floor(Math.random() * 3) ;
            if (cpu__hand == 0) {
                document.getElementById("cpu__img").src = "img/gu.png";
            } else if (cpu__hand == 1) {
                document.getElementById("cpu__img").src = "img/choki.png";
            } else {
                document.getElementById("cpu__img").src = "img/pa.png";
            }
            
        
            var player__hand = $('.btn3').val();
            //    player__hand = player__hand.value;
        
            console.log(player__hand);
            console.log(cpu__hand);
        
            // グー=0　チョキ=1　パー=2
            // プレイヤーの勝ち=w 負け=l 引き分け=d
        
            if (cpu__hand == 2) {
                var result = "d";
            } else if (cpu__hand == 0 ) {
                result = "w";
            } else {
                var result = "l";
            }
        
                console.log(result)
            if (result == "w") {
                document.getElementById("kekka").innerHTML = "あなたの勝ちです";
                console.log("あなたの勝ち")
            } else if (result == "l") {
                document.getElementById("kekka").innerHTML = "あなたの負けです";
                console.log("あなたの負け")
            } else {
                document.getElementById("kekka").innerHTML = "あいこです";
                console.log("あいこ")
            }
        
            })
        