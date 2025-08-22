import { Avatar } from "@radix-ui/react-avatar";

import { AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserProfileProps {
  name: string;
  email: string;
  imageUrl?: string | null;
}

export function UserProfile({ email, imageUrl, name }: UserProfileProps) {
  function getInitials(name: string) {
    const names = name.split(" ");

    if (names.length === 1) return names[0].charAt(0).toUpperCase();

    return (
      names[0].charAt(0).toUpperCase() +
      names[names.length - 1].charAt(0).toUpperCase()
    );
  }

  const initials = getInitials(name);

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-12 w-12">
        <AvatarImage src={imageUrl ?? undefined} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-muted-foreground text-xs">{email}</span>
      </div>
    </div>
  );
}
