import React, { useState } from 'react'
import Graph_card from '../components/graph_card'
import { faWallet,faSquareMinus,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import StockCard from './StockCard'

const Home = () => {

    const [updateProps,changeUpdateProps] = useState({});
    const [updateForm,toggleUpdateForm] = useState(false);

  return (
    <div className="main-page">
      <header>
        <h1>E-Commerce Store</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product">
          <div className='mx-3 my-3' style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',padding:'auto'}}>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='less in stock' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='out of stock' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='sufficient' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
        <StockCard name='AHDT' quantity='12' mrp='162' cp='123' minimum='2' category='out of stock' image='/send1.jpg' update={changeUpdateProps} open={toggleUpdateForm}/>
      </div>
          </div>
          {/* Add more product entries */}
        </section>

        <section className="popular-categories">
          <h2>Popular Categories</h2>
          <ul className="category-list">
          <Graph_card bg_color="dark-background" icon={faSquarePlus} text="Total Income" amount="567" />
        <Graph_card bg_color="dark-background" icon={faWallet} text="Total Saving" amount="567" />
        <Graph_card bg_color="dark-background" icon={faSquareMinus} text="Total Expense" amount="567" />
            {/* Add more categories */}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 E-Commerce Store</p>
      </footer>
    </div>
  )
}

export default Home