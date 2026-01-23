import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFill = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 13c-2.2 0-4 .5-4 2s1.8 2 4 2 4-.5 4-2-1.8-2-4-2M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedFill.displayName = 'EmoteSurprisedFill';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedFill, EmoteSurprisedFill as EmoteSurprisedFillIcon, EmoteSurprisedFill as SiEmoteSurprisedFill };
export default EmoteSurprisedFill;
export type { EmoteSurprisedFillProps };
