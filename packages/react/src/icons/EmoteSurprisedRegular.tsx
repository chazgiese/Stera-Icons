import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSurprisedRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedRegular = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 13.75a8 8 0 0 1 2.93.46q.6.26.95.69.37.45.37 1.1t-.37 1.1-.95.7a8 8 0 0 1-2.93.45 8 8 0 0 1-2.93-.46 2.4 2.4 0 0 1-.95-.69q-.37-.45-.37-1.1t.37-1.1q.36-.44.95-.7a8 8 0 0 1 2.93-.45M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedRegular.displayName = 'EmoteSurprisedRegular';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedRegular, EmoteSurprisedRegular as EmoteSurprisedRegularIcon, EmoteSurprisedRegular as SiEmoteSurprisedRegular };
export type { EmoteSurprisedRegularProps };
