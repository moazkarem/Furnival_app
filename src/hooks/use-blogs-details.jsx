import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsBlogs } from "../Redux/HomeSlice";
import { useParams } from "react-router-dom";
const UseBlogsDetails = () => {
  const dispatch = useDispatch();
  const { oneBlog, loading } = useSelector((state) => state.home);
  const { id } = useParams();
  useEffect(() => {
    dispatch(detailsBlogs(id));
  }, [dispatch, id]);
  return { oneBlog, loading };
};

export default UseBlogsDetails;
