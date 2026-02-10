import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-grin-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.75 13.75a.75.75 0 0 1 .61 1.18A5.3 5.3 0 0 1 12 17.25c-1.8 0-3.38-.92-4.36-2.32a.75.75 0 0 1 .61-1.18zM9 8.38a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M15 8.38a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

EmoteGrinRegularDuotone.displayName = 'EmoteGrinRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteGrinRegularDuotone, EmoteGrinRegularDuotone as EmoteGrinRegularDuotoneIcon, EmoteGrinRegularDuotone as SiEmoteGrinRegularDuotone };
export default EmoteGrinRegularDuotone;
export type { EmoteGrinRegularDuotoneProps };
