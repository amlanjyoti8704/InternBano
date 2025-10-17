import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router=express.Router()

// register a company
router.post('/register', upload.single('image'), registerCompany)

// company login
router.post('/login', loginCompany)

// get company data
router.get('/company', getCompanyData)

// post a job
router.post('/post-job', postJob)

// get applicants data of the company
router.get('/applicants',getCompanyJobApplicants)

// get company job list
router.get('/list-jobs',getCompanyPostedJobs)

// chnage applications status
router.post('/change-status',ChangeJobApplicationsStatus)

// change application visibilty
router.post('/change-visibility', changeVisibility)

export default router