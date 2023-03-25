import { useState } from 'react'
import Navbar from "/src/Navbar.jsx"
import Bookshelf from "/src/Bookshelf.jsx"





function App() {

  const [search, setSearch] = useState ("")


    
  const handleChange = (e) => {
      setSearch(e.target.value);
    };
  

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetch(`https://openlibrary.org/search.json?q=${search}&limit=5`)
        .then(res => {
          if (res.status !== 200) {
            console.warn("Warning: Something is wrong with the api.");
            return;
          }
          res.json().then(data => {
            if (data != null) {
              console.log(data);
              
            }
          });
        });
        
    };


  return (
   <>
    <Navbar />
    <div className = "welcome-input-container">
      <div className = "welcome-input">
        <h1 className = "welcome-message">Welcome, Jennifer!</h1>
        <form className = "input-form" onSubmit={handleSubmit}>
          <input className ="input-area" type="text" onChange = {handleChange} placeholder="Enter book name or ISBN" />
          <button className = "submit" type="submit">SEARCH</button>
        </form>
  
      </div>
      <Bookshelf />
     </div>
      

    
    
    

   </>
  )
}

export default App
