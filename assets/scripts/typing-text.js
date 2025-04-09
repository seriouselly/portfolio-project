const text =
  "I was born in Jakarta, Indonesia and now I'm 27th years old. I have gained 4 years and 14 months of work experience, including 6 months as a Production Operator and 4 years and 8 months in the Administration field. Throughout my career, I have learned many new things that have shaped me into a visionary and well-organized individual. Additionally, these experiences have enhanced my ability to work quickly, accurately, and precisely.";

const target = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 30);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
