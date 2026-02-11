import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffBoldProps = Omit<IconBaseProps, 'children'>;

const MicOffBold = memo(
  forwardRef<SVGSVGElement, MicOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-bold" {...props}>
      <path d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 1 1-1.4 1.4l-2.88-2.86a9 9 0 0 1-3.42 1.1V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06a9 9 0 0 1-7.72-6.7 1 1 0 0 1 1.94-.49 7 7 0 0 0 9.72 4.6l-1.55-1.55A5 5 0 0 1 7 10V8.41l-3.7-3.7a1 1 0 0 1 0-1.42m15.48 8.45a1 1 0 0 1 1.94.5q-.4 1.48-1.22 2.72a1 1 0 0 1-1.66-1.1q.64-.97.94-2.12m-9.75-1.3a3 3 0 0 0 2.52 2.52zM15 10V7a3 3 0 0 0-5.39-1.82 1 1 0 0 1-1.59-1.21A5 5 0 0 1 17 7v3a5 5 0 0 1-.35 1.84 1 1 0 0 1-1.86-.74q.2-.5.21-1.1" />
    </IconBase>
  ))
);

MicOffBold.displayName = 'MicOffBold';

// Triple export pattern (lucide-react style)
export { MicOffBold, MicOffBold as MicOffBoldIcon, MicOffBold as SiMicOffBold };
export default MicOffBold;
export type { MicOffBoldProps };
