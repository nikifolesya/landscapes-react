import './header.css'


function Header() {
    const menuLinksLeft = [
        { 
            id: 1,
            title: "About Us",
            link: ""
        },
        {
            id: 2,
            title: "Article",
            link: ""
        },
        {
            id: 3,
            title: "Sign Up!",
            link: ""
        }
    ]

    const menuItemsLeft = menuLinksLeft.map((l) => (
        <a key={l.id} className={`button-header ${l.id === 3 ? 'special-button' : ''}`} href={l.link}>
            {l.title}
        </a>
    ))

    
    return (
    <header>
        <div className="container">
            <div className='right-button'>
                {menuItemsLeft}
            </div>
        </div>
    </header>
    )
}

export default Header