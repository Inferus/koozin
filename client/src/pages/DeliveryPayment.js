import React from 'react';

const DeliveryPayment = () => {

    const blackHeader = () => {
        const header = document.querySelector('.header')
        header.style.background = '#000000'
    }

    setTimeout(blackHeader, 100)

    return (
        <div className='deliveryBlock'>
            <h2 className='deliveryBlock__title'>доставка и оплата</h2>
            <p className='deliveryBlock__redText'>сроки</p>
            <p className='deliveryBlock__subtitle'>Москва и Санкт-Петербург</p>
            <p className='deliveryBlock__text'>На следующий день при заказе до 19:00.</p>
            <p className='deliveryBlock__subtitle'>по России</p>
            <p className='deliveryBlock__text'>от 3-х до 14-ти дней. Точную дату сообщит менеджер при оформлении заказа</p>
            <p className='deliveryBlock__redText'>условия</p>
            <p className='deliveryBlock__subtitle'>наши партнеры</p>
            <p className='deliveryBlock__text'>CDEK, DPD, Доставка Клаб, Почта России</p>
            <p className='deliveryBlock__subtitle'>территория</p>
            <p className='deliveryBlock__text'>по всей территории России, а так же страны ЕАЭС</p>
            <p className='deliveryBlock__text'>курьер заранее свяжется с вами, чтобы согласовать удобное время доставки, и передаст товар лично в руки или вы можете оформить доставку до удобного вам пункта самовывоза.
                Перед оплатой вы имеете право открыть упаковку в присутствии курьера и убедиться в качестве и работоспособности устройства.
                В случае если у товара будут обнаружены какие-либо дефекты, вы в праве отказаться от его покупки и не оплачивать доставку.
                Если была внесена предоплата, то денежные средства будут возвращены в порядке и в сроки, установленные законодательством.</p>
            <p className='deliveryBlock__redText'>оплата</p>
            <p className='deliveryBlock__subtitle'>курьеру при получении</p>
            <p className='deliveryBlock__text'>наличными или банковской картой</p>
            <p className='deliveryBlock__subtitle'>картой на сайте</p>
            <p className='deliveryBlock__text'>Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку  «Оплата заказа банковской картой». Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:
                • МИР
                • VISA International
                • Mastercard Worldwide
                • JCB</p>
            <p className='deliveryBlock__subtitle'>в кредит от «Покупай со Сбером»</p>
            <p className='deliveryBlock__text'>для граждан России;
                возраст — 21-70 лет на момент возврата кредита;
                постоянная (временная) регистрация на территории РФ;
                сумма — от 3 000 до 300 000 руб.;
                первоначальный взнос — 0%;
                срок — 6-12 месяцев;
                Подробнее об условиях по ссылке.;
                Клиентский сценарий:
                Добавьте товар в корзину.
                Нажмите «Оформить заказ».
                Выберете способ оплаты «Покупай со Сбером».
                Укажите контактную информацию и нажмите «Подтвердить».
                Авторизуйтесь в СберБанк Онлайн и выберите срок рассрочки.
                Рассмотрение займет не более 2-х минут.
                В случае одобрения деньги будут автоматически перечислены на счет магазина.
                Дождитесь звонка от магазина для подтверждения.</p>
            <p className='deliveryBlock__subtitle'>в рассрочку от банка «Тинькофф»</p>
            <p className='deliveryBlock__text'>Для граждан России в возрасте от 18 до 70 лет;
                первоначальный взнос — 0%;
                срок рассрочки — от 3 до 12 месяцев;
                без процентов и переплаты.</p>

        </div>
    );
};

export default DeliveryPayment;