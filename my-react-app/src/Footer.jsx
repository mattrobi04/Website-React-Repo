
function Footer() {

    return(
        <footer>
            <h1>My React Website</h1>
            <nav>
                
                <div class="header__ul">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                </div>
            </nav>
            <h2 className="footer-text">&copy; {new Date().getFullYear()} Matthew's Website </h2>
        </footer>
    );
}

export default Footer;