import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFill = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 12c-1.8 0-3.25.44-3.25 1.75s1.46 1.75 3.25 1.75c1.8 0 3.25-.44 3.25-1.75s-1.46-1.75-3.25-1.75m-3-5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedFill.displayName = 'EmoteSurprisedFill';

// Triple export pattern
export { EmoteSurprisedFill, EmoteSurprisedFill as EmoteSurprisedFillIcon, EmoteSurprisedFill as SiEmoteSurprisedFill };
export default EmoteSurprisedFill;
export type { EmoteSurprisedFillProps };
