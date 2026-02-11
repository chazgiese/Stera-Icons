import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownRegular = memo(
  forwardRef<SVGSVGElement, EmoteFrownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown" {...props}>
      <path d="M12 13.5c1.55 0 2.95.69 3.83 1.78a.75.75 0 0 1-1.16.94A3.4 3.4 0 0 0 12 15c-1.1 0-2.07.5-2.67 1.22a.75.75 0 0 1-1.16-.94A5 5 0 0 1 12 13.5M9 8.38a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76M15 8.38a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownRegular.displayName = 'EmoteFrownRegular';

// Triple export pattern (lucide-react style)
export { EmoteFrownRegular, EmoteFrownRegular as EmoteFrownRegularIcon, EmoteFrownRegular as SiEmoteFrownRegular };
export default EmoteFrownRegular;
export type { EmoteFrownRegularProps };
