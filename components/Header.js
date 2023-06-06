import Link from "next/link";
import Banner from "./Banner";

export default function Header() {
  return (
    <header className="app-header">
      <Banner />
      <h1>
        <Link href="/">
          <a>Box It Out</a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
