import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router basename={'/CNU_Blog/'}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Route>
            {/*todo (3-3) Post 추가*/}
          </Route>
          <Route path={'/post/:postId'} element={<Post />} />
          <Route path={'/write'} element={<Write />} />
          {/*todo (5-1) Write 추가*/}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;