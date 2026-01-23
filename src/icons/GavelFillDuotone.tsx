import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GavelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GavelFillDuotone = memo(
  forwardRef<SVGSVGElement, GavelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gavel-fill-duotone" {...props}>
      <path fill="currentColor" d="M10.8 5.81q.06.1.16.2l4.6 4.6.19.15-1.08 1.08 5.66 5.66a2 2 0 0 1-2.83 2.82l-5.66-5.65-1.08 1.08q-.06-.1-.16-.2L6 10.95l-.19-.15z" opacity={.4} />
        <path fill="currentColor" d="M4.24 10.96a1.25 1.25 0 0 1 1.77 0l4.6 4.6c.48.48.48 1.27 0 1.76l-1.07 1.06c-.49.49-1.28.49-1.77 0l-4.6-4.6a1.25 1.25 0 0 1 0-1.76zM12.02 3.18a1.25 1.25 0 0 1 1.76 0l4.6 4.6c.49.48.49 1.27 0 1.76l-1.06 1.06c-.49.49-1.28.49-1.77 0L10.95 6a1.25 1.25 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

GavelFillDuotone.displayName = 'GavelFillDuotone';

// Triple export pattern (lucide-react style)
export { GavelFillDuotone, GavelFillDuotone as GavelFillDuotoneIcon, GavelFillDuotone as SiGavelFillDuotone };
export default GavelFillDuotone;
export type { GavelFillDuotoneProps };
