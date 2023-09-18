/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './whishlist.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Zoom from "react-reveal/Zoom";
import { useSelector , useDispatch } from 'react-redux';
import { addTocard } from '../../Redux/HomeSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import emptyFav from '../../assets/images/fav.png'
import { FaRegHeart } from "react-icons/fa6";
import { deletefromWhishlist } from '../../Redux/HomeSlice';
const Whishlist = () => {
    const { favorit } = useSelector((state) => state.home);
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div>
      <Header />
      <h1
      className="container mb-4 mt-4 "
      style={{
        fontSize: "24px",
        color: "#133a5e",
        fontWeight: "700",
        lineHeight: "32px",
        fontFamily: "poppins , sans-serif",
      }}
    >
      {" "}
      Whishlist{" "}
    </h1>

    <div className='container'>
    <div className='row me-0'>
    {favorit.length === 0? 
        <div className="w-100 empt-fav empt  flex-column d-flex justifiy-content-center align-items-center">
          <img src={emptyFav} />
         
        </div>
        : favorit.map((item) => (
        <Zoom>
          <div className="best-sel-cards shop-cards  col-lg-2 col-md-6 col-sm-8 ">
       
          <img className='img-fav' src={item.image} onClick={()=> navigate(`/detail/${item.id}`) }/>
          <span className='del-fav' onClick={()=>dispatch(deletefromWhishlist(item))}> <FaRegHeart /> </span>
            <div className="details-best detail-shop d-flex flex-column ">
              <p> {item.name} </p>
              <div className="d-flex justify-content-between align-items-center">
                <span
                  onClick={() => dispatch(addTocard(item))}
                  className="stock "
                >
                  Add to card
                </span>
                <span className="price"> ${item.price} </span>
              </div>
            </div>
          </div>
        </Zoom>
      )) }
    
    </div>
    </div>
    <Footer />
    <ToastContainer />
    </div>
  )
}

export default Whishlist
