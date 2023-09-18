
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailAdminProducts } from "../Redux/HomeSlice";
import { useParams } from "react-router-dom";

const UseAdminDetails = ()=>{

    const dispatch = useDispatch();
    const { loading , filtercolor } = useSelector((state) => state.home);
    const { id } = useParams();

    useEffect(() => {
        dispatch(detailAdminProducts(id));
      }, [dispatch, id]);
      return { loading, filtercolor };
   
}

export default UseAdminDetails