/************ hiveTest1 ************/

const $productLeft = document.querySelector('.productLeft');
const $productRight = document.querySelector('.productRight');
const $swiperValue = document.querySelector('.swiper-wrapper');
const $productList = document.querySelector('.productList');
const $productListR = document.querySelector('.productRightList');
const $moreBtn = document.querySelector('.moreBtn');
const $moreBtnR = document.querySelector('.rightMoreBtn');


function uploadLeftList(data,$list) {
    $list.innerHTML = data.map(item=> `
        <div class="productItem" data-tab="${item.tab}" style="display:none">
            <div class="productImg">
                <img src="${item.img}" alt="${item.title}">
             </div>
            <div class="productInfo">
                ${item.top ? `<span class="top">${item.top}</span>` : ''}
                <p class="productName">
                    <strong>${item.title}</strong>
                    ${item.text}
                </p>
                ${item.coupon ? `<p class="couponPrice">쿠폰적용가 ${item.coupon.toLocaleString()}원</p>` : ''}
                <p class="productPrice">
                    ${item.sale ? `<span class="sale">${item.sale}%</span>` : ''}
                    <strong class="priceNum">${item.price.toLocaleString()}원</strong>
                </p>
            </div>
        </div>
        `).join('')
}

function showLeftTab(tabName) {
    $productList.querySelectorAll('.productItem').forEach(item => {
        item.style.display = item.dataset.tab === tabName ? 'flex' : 'none'
    })
    $moreBtn.textContent = `${tabName} 상품 더보기`
}
function showRightTab(tabName) {
    $productListR.querySelectorAll('.productItem').forEach(item => {
        item.style.display = item.dataset.tab === tabName ? 'flex' : 'none'
    })
    $moreBtnR.textContent = `${tabName} 상품 더보기`
}

function initTabs(showFn,section) {
    section.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseover', () => {
            section.querySelectorAll('.item').forEach(i => i.classList.remove('active'))
            item.classList.add('active')
            const tabName = item.querySelector('a').textContent.trim()
            showFn(tabName)
        })
    })
}

uploadLeftList(leftData,$productList);
uploadLeftList(rightData,$productListR);
showLeftTab('하나더')
showRightTab('베스트')
initTabs(showLeftTab,$productLeft)
initTabs(showRightTab,$productRight)



