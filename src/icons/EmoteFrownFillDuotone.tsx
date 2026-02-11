import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteFrownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 11.25c-1.63 0-3.1.72-4.03 1.87a1 1 0 1 0 1.56 1.26A3.2 3.2 0 0 1 12 15.25c1.03 0 1.93.46 2.47 1.13a1 1 0 1 0 1.56-1.26A5.2 5.2 0 0 0 12 13.25m-3-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.25c1.63 0 3.1.72 4.03 1.87a1 1 0 1 1-1.56 1.26A3.2 3.2 0 0 0 12 15.25c-1.03 0-1.93.46-2.47 1.13a1 1 0 1 1-1.56-1.26A5.2 5.2 0 0 1 12 13.25M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteFrownFillDuotone.displayName = 'EmoteFrownFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteFrownFillDuotone, EmoteFrownFillDuotone as EmoteFrownFillDuotoneIcon, EmoteFrownFillDuotone as SiEmoteFrownFillDuotone };
export default EmoteFrownFillDuotone;
export type { EmoteFrownFillDuotoneProps };
