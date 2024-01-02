var n = localStorage.getItem('visit_counter');

if (n === null) {
 n = 0;
}
n++;

localStorage.setItem("visit_counter", n);

document.getElementById('visits').innerHTML = n;
