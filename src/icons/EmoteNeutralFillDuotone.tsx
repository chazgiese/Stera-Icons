import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteNeutralFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8 14a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm.5-6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 14a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteNeutralFillDuotone.displayName = 'EmoteNeutralFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteNeutralFillDuotone, EmoteNeutralFillDuotone as EmoteNeutralFillDuotoneIcon, EmoteNeutralFillDuotone as SiEmoteNeutralFillDuotone };
export type { EmoteNeutralFillDuotoneProps };
