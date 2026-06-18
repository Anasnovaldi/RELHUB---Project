const texts = [

"Bersama kita mampu membantu lebih banyak orang.",

"Kebaikan kecil dapat membawa harapan besar.",

"Relawan dan donatur adalah satu kekuatan.",

"Mari saling menguatkan saat bencana datang.",

"Kemanusiaan adalah tanggung jawab bersama."

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = texts[textIndex];

    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent =
        current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            textIndex =
            (textIndex+1)%texts.length;
        }

    }

    setTimeout(
        typeEffect,
        deleting ? 40 : 80
    );
}

typeEffect();