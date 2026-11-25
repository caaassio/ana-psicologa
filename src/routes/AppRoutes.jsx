import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Post from '../pages/Post'
import ListaFilmes from '../pages/ListaFilmes'

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/lista-filmes" element={<ListaFilmes />} />
      </Routes>
    </Router>
  )
}
