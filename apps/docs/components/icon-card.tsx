import { memo } from "react";
import type { IconEntry } from "@/lib/types";
import type { IconWeight } from "@/utils/iconCodeSnippets";
import { IconRenderer } from "@/components/icon-renderer";

interface IconCardProps {
  icon: IconEntry;
  weight?: IconWeight;
  duotone?: boolean;
  onIconClick: (icon: IconEntry) => void;
}

export const IconCard = memo(function IconCard({ icon, weight, duotone, onIconClick }: IconCardProps) {
  return (
    <button
      onClick={() => onIconClick(icon)}
      className="group flex flex-col justify-center items-center gap-2 p-2 aspect-square rounded-2xl transition-colors bg-surface-subtle hover:bg-surface-subtle-hover cursor-pointer text-text-subtle"
    >
      <IconRenderer
        iconName={icon.kebabName}
        weight={weight}
        duotone={duotone}
        className="h-6 w-6"
      />
    </button>
  );
});
