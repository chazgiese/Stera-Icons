import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedBold = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-bold" {...props}>
      <path fill="currentColor" d="M12 13.75c1.8 0 3.25.44 3.25 1.75s-1.46 1.75-3.25 1.75c-1.8 0-3.25-.44-3.25-1.75s1.46-1.75 3.25-1.75M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedBold.displayName = 'EmoteSurprisedBold';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedBold, EmoteSurprisedBold as EmoteSurprisedBoldIcon, EmoteSurprisedBold as SiEmoteSurprisedBold };
export default EmoteSurprisedBold;
export type { EmoteSurprisedBoldProps };
