import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AstriskFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskFillDuotone = memo(
  forwardRef<SVGSVGElement, AstriskFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-fill-duotone" {...props}>
      <path d="M13.5 14.59V21a1.5 1.5 0 0 1-3 0v-6.41l1.5-.87zM2.91 6.75a1.5 1.5 0 0 1 2.05-.55l5.54 3.2v1.72L9 12 3.46 8.8a1.5 1.5 0 0 1-.55-2.04M19.05 6.2a1.5 1.5 0 0 1 1.5 2.6L15 12l-1.5-.88V9.4z" opacity={0.4} />
        <path d="M12 1.5c.83 0 1.5.67 1.5 1.5v8.13l7.05 4.07a1.5 1.5 0 0 1-1.5 2.6L12 13.71 4.96 17.8a1.5 1.5 0 0 1-1.5-2.6l7.04-4.06V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AstriskFillDuotone.displayName = 'AstriskFillDuotone';

// Triple export pattern (lucide-react style)
export { AstriskFillDuotone, AstriskFillDuotone as AstriskFillDuotoneIcon, AstriskFillDuotone as SiAstriskFillDuotone };
export default AstriskFillDuotone;
export type { AstriskFillDuotoneProps };
