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

function App() {

  const {showRecruiterLogin}=useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/applyJobs/:id' element={<ApplyJobs />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add-jobs' element={<AddJobs />} />
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='view-applications/:id' element={<ViewApplications />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
