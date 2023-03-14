import { Route, Routes } from "react-router-dom";
import AdminLogin from "../Pages/Admin/AdminLogin";
import Member from '../Pages/Admin/Member'
import Genre from "../Pages/Admin/Genre";
import AddGenres from "../Pages/Admin/AddGenre";
import AddAuctions from "../Pages/Admin/AddAuction";
import Markets from "../Pages/Admin/Market";

import AdminVerification from "../Verification/adminVerification";


const AdminRoutes = ()=>{
    return(
    <Routes>

      <Route path="/" element={<AdminLogin/>}/>
      
      <Route element={<AdminVerification/>}>
      <Route path="/members" element={<Member/>}/>
      <Route path="/genre" element={<Genre/>}/>
      <Route path="/addgenre" element={<AddGenres/>}/>
      <Route path="/addauction" element={<AddAuctions/>}/>
      <Route path="/auction" element={<Markets/>}/>
      </Route>
    
    </Routes>
    )
}

export default AdminRoutes