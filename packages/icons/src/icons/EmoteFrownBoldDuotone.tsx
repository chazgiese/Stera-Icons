import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteFrownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.25c1.63 0 3.1.72 4.03 1.87.34.43.28 1.06-.15 1.4-.43.35-1.06.29-1.4-.14-.55-.67-1.45-1.13-2.48-1.13s-1.93.46-2.47 1.13c-.35.43-.98.5-1.41.15s-.5-.98-.15-1.41c.94-1.15 2.4-1.87 4.03-1.87M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteFrownBoldDuotone.displayName = 'EmoteFrownBoldDuotone';

// Triple export pattern
export { EmoteFrownBoldDuotone, EmoteFrownBoldDuotone as EmoteFrownBoldDuotoneIcon, EmoteFrownBoldDuotone as SiEmoteFrownBoldDuotone };
export default EmoteFrownBoldDuotone;
export type { EmoteFrownBoldDuotoneProps };
