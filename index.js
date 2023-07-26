
async function fetchData () {
    try {
        const response = await fetch('data.json');

        if(!response.ok) {
            throw new Error('Не удалось обработать data.json')
        }
        const data = await response.json()
        const productBox = document.querySelector('.product__box');

        data.forEach(({ name, image, price, color, size, quantity}) => {
            const productEl = `
            <div class="product">
                <button class="btn__del">Удалить</button>
                <div class="product__content">
                    <img class="product__img" src="${image}" alt="${name}">
                    <div class="product__desc">
                        <h2 class="product__name">${name}</h2>
                        <p class="product__price_label"><span class="product__price">$${price}</span></p>
                        <p class="product__color">Цвет: ${color}</p>
                        <p class="product__size">Размер: ${size}</p>
                        <div class="product__qty">
                            <label class="input__label">Количество:</label>
                            <input class="input__quantity" type="text" value="${quantity}">
                        </div>
                    </div>
                </div>
            </div>`;
            productBox.insertAdjacentHTML('beforeend', productEl)
        });
        const deleteBtn = document.querySelectorAll('.btn__del')
        deleteBtn.forEach((button) => {
            button.addEventListener('click', () => {
                const product = button.closest('.product');       
                product.remove();
            })
        })
    } catch (error) {
        console.error(error)
    }
};

fetchData();