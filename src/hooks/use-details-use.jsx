import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailforUser } from "../Redux/HomeSlice";
import { useParams } from "react-router-dom";


const useDetailsUse = ()=>{
    const dispatch = useDispatch();
    const {  detailUser , loading } = useSelector((state) => state.home);
    const { id } = useParams();
  
    useEffect(() => {
      dispatch(detailforUser(id));
    }, [dispatch, id]);
  
    return { detailUser , loading };
}

export default useDetailsUse