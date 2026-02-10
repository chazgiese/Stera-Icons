import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-grin-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.25 13.5a1 1 0 0 0-.82 1.58A5.6 5.6 0 0 0 12 17.5c1.89 0 3.54-.97 4.57-2.42a1 1 0 0 0-.82-1.58zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.75 13.5a1 1 0 0 1 .82 1.58A5.6 5.6 0 0 1 12 17.5a5.6 5.6 0 0 1-4.57-2.42 1 1 0 0 1 .82-1.58zM9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteGrinFillDuotone.displayName = 'EmoteGrinFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteGrinFillDuotone, EmoteGrinFillDuotone as EmoteGrinFillDuotoneIcon, EmoteGrinFillDuotone as SiEmoteGrinFillDuotone };
export default EmoteGrinFillDuotone;
export type { EmoteGrinFillDuotoneProps };
