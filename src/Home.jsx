<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then(res => setData(res.data))  
      .catch(err => console.log(err));
  }, []);

  const handleDelete =(id)=>{
    const confirm = window.confirm("would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:4000/users/' + id)
      .then(res =>{ location.reload();})
      .catch(err => console.log(err))
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'> Add +</Link></div>
        <table className='table table-striped '>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-info me-2'>Edit</Link>
                  <button onClick={ e=> handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
=======
import React from 'react';

function Home() {
  return (
    <div className='home-app'>
      <header className='home-header'>
        <h1>Welcome to Retro</h1>
        <img className="logo" src="images/logo.jpg"/>
      </header>
      <main>
        <section className='home-intro'>
          <p>At Retro, we embrace the blend of timeless elegance and cutting-edge innovation. Our mission is to bring you the finest bikes, gadgets, and spare parts that seamlessly merge retro styling with modern performance.</p>
        </section>
        <section className='home-products'>
          <h2>Our Products</h2>
          <div className='home-product-list'>
            <div className='home-product-item'>
              <h3>Bikes</h3>
              <p>Discover innovative bikes for every journey.</p>
            </div>
            <div className='home-product-item'>
              <h3>Engines</h3>
              <p>Experience biking redefined with performance and style.</p>
            </div>
            <div className='home-product-item'>
              <h3>Spare Parts</h3>
              <p>Find the perfect parts to keep your ride in top shape.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer-home'>
        <h2>Published by Retro Industries</h2>
        <p>Stay Connected: Join our community of passionate bikers for the latest gear, exclusive offers, and expert tips. Ride smart, ride safe, and always be prepared for your next adventure. Follow us on social media for updates and inspirations!</p>
      </footer>
    </div>
  );
>>>>>>> 7f80b156ada231151ce57cd238b651046cd26207
}

export default Home;
