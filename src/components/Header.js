
export const Header = ({countCartItems}) => {
    return (
        <header className="row block center">
            <div>
                <a href="#/"><h1>Shopping Cart</h1></a>
            </div>
            <div>
                <a href="#/cart">
                Cart {' '}
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):('')}
                </a>
                <a href="#/signint">SignIn</a>
            </div>
        </header>
    )
}

