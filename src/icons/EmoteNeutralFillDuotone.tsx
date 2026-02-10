import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.5 14a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.5 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteNeutralFillDuotone.displayName = 'EmoteNeutralFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteNeutralFillDuotone, EmoteNeutralFillDuotone as EmoteNeutralFillDuotoneIcon, EmoteNeutralFillDuotone as SiEmoteNeutralFillDuotone };
export default EmoteNeutralFillDuotone;
export type { EmoteNeutralFillDuotoneProps };
