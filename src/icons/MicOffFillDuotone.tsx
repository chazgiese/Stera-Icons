import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MicOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-fill-duotone" {...props}>
      <path d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 10.6 6l1.44 1.45a9 9 0 0 1-4.04 1.5V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 0 1 1-1M20 10a1 1 0 0 1 1 1c0 2.38-.93 4.54-2.44 6.15l-1.4-1.41A7 7 0 0 0 19 11a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M14.12 15.53A4.98 4.98 0 0 1 7 11V8.41zM12 1a5 5 0 0 1 5 5v5c0 1.28-.48 2.44-1.26 3.32L7.02 5.6A5 5 0 0 1 12 1" opacity={0.4} />
        <path fill="currentColor" d="M1.3 1.3a1 1 0 0 1 1.4 0l20 20a1 1 0 0 1-1.4 1.4l-20-20a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

MicOffFillDuotone.displayName = 'MicOffFillDuotone';

// Triple export pattern (lucide-react style)
export { MicOffFillDuotone, MicOffFillDuotone as MicOffFillDuotoneIcon, MicOffFillDuotone as SiMicOffFillDuotone };
export default MicOffFillDuotone;
export type { MicOffFillDuotoneProps };
