// ------------------------------------------------transition when you scroll

window.onscroll = function() {
  fn();
};

// simpan referensi elemen ke dalam variabel
var elemen1 = document.getElementById('onscroll');
var elemen2 = document.getElementById('scroll');
var elemen3 = document.getElementById('about-scroll');
var elemen4 = document.getElementById('contact-scroll');
var elemen5 = document.getElementById('about-content-1');
var elemen6 = document.getElementById('about-content-2');
var elemen7 = document.getElementById('about-content-3');
var elemen8 = document.getElementById('about-content-4');

// hanya butuh satu fungsi
function fn() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
	// sebaliknya, jangan lupa untuk menghilangkan class `hidden`
    elemen1.classList.remove('hidden');
    elemen2.classList.remove('hidden');
    elemen3.classList.remove('hidden');
    elemen4.classList.remove('hidden');
    elemen5.classList.remove('hidden');
    elemen6.classList.remove('hidden');
    elemen7.classList.remove('hidden');
    elemen8.classList.remove('hidden');

    elemen1.classList.add('slideRight');
    elemen2.classList.add('slideUp');
    elemen3.classList.add('slideUp');
    elemen4.classList.add('slideUp');
    elemen5.classList.add('slideUp');
    elemen6.classList.add('slideUp');
    elemen7.classList.add('slideUp');
    elemen8.classList.add('slideUp');
  } else {
    // jangan lupa untuk menghilangkan class `slideUp`
    elemen1.classList.remove('slideRight');
    elemen2.classList.remove('slideUp');
    elemen3.classList.remove('slideUp');
    elemen4.classList.remove('slideUp');
    elemen5.classList.remove('slideUp');
    elemen6.classList.remove('slideUp');
    elemen7.classList.remove('slideUp');
    elemen8.classList.remove('slideUp');

    // daripada menggunakan `className += namaClass`, gunakan `classList.add`
    elemen1.classList.add('hidden');
    elemen2.classList.add('hidden'); 
    elemen3.classList.add('hidden');
    elemen4.classList.add('hidden');
    elemen5.classList.add('hidden');
    elemen6.classList.add('hidden');
    elemen7.classList.add('hidden');
    elemen8.classList.add('hidden');
  }
}
