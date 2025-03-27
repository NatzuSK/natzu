
AOS.init();


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn").addEventListener("click", function(event) {
      event.preventDefault(); 
      document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const text = "ยินดีต้อนรับเข้าสู่เว็บไซต์";
    const typingText = document.getElementById("typing-text");
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            typingText.innerHTML = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true; 
                setTimeout(type, 1000);
                return;
            }
        } else {
            typingText.innerHTML = text.substring(0, index);
            index--;
            if (index === 0) {
                isDeleting = false; 
            }
        }

        setTimeout(type, isDeleting ? 50 : 100); 
    }

    type();
});

