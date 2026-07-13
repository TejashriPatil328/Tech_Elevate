import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const useSyncUser = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    const sync = async () => {
      try {
        await fetch("http://localhost:3000/api/users/sync", {
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