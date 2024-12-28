import React from 'react';
import { Facebook, Youtube } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-6">
      <SocialLink
        href="https://www.facebook.com/profile.php?id=61570125661560"
        icon={<Facebook className="w-6 h-6" />}
        label="Facebook"
      />
      <SocialLink
        href="https://www.youtube.com/@invisibleintercom9794"
        icon={<Youtube className="w-6 h-6" />}
        label="YouTube"
      />
    </div>
  );
}