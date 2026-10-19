import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteFrownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 11.63c-1.59 0-3.02.7-3.93 1.82-.3.37-.25.92.13 1.23.37.3.92.25 1.23-.13.57-.7 1.5-1.18 2.57-1.18s2 .48 2.57 1.18c.3.38.86.43 1.23.13.38-.3.43-.86.13-1.23-.91-1.12-2.34-1.82-3.93-1.82M9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.38c1.59 0 3.02.7 3.93 1.82.3.37.25.92-.13 1.23-.37.3-.92.25-1.23-.13-.57-.7-1.5-1.18-2.57-1.18s-2 .48-2.57 1.18c-.3.38-.86.43-1.23.13-.38-.3-.43-.86-.13-1.23.91-1.12 2.34-1.82 3.93-1.82M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteFrownFillDuotone.displayName = 'EmoteFrownFillDuotone';

// Triple export pattern
export { EmoteFrownFillDuotone, EmoteFrownFillDuotone as EmoteFrownFillDuotoneIcon, EmoteFrownFillDuotone as SiEmoteFrownFillDuotone };
export default EmoteFrownFillDuotone;
export type { EmoteFrownFillDuotoneProps };
