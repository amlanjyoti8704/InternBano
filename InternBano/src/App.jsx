import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Applications from './pages/applications.jsx'
import ApplyJobs from './pages/applyJobs.jsx'
import RecruiterLogin from './components/RecruiterLogin.jsx'
import { useContext } from 'react'
import { AppContext } from './context/appContext.jsx'
import Dashboard from './pages/dashboard.jsx'
import AddJobs from './pages/addJobs.jsx'
import ManageJobs from './pages/manageJobs.jsx'
import ViewApplications from './pages/viewApplications.jsx'
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify';
// import Jobs from './pages/jobs.jsx' // ✅ add this if you created it

function App() {

  const {showRecruiterLogin, companyToken}=useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/applyJobs/:id' element={<ApplyJobs />} />
        {/* <Route path='/jobs' element={<Jobs />} /> */}
        <Route path='/dashboard' element={<Dashboard />}>
          {companyToken
            ?<>
            <Route path='add-jobs' element={<AddJobs />} />
            <Route path='manage-jobs' element={<ManageJobs />} />
            <Route path='view-applications/:id' element={<ViewApplications />} />
            </>
            :null
          }
        </Route>

      </Routes>
    </div>
  )
}

export default App
