let slideIndex = 0;

const slides = document.querySelectorAll('.photo-gallery img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function moveSlide(step) {
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.querySelector('.close').onclick = () => {
  document.getElementById('myModal').style.display = 'none';
};

// Show the modal on page load
window.onload = () => {
  document.getElementById('myModal').style.display = 'block';
};

const alumnos = document.getElementsByClassName("container-alumno");

for (let i = 0; i < alumnos.length; i++)
{
  alumnos[i].onclick = () => {
    console.log("wololo");

    let nombre = alumnos[i].querySelector(".info-alumno > h4").textContent;
    let descripcion = alumnos[i].querySelector(".info-alumno > p").textContent;

    document.getElementById("info-alumno-titulo").textContent = nombre;
    document.getElementById("info-alumno-descripcion").textContent = descripcion;

    $("#modal-info-alumno").modal("show");

    console.log(nombre, descripcion);
  }
} 
