const API_URL = import.meta.env.VITE_API_URL;

import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const useSyncUser = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    const sync = async () => {
      try {
        await fetch(`${API_URL}/users/sync`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: `${user.firstName || ""} ${user.lastName || ""}`,
            profileImage: user.imageUrl,
          }),
        });
      } catch (err) {
        console.error(err);
      }
    };

    sync();
  }, [isLoaded, isSignedIn, user]);
};

export default useSyncUser;