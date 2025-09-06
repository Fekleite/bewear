import { Avatar } from "@radix-ui/react-avatar";

import { getInitials } from "@/utils/string";

import { AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserProfileProps {
  name: string;
  email: string;
  imageUrl?: string | null;
}

export function UserProfile({ email, imageUrl, name }: UserProfileProps) {
  const initials = getInitials(name);

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-12 w-12 overflow-hidden rounded-full">
        <AvatarImage src={imageUrl ?? undefined} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <span className="leading-6 font-semibold">{name}</span>
        <span className="text-muted-foreground text-xs">{email}</span>
      </div>
    </div>
  );
}
