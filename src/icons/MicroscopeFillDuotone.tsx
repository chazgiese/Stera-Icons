import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeFillDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-fill-duotone" {...props}>
      <path d="M12 8h-.5a6.5 6.5 0 1 0 0 13H6.03A8.5 8.5 0 0 1 11.5 6h.5zM19 17a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M20 21a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM16 1a4 4 0 0 1 4 4v5.75c0 1.16-.88 2.11-2 2.24V13a2 2 0 1 1-4 0v-.01a2.25 2.25 0 0 1-2-2.24V5a4 4 0 0 1 4-4" />
    </IconBase>
  ))
);

MicroscopeFillDuotone.displayName = 'MicroscopeFillDuotone';

// Triple export pattern (lucide-react style)
export { MicroscopeFillDuotone, MicroscopeFillDuotone as MicroscopeFillDuotoneIcon, MicroscopeFillDuotone as SiMicroscopeFillDuotone };
export default MicroscopeFillDuotone;
export type { MicroscopeFillDuotoneProps };
