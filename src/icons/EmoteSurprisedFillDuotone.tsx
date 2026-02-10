import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 11.75c-1.8 0-3.25.44-3.25 1.75s1.46 1.75 3.25 1.75c1.8 0 3.25-.44 3.25-1.75s-1.46-1.75-3.25-1.75m-3-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.5 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.25 15.5c0 1.31-1.46 1.75-3.25 1.75-1.8 0-3.25-.44-3.25-1.75s1.46-1.75 3.25-1.75c1.8 0 3.25.44 3.25 1.75" />
    </IconBase>
  ))
);

EmoteSurprisedFillDuotone.displayName = 'EmoteSurprisedFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedFillDuotone, EmoteSurprisedFillDuotone as EmoteSurprisedFillDuotoneIcon, EmoteSurprisedFillDuotone as SiEmoteSurprisedFillDuotone };
export default EmoteSurprisedFillDuotone;
export type { EmoteSurprisedFillDuotoneProps };
