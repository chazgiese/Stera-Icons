import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.5 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteNeutralBoldDuotone.displayName = 'EmoteNeutralBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteNeutralBoldDuotone, EmoteNeutralBoldDuotone as EmoteNeutralBoldDuotoneIcon, EmoteNeutralBoldDuotone as SiEmoteNeutralBoldDuotone };
export default EmoteNeutralBoldDuotone;
export type { EmoteNeutralBoldDuotoneProps };
