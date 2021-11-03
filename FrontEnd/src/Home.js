import { useState } from 'react'
import'./App.css';
import { Link } from 'react-router-dom'

function App() {
  const [open, setOpen ] = useState(false)
  return (
    <div className="homeContainer">
        <div className="notify-wrapper">
       <div className="object">
         <div className="image">
           <img src="/model-3.jpg" alt="profile-image" />
         </div>
         <div className="details">
           <h3>name</h3>
           <small>email</small>
           <div className="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus est nisi nulla asperiores amet praesentium quas perferendis facilis omnis, magni eligendi optio, dolor sequi id pariatur doloremque aliquam illo.</div>
         </div>
       </div>
       <div className="option">
         <h3>x</h3>
            <h4 onClick={() => setOpen(true)}>...</h4>
       </div>
       { open &&
        <div className="other" onMouseLeave={() => setOpen(false)}>
        <p>see profile</p>
       </div>
    }
     </div>
     <div className="notify-wrapper">
       <div className="object">
         <div className="image">
           <img src="/model-3.jpg" alt="profile-image" />
         </div>
         <div className="details">
           <h3>name</h3>
           <small>email</small>
           <div className="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus est nisi nulla asperiores amet praesentium quas perferendis facilis omnis, magni eligendi optio, dolor sequi id pariatur doloremque aliquam illo.</div>
         </div>
       </div>
       <div className="option">
         <h3>x</h3>
            <h4 onClick={() => setOpen(true)}>...</h4>
       </div>
       { open &&
        <div className="other" onMouseLeave={() => setOpen(false)}>
        <p>see profile</p>
       </div>
    }
     </div>
     <div className="notify-wrapper">
       <div className="object">
         <div className="image">
           <img src="/model-3.jpg" alt="profile-image" />
         </div>
         <div className="details">
           <h3>name</h3>
           <small>email</small>
           <div className="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus est nisi nulla asperiores amet praesentium quas perferendis facilis omnis, magni eligendi optio, dolor sequi id pariatur doloremque aliquam illo.</div>
         </div>
       </div>
       <div className="option">
         <h3>x</h3>
            <h4 onClick={() => setOpen(true)}>...</h4>
       </div>
       { open &&
        <div className="other" onMouseLeave={() => setOpen(false)}>
        <p>see profile</p>
       </div>
    }
     </div>
    </div>
  );
}

export default App;
