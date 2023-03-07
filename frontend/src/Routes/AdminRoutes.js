import { Route, Routes } from "react-router-dom";
import Member from '../Pages/Admin/Member'
import Genre from "../Pages/Admin/Genre";
import AddGenres from "../Pages/Admin/AddGenre";


const AdminRoutes = ()=>{
    return(
    <Routes>

      <Route path="/members" element={<Member/>}/>
      <Route path="/genre" element={<Genre/>}/>
      <Route path="/addgenre" element={<AddGenres/>}/>

    </Routes>
    )
}

export default AdminRoutes