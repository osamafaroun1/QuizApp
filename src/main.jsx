import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';

const router = createBrowserRouter([
  {
    path: "/QuizApp",
    element: <App/>,
    children: [
      {
        path: '/QuizApp',
        element: <Home/>
      },
      {
        path: '/QuizApp/quiz',
        element: <Quiz/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
