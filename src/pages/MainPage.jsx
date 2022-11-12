
function MainPage() {
    return (
    <div>
{/* /////////////////////// */}

    {/* Navigation section  */}
        <div className="d-flex j-c-between a-i-center px-2">
            <div className="d-flex gap-2">
                <img className="w-8r border-radius-0_3r m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8F64Y0jzgZChEItJd76VA5hSFCBTVZjWwQ&usqp=CAU" alt="aura logo" />
                <h4 className="text-2 color-black fw-300">Главная</h4>
                <h4 className="text-2 color-black fw-300">Филиалы</h4>
                <h4 className="text-2 color-black fw-300">О нас</h4>
                <h4 className="text-2 color-black fw-300">Контакты</h4>
            </div>
            <div className="d-flex gap-2 a-i-center">
                <h4 className="text-2 color-black fw-300">+998(97) 745 72 25</h4>
                <button className="px-2 py-1 border-none bg-red border-radius-0_3r color-light text-1_5" type="submit">Войти</button>
            </div>
        </div>
        <hr className="border-gray-light border-1px" />
    {/* /Navigation section */}

{/* /////////////////////// */}



{/* /////////////////////// */}

        {/* Nested navigation */}
            <div>
                <ul className="d-flex list-style-none gap-2_5">
                    <li className="text-1_7 color-black">Lavashlar</li>
                    <li className="text-1_7 color-black">Setlar</li>
                    <li className="text-1_7 color-black">Xaggi</li>
                    <li className="text-1_7 color-black">Shirinliklar</li>
                    <li className="text-1_7 color-black">Pitsalar</li>
                    <li className="text-1_7 color-black">Klab Sendvich</li>
                    <li className="text-1_7 color-black">Burger va donerlar</li>
                    <li className="text-1_7 color-black">Hotdoglar</li>
                    <li className="text-1_7 color-black">Sneklar</li>
                    <li className="text-1_7 color-black">Salatlar</li>
                    <li className="text-1_7 color-black">Ichimliklar</li>
                    <li className="text-1_7 color-black">Souslar</li>
                </ul>
            </div>



        {/* /Nested navigation */}

{/* /////////////////////// */}

    </div>

    )
}
export default MainPage