import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeFillDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-fill-duotone" {...props}>
      <path d="M12.13 5.5v2H11a6 6 0 0 0 0 12H5.71A8 8 0 0 1 11 5.5zM19 16.5a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M20 19.5a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM16 1.63a3.9 3.9 0 0 1 3.88 3.87v4.75c0 1.1-.83 1.99-1.89 2.1l.01.15a2 2 0 1 1-4 0v-.14a2.1 2.1 0 0 1-1.87-2.11V5.5A3.9 3.9 0 0 1 16 1.63" />
    </IconBase>
  ))
);

MicroscopeFillDuotone.displayName = 'MicroscopeFillDuotone';

// Triple export pattern (lucide-react style)
export { MicroscopeFillDuotone, MicroscopeFillDuotone as MicroscopeFillDuotoneIcon, MicroscopeFillDuotone as SiMicroscopeFillDuotone };
export default MicroscopeFillDuotone;
export type { MicroscopeFillDuotoneProps };
