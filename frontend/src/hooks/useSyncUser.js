const API_URL = import.meta.env.VITE_API_URL;

import { useEffect } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";

const useSyncUser = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    const sync = async () => {
      try {
        const token = await getToken();

        await fetch(`${API_URL}/users/sync`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
  }, [isLoaded, isSignedIn, user, getToken]);
};

export default useSyncUser;