import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const syncUser = async (req, res) => {
  try {
    const { clerkId, email, name, profileImage } = req.body;

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({
        clerkId,
        email,
        name,
        profileImage,
      });
    }

    await upsertStreamUser({
      id: clerkId,
      name,
      image: profileImage,
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};