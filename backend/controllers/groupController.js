const GroupBuy = require('../models/GroupBuy');
const generateReferral = require('../utils/generateReferral');

exports.createGroupBuy = async (req, res) => {
  try {
    const { productId, requiredCount, durationMinutes } = req.body;
    
    if (!productId || !requiredCount || !durationMinutes) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const referralCode = generateReferral();
    const expiresAt = new Date(Date.now() + durationMinutes * 60 * 1000);

    const group = new GroupBuy({ productId, requiredCount, currentUsers: [], referralCode, expiresAt });
    await group.save();
    res.json(group);
  } catch (error) {
    console.error('Error creating group buy:', error);
    res.status(500).json({ message: 'Error creating group buy', error: error.message });
  }
};

exports.joinGroupBuy = async (req, res) => {
  try {
    const { referralCode } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const group = await GroupBuy.findOne({ referralCode });
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    if (group.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Offer expired' });
    }

    if (!group.currentUsers.includes(userId)) {
      group.currentUsers.push(userId);
      if (group.currentUsers.length >= group.requiredCount) {
        group.isUnlocked = true;
      }
      await group.save();
    }

    res.json(group);
  } catch (error) {
    console.error('Error joining group buy:', error);
    res.status(500).json({ message: 'Error joining group buy', error: error.message });
  }
};

exports.getGroupBuy = async (req, res) => {
  try {
    const group = await GroupBuy.findOne({ referralCode: req.params.referralCode });
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.json(group);
  } catch (error) {
    console.error('Error getting group buy:', error);
    res.status(500).json({ message: 'Error getting group buy', error: error.message });
  }
};
