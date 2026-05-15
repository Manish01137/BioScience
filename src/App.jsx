import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout   from './components/Layout'
import Home     from './pages/Home'
import About    from './pages/About'
import Portfolio from './pages/Portfolio'
import Quality  from './pages/Quality'
import WhyUs    from './pages/WhyUs'
import Partner  from './pages/Partner'
import Contact  from './pages/Contact'
import Blog     from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index        element={<Home />} />
          <Route path="about"     element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="quality"   element={<Quality />} />
          <Route path="why-us"    element={<WhyUs />} />
          <Route path="partner"   element={<Partner />} />
          <Route path="blog"        element={<Blog />} />
          <Route path="blog/:slug"  element={<BlogPost />} />
          <Route path="contact"   element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
