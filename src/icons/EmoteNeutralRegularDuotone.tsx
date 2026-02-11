import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 14.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zM9 8.38a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76M15 8.38a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

EmoteNeutralRegularDuotone.displayName = 'EmoteNeutralRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteNeutralRegularDuotone, EmoteNeutralRegularDuotone as EmoteNeutralRegularDuotoneIcon, EmoteNeutralRegularDuotone as SiEmoteNeutralRegularDuotone };
export default EmoteNeutralRegularDuotone;
export type { EmoteNeutralRegularDuotoneProps };
