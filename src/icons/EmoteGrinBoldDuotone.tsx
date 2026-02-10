import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-grin-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.75 13.5a1 1 0 0 1 .82 1.58A5.6 5.6 0 0 1 12 17.5a5.6 5.6 0 0 1-4.57-2.42 1 1 0 0 1 .82-1.58zM9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteGrinBoldDuotone.displayName = 'EmoteGrinBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteGrinBoldDuotone, EmoteGrinBoldDuotone as EmoteGrinBoldDuotoneIcon, EmoteGrinBoldDuotone as SiEmoteGrinBoldDuotone };
export default EmoteGrinBoldDuotone;
export type { EmoteGrinBoldDuotoneProps };
