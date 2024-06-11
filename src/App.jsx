import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../src/layout/Layout';
import SignInForm from "./pages/SignIn";
import SignUpForm from "./pages/SignUp";
import RecipeDetailsPage from "./pages/RecipeDetails";
import AddRecipeForm from "./pages/AddRecipe";
import EditRecipePage from "./pages/EditRecipePage";
import EditRecipeForm from "./pages/EditRecipe";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  

  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/signin" element={<SignInForm/>}></Route>
      <Route path="/add" element={<AddRecipeForm/>}></Route>
      <Route path="/signup" element={<SignUpForm/>}></Route>
      <Route path="/recipe-detail" element={<RecipeDetailsPage/>}></Route>
      <Route path="/edit-page" element={<EditRecipePage/>}></Route>
      <Route path="/edit-form/:id" element={<EditRecipeForm/>}></Route>
      <Route path="/search" element={<SearchResultPage/>}></Route>


    </Routes>
    </BrowserRouter>

  )
}

export default App
