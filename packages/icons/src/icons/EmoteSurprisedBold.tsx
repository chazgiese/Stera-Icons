import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedBold = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.75c1.8 0 3.25.44 3.25 1.75s-1.46 1.75-3.25 1.75c-1.8 0-3.25-.44-3.25-1.75s1.46-1.75 3.25-1.75M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedBold.displayName = 'EmoteSurprisedBold';

// Triple export pattern
export { EmoteSurprisedBold, EmoteSurprisedBold as EmoteSurprisedBoldIcon, EmoteSurprisedBold as SiEmoteSurprisedBold };
export default EmoteSurprisedBold;
export type { EmoteSurprisedBoldProps };
