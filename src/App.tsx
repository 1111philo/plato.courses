
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Partners from './pages/Partners';
import EduPartners from './pages/EduPartners';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Graduation from './pages/Graduation';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employers" element={<Partners />} />
          <Route path="/edu-partners" element={<EduPartners />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:slug" element={<LessonDetail />} />
          <Route path="/graduation" element={<Graduation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
