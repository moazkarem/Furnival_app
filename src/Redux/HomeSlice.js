import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
const notify = (message, type) => {
  if (type === "success") {
    toast.success(`${message}`, { position: "top-right", theme: "dark" });
  } else if (type === "info") {
    toast.info(` ${message}`, { position: "top-right", theme: "dark" });
  } else if (type === "error") {
    toast.error(`${message}`, { position: "top-right", theme: "dark" });
  }
};
const initialState = {
  loading: false,
  error: null,
  categ: [],
  BestSelling: [],
  shopPage: [],
  filterarr: [],
  filtercolor: [],
  cart: [],
  modalcomponent: null,
  detailUser: [],
  addAdress: [],
  favorit: [],
  blogs: [],
  oneBlog: [],
  logged:false,
  profileList:[],
  isAdmin:false
};

 // ======================================== start admin ===================================


//insert new product
export const insertProduct = createAsyncThunk(
  "home/insertPost",
  async (newPost, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete product slice 
export const deleteProductadmin = createAsyncThunk(
  "home/deleteProduct",
  async (dataPost, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/products/${dataPost.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return dataPost;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);







export const editProductAdmins = createAsyncThunk(
  "home/editProductAdmins",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/products/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      console.log(item, "from server ");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



// details slise
export const detailAdminProducts = createAsyncThunk(
  "home/detailAdminProducts",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);











     



 // ======================================== end  admin ===================================












// ========================================================== get category section  ===============================//
export const getCateg = createAsyncThunk(
  "home/getCateg",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/category");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//insert new category
export const insertcategory = createAsyncThunk(
  "home/insertcategory",
  async (newPost, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete category slice 
export const deletecategoryadmin = createAsyncThunk(
  "home/deletecategoryadmin",
  async (dataPost, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/category/${dataPost.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return dataPost;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



// details category slice to admin 
export const detailcategoryadmin = createAsyncThunk(
  "home/detailcategoryadmin",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/category/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



// ========================================================== get Best selling section  ===============================//
export const getBestSelling = createAsyncThunk(
  "home/getBestSelling",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/BestSelling");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// ========================================================== get product or shop page   ===============================//

export const getShop = createAsyncThunk("home/getShop", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

//===================================== details slice for user ==============

export const detailforUser = createAsyncThunk(
  "home/detailforUser",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//===================================== details blogs ==============

export const detailsBlogs = createAsyncThunk(
  "home/detailsBlogs",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/blogs/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ========================================================== get blogs page   ===============================//

export const getBlogs = createAsyncThunk(
  "home/getBlogs",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/blogs");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const Homeslice = createSlice({
  name: "home",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      if (action.payload === "All") {
        state.filterarr = state.shopPage;
      } else {
        state.filterarr = state.shopPage.filter(
          (item) => item.categ === action.payload
        );
      }
    },
    // filter by color
    filterByColor: (state, action) => {
      if (action.payload === "All") {
        state.filtercolor = state.shopPage;
      } else {
        state.filtercolor = state.shopPage.filter(
          (item) => item.color === action.payload
        );
      }
    },
    //============================ start cart actions ===========================
    //add action
    addTocard: (state, action) => {
      if(state.logged === false){
        notify("Login Firstly To Add Product To Shopping Cart  ", "error");
      }else if(state.logged === true){
        const findProduct = state.cart.find(
          (product) => product.id === action.payload.id
        );
        if (findProduct) {
          findProduct.quantity += 1;
          notify("Product Qyantity Increased", "info");
        } else {
          const cloneProduct = { ...action.payload, quantity: 1 };
          state.cart.push(cloneProduct);
           notify("Added successfully", "success");
        }
      }
      
    },
    // delete from card
    deletefromCard: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      notify("Deleted successfully ", "error");
    },
    // increase quantit
    increase: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    // decraes quantit
    decrease: (state, action) => {
      if (action.payload.quantity >= 1) {
        const item = state.cart.find((item) => item.id === action.payload.id);
        item.quantity--;
      }
    },
    //====================== modal ==================
    modalStatus: (state, action) => {
      state.modalcomponent = action.payload;
    },
    //============================ add new address ===========================
    AddAdress: (state, action) => {
      state.addAdress.push(action.payload);
      notify("Added Address successfully", "success");
    },
    // ===================================== add to whishlist=================
    AddTo_Whishlist: (state, action) => {
      if(state.logged === false ){
        notify("Login Firstly To Add Product To Wishlist ", "error");
      }else if(state.logged===true){
        const findProduct = state.favorit.find(
          (product) => product.id === action.payload.id
        );
        if (findProduct) {
          findProduct.quantity += 1;
          notify("Product Already Added To Whishlist", "info");
        } else {
          const cloneProduct = { ...action.payload, quantity: 1 };
          state.favorit.push(cloneProduct);
          notify(" Product Added To Whishlist successfully", "success");
        }
      }
      
    },
    // delete from favorit
    deletefromWhishlist: (state, action) => {
      state.favorit = state.favorit.filter((el) => el.id !== action.payload.id);
      notify("Deleted From Whishlist Successfully ", "error");
    },
    //===================================== start login ===================
    sign_up :(state , action)=>{
      state.logged = true
      state.profileList = action.payload
      if(action.payload.user==="Moaz Karem Mostafa"){
        state.isAdmin=true
      }else{
        state.isAdmin=false
      }
    }
  },
  extraReducers: {

  //=========================== admin ===================

 // insert post reducer here
 [insertProduct.pending]: (state, action) => {
  state.loading = true;
      state.error = null;
},
[insertProduct.fulfilled]: (state, action) => {
  state.loading = false;
  state.error = null;
  state.shopPage.push(action.payload);
  console.log(action.payload);
},
[insertProduct.rejected]: (state, action) => {
  state.error = action.payload;
  state.loading = false;
},
 
// delete product  deleteProduct

[deleteProductadmin.pending]: (state, action) => {
  state.loading = true;
  state.error = null;
},
[deleteProductadmin.fulfilled]: (state, action) => {
  state.loading = false;
  state.error = null;
  state.shopPage = state.filtercolor.filter((el) => el.id !== action.payload.id);
  notify("Deleted successfully", "success");
},
[deleteProductadmin.rejected]: (state, action) => {
  state.error = action.payload;
  state.loading = false;
},










  
[editProductAdmins.pending]: (state, action) => {
  state.loading = true;
  state.error = null;
},
[editProductAdmins.fulfilled]: (state, action) => {
  state.loading = false;
  state.filtercolor = action.meta.arg;
  // state.post.push(action.meta.arg)
  
  //[{...state , post:action.meta.arg}]
},
[editProductAdmins.rejected]: (state, action) => {
  state.loading = false;
  state.error = action.payload;
},

 // details slice
 [detailAdminProducts.pending]: (state, action) => {
  state.loading = true;
  state.error = null;
},
[detailAdminProducts.fulfilled]: (state, action) => {
  state.loading = false;
  state.error = null;
  state.filtercolor = action.payload;
},
[detailAdminProducts.rejected]: (state, action) => {
  state.error = action.payload;
  state.loading = false;
},

  //===========================end admin ================



    // Get Category Data from API
    [getCateg.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getCateg.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.categ = action.payload;
    },
    [getCateg.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },



     // insert category here
     [insertcategory.pending]: (state, action) => {
      state.loading = true;
          state.error = null;
    },
    [insertcategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.categ.push(action.payload);
      
    },
    [insertcategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },


    // delete product  deleteProduct

[deletecategoryadmin.pending]: (state, action) => {
  state.loading = true;
  state.error = null;
},
[deletecategoryadmin.fulfilled]: (state, action) => {
  state.loading = false;
  state.error = null;
  state.categ = state.categ.filter((el) => el.id !== action.payload.id);
  notify("Deleted successfully", "success");
},
[deletecategoryadmin.rejected]: (state, action) => {
  state.error = action.payload;
  state.loading = false;
},

 // details slice
 [detailcategoryadmin.pending]: (state, action) => {
  state.loading = true;
  state.error = null;
},
[detailcategoryadmin.fulfilled]: (state, action) => {
  state.loading = false;
  state.error = null;
  state.categ = action.payload;
},
[detailcategoryadmin.rejected]: (state, action) => {
  state.error = action.payload;
  state.loading = false;
},
//====================end category ===========    
    //Get Best Selling Products From Api
    [getBestSelling.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getBestSelling.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.BestSelling = action.payload;
    },
    [getBestSelling.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //Get  Product From api
    [getShop.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getShop.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.shopPage = action.payload;
      state.filterarr = state.shopPage;
      state.filtercolor = state.shopPage;
    },
    [getShop.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // details for users
    [detailforUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [detailforUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.detailUser = action.payload;
    },
    [detailforUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // blogs for users
    [getBlogs.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.blogs = action.payload;
    },
    [getBlogs.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // blogs  details
    [detailsBlogs.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [detailsBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.oneBlog = action.payload;
    },
    [detailsBlogs.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  filterCategory,
  filterByColor,
  addTocard,
  deletefromCard,
  increase,
  decrease,
  modalStatus,
  AddAdress,
  AddTo_Whishlist,
  deletefromWhishlist,
  sign_up
} = Homeslice.actions;

export default Homeslice.reducer;
