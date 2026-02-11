import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M10.5 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.25 15.5c0 1.31-1.46 1.75-3.25 1.75-1.8 0-3.25-.44-3.25-1.75s1.46-1.75 3.25-1.75c1.8 0 3.25.44 3.25 1.75" />
    </IconBase>
  ))
);

EmoteSurprisedBoldDuotone.displayName = 'EmoteSurprisedBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedBoldDuotone, EmoteSurprisedBoldDuotone as EmoteSurprisedBoldDuotoneIcon, EmoteSurprisedBoldDuotone as SiEmoteSurprisedBoldDuotone };
export default EmoteSurprisedBoldDuotone;
export type { EmoteSurprisedBoldDuotoneProps };
