import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicFillDuotone = memo(
  forwardRef<SVGSVGElement, MicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-fill-duotone" {...props}>
      <path d="M4 11.03a1 1 0 0 1 1.22.72 7 7 0 0 0 13.56 0 1 1 0 0 1 1.94.5 9 9 0 0 1-7.72 6.7V20h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-1.06a9 9 0 0 1-7.72-6.7 1 1 0 0 1 .72-1.2" opacity={.4} />
        <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5" />
    </IconBase>
  ))
);

MicFillDuotone.displayName = 'MicFillDuotone';

// Triple export pattern (lucide-react style)
export { MicFillDuotone, MicFillDuotone as MicFillDuotoneIcon, MicFillDuotone as SiMicFillDuotone };
export default MicFillDuotone;
export type { MicFillDuotoneProps };
