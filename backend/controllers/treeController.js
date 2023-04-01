const Tree = require('../models/Tree');

exports.createTree = async (req, res) => {
  try {
    const tree = new Tree(req.body);
    await tree.save();
    res.status(201).json(tree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrees = async (req, res) => {
  try {
    const trees = await Tree.find();
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTreeById = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTree = async (req, res) => {
  try {
    const tree = await Tree.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTree = async (req, res) => {
  try {
    const tree = await Tree.findByIdAndDelete(req.params.id);
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
