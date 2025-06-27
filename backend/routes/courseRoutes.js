const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// POST /courses - Add a course
router.post('/', async (req, res) => {
  try {
    const { title, link, videos } = req.body;
    const newCourse = new Course({ title, link, videos });
    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully' });
  } catch (err) {
    console.error('Error adding course:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /courses/:path - Get courses by path
router.get('/:path', async (req, res) => {
  try {
    const path = '/' + req.params.path;
    const courses = await Course.find({ link: path });
    res.status(200).json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
