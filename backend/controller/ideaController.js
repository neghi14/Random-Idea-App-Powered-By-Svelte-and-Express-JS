const ideas = require('../model/ideasModel');

exports.getIdeas = async (req, res) => {
  try {
    const allIdeas = await ideas.find();
    res.status(200).json({
      status: 'success',
      requestedAt: req.time,
      data: {
        ideas: allIdeas,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: err.message,
      },
    });
  }
};

exports.createIdeas = async (req, res) => {
  try {
    const allIdeas = await ideas.create(req.body);
    res.status(201).json({
      status: 'success',
      requestedAt: req.time,
      data: {
        ideas: allIdeas,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: err.message,
      },
    });
  }
};

exports.updateIdeas = async (req, res) => {
  try {
    const allIdeas = await ideas.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: 'success',
      requestedAt: req.time,
      data: {
        ideas: allIdeas,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: err.message,
      },
    });
  }
};

exports.deleteIdeas = async (req, res) => {
  try {
    const allIdeas = await ideas.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 'success',
      requestedAt: req.time,
      data: {
        ideas: allIdeas,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: err.message,
      },
    });
  }
};
