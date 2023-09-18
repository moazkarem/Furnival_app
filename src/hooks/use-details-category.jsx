
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailcategoryadmin } from "../Redux/HomeSlice";
import { useParams } from "react-router-dom";

const UseDetailsCategory = ()=>{

    const dispatch = useDispatch();
    const { loading , categ } = useSelector((state) => state.home);
    const { id } = useParams();

    useEffect(() => {
        dispatch(detailcategoryadmin(id));
      }, [dispatch, id]);
      return { loading, categ };
   
}

export default UseDetailsCategory