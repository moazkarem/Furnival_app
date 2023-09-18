/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect, useState } from "react";
import { getShop } from "../../Redux/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Shopdata.css";
import { addTocard } from "../../Redux/HomeSlice";
import Zoom from "react-reveal/Zoom";
import { detailusers } from "../../Redux/HomeSlice";
import { modalStatus } from "../../Redux/HomeSlice";
import {useNavigate} from 'react-router-dom'
const ShopData = ({ filterItems }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {  filtercolor } = useSelector(
    (state) => state.home
  );
  const items = 9;
  const [curent, setCurent] = useState(1);
  const Npage = Math.ceil(filtercolor.length / items);
  const startIndex = (curent - 1) * items;
  const endIndex = startIndex + items;
  const dataPerPage = filtercolor.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getShop());
  }, [dispatch]);
  return (
    <div className="row me-0">
      {dataPerPage.map((item) => (
        <Zoom>
          <div className="best-sel-cards shop-cards  col-lg-2 col-md-6 col-sm-8 ">
            <img src={item.image} onClick={()=> navigate(`/detail/${item.id}`) }/>
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
      ))}
      <div className="  pagin mb-3 ">
        {Array.from({ length: Npage }, (_, i) => i + 1).map((page) => (
          <span
            className="me-2 pagination-shop"
            onClick={() => setCurent(page)}
          >
            {" "}
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ShopData;
