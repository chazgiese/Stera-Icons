import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownRegular = memo(
  forwardRef<SVGSVGElement, EmoteFrownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown" {...props}>
      <path fill="currentColor" d="M12 13.75c1.88 0 3.55.9 4.6 2.3a.75.75 0 0 1-1.2.9 4.24 4.24 0 0 0-6.8 0 .75.75 0 0 1-1.2-.9 5.7 5.7 0 0 1 4.6-2.3M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownRegular.displayName = 'EmoteFrownRegular';

// Triple export pattern (lucide-react style)
export { EmoteFrownRegular, EmoteFrownRegular as EmoteFrownRegularIcon, EmoteFrownRegular as SiEmoteFrownRegular };
export default EmoteFrownRegular;
export type { EmoteFrownRegularProps };
