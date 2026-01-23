import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-bold-duotone" {...props}>
      <path d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 10.6 6l1.44 1.46A9 9 0 0 1 13 19.94V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M9 10.41V11a3 3 0 0 0 3.54 2.95l1.57 1.58A4.98 4.98 0 0 1 7 11V8.41zM20 10a1 1 0 0 1 1 1c0 1.54-.39 3-1.08 4.27a1 1 0 0 1-1.76-.95q.82-1.5.84-3.32a1 1 0 0 1 1-1M12 1a5 5 0 0 1 5 5v5.05a1 1 0 1 1-2 0V6a3 3 0 0 0-5.48-1.69 1 1 0 0 1-1.65-1.13A5 5 0 0 1 12 1" opacity={0.4} />
        <path fill="currentColor" d="M1.3 1.3a1 1 0 0 1 1.4 0l20 20a1 1 0 0 1-1.4 1.4l-20-20a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

MicOffBoldDuotone.displayName = 'MicOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { MicOffBoldDuotone, MicOffBoldDuotone as MicOffBoldDuotoneIcon, MicOffBoldDuotone as SiMicOffBoldDuotone };
export default MicOffBoldDuotone;
export type { MicOffBoldDuotoneProps };
