import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [ hotels, setHotels ] = useState(data);
  const [ showText, setShowText] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter(index => index.id !== id);
    setHotels(newHotels);
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText);
  }

  return (
    <div>
      <div className='container'>
        <h1>NYC top { hotels.length } hotels</h1>
      </div>

      { hotels.map(( element => {
        const { id, hotelName, image, description, source, showMore } = element;

        return (
          <div key={ id }>
            <div className='container'>
              <h2>{ id } - { hotelName }</h2>
            </div>

            <div className='container'>
              <p>
                { showMore ? description : description.substring(0, 220) + '...' }
                <button onClick={ () => showTextClick(element) } > { showMore ? 'Show Less' : 'Show More' } </button> 
                {/* !showMore every click different state */}
              </p>
            </div>

            <div className='container'>
              <img src={ image } />
            </div>

            <div className='container'>
              <p>{ source }</p>
            </div>

            <div className='container'>
              <button className='btn' onClick={ () => removeHotel(id) }>remove</button>
            </div>

          </div> 
        )
      })) }

    </div>
  )
}

export default App;




 