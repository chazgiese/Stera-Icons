import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-bold-duotone" {...props}>
      <path d="M4 11.03a1 1 0 0 1 1.22.72 7 7 0 0 0 9.72 4.6l1.48 1.49q-1.56.89-3.42 1.1V20h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-1.06a9 9 0 0 1-7.72-6.7 1 1 0 0 1 .72-1.2M18.78 11.75a1 1 0 0 1 1.94.5q-.4 1.48-1.22 2.72a1 1 0 0 1-1.66-1.1q.64-.97.94-2.12" opacity={0.4} />
        <path d="M9.03 10.45a3 3 0 0 0 2.52 2.52l1.84 1.83A5 5 0 0 1 7 10V8.41zM12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-.35 1.84 1 1 0 0 1-1.86-.74q.2-.5.21-1.1V7a3 3 0 0 0-5.39-1.82 1 1 0 0 1-1.59-1.21A5 5 0 0 1 12 2" opacity={0.4} />
        <path d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

MicOffBoldDuotone.displayName = 'MicOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { MicOffBoldDuotone, MicOffBoldDuotone as MicOffBoldDuotoneIcon, MicOffBoldDuotone as SiMicOffBoldDuotone };
export default MicOffBoldDuotone;
export type { MicOffBoldDuotoneProps };
