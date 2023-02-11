import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Homepage.css"

const Homepage = () => {
    const navigate=useNavigate()
    const Add=()=>{
         navigate("/add")
    }
  return (
   <>
   <div className='bookcontainer'>
    <h1>Book List</h1>
    <div className='bookbutton'>
    <button onClick={Add}>Add New Book</button>
    </div>
    <div className='individualbooks'>
    <section className='books'>
        <img src ="https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg"/>
     </section>
    <section  className='books'>
    <img src ="https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg"/>

    </section>
    <section  className='books'>
    <img src ="https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg"/>

    </section>

    </div>
    
  

   </div>
   </>
  )
}

export default Homepage