 import Link from 'next/link';
export const runtime = 'edge';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="yep">
      <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="logo">
            <h1>Enjoy Movies</h1>
          </div>
          <div className="menu-items">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/new">Rated</Link></li>
            <li><Link href="/search">Browse</Link></li>
          </div>
        </div>
      </div>
    </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
