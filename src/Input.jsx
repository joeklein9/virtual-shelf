import {React, useState} from "react"

export default function Input () {

    const [book, setBook] = useState ("")

    
    const handleChange = (e) => {
        setBook(e.target.value);
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch(`https://openlibrary.org/search.json?q=${book}&limit=2`)
          .then(res => {
            if (res.status !== 200) {
              console.warn("Warning: Something is wrong with the api.");
              return;
            }
            res.json().then(data => {
              if (data != null) {
                console.log(data);
                setBook(data.docs);
              }
            });
          });
          
      };
    return (
        <form className = "input-form" onSubmit={handleSubmit}>
            <input className ="input-area" type="text" onChange = {handleChange} placeholder="Enter book name or ISBN" />
            <button className = "submit" type="submit">SEARCH</button>
      </form>
    )
}