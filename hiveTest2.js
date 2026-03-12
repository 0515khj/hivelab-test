
const $ibtn = document.querySelector('.ibtn');
const $pop = document.querySelector('.pop');
const $closeBtn = document.querySelector('.closeBtn');
const $foldBtn = document.querySelector('.foldBtn');
const $dayList = document.querySelector('.dayList');
const $up = document.querySelector('.up');

$ibtn.addEventListener('click',e=>{
    $pop.classList.add('active')
})

$closeBtn.addEventListener('click',e=>{
    $pop.classList.remove('active')
})

$foldBtn.addEventListener('click',e=>{
    $dayList.style.display= $dayList.style.display === 'none' ? 'flex' : 'none'
    $foldBtn.classList.toggle('fold')
})

