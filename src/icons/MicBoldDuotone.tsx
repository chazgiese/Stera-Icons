import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-bold-duotone" {...props}>
      <path d="M4 11.03a1 1 0 0 1 1.22.72 7 7 0 0 0 13.56 0 1 1 0 0 1 1.94.5 9 9 0 0 1-7.72 6.7V20h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-1.06a9 9 0 0 1-7.72-6.7 1 1 0 0 1 .72-1.2" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v3a3 3 0 1 0 6 0V7a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MicBoldDuotone.displayName = 'MicBoldDuotone';

// Triple export pattern (lucide-react style)
export { MicBoldDuotone, MicBoldDuotone as MicBoldDuotoneIcon, MicBoldDuotone as SiMicBoldDuotone };
export default MicBoldDuotone;
export type { MicBoldDuotoneProps };
