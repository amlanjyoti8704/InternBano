// import express from 'express';
// import axios from 'axios';

// const router = express.Router();

// router.get('/jobs', async (req, res) => {
//   const url = 'https://free-y-combinator-jobs-api.p.rapidapi.com/active-jb-7d';
  
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': process.env.RAPIDAPI_KEY, // store key in .env
//       'x-rapidapi-host': 'free-y-combinator-jobs-api.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.get(url, options);
//     res.json({ jobs: response.data });
//   } catch (error) {
//     console.error('Error fetching jobs:', error.message);
//     res.status(500).json({ error: 'Failed to fetch jobs' });
//   }
// });

// export default router;