import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralBold = memo(
  forwardRef<SVGSVGElement, EmoteNeutralBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-bold" {...props}>
      <path fill="currentColor" d="M15.5 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralBold.displayName = 'EmoteNeutralBold';

// Triple export pattern (lucide-react style)
export { EmoteNeutralBold, EmoteNeutralBold as EmoteNeutralBoldIcon, EmoteNeutralBold as SiEmoteNeutralBold };
export default EmoteNeutralBold;
export type { EmoteNeutralBoldProps };
