import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFill = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 11.75c-1.8 0-3.25.44-3.25 1.75s1.46 1.75 3.25 1.75c1.8 0 3.25-.44 3.25-1.75s-1.46-1.75-3.25-1.75m-3-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedFill.displayName = 'EmoteSurprisedFill';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedFill, EmoteSurprisedFill as EmoteSurprisedFillIcon, EmoteSurprisedFill as SiEmoteSurprisedFill };
export default EmoteSurprisedFill;
export type { EmoteSurprisedFillProps };
