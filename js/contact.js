// validation du formulaire
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if(name === "" || email === "" || message === ""){
    msg.style.color = "red";
    msg.textContent = "Veuillez remplir les champs obligatoires.";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Message envoyé avec succès ✔";

  this.reset();
});

// FAQ interactive
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});