import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GavelFillProps = Omit<IconBaseProps, 'children'>;

const GavelFill = memo(
  forwardRef<SVGSVGElement, GavelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gavel-fill" {...props}>
      <path d="m15.73 11.48-.7.71 5.3 5.3a2 2 0 0 1-2.83 2.83l-5.3-5.3-.71.7-5.66-5.65 4.24-4.24zM3.7 11.13a1.25 1.25 0 0 1 1.78 0l4.95 4.95c.48.49.48 1.28 0 1.77l-.89.88c-.49.5-1.28.5-1.77 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.76zM12.02 2.82a1.25 1.25 0 0 1 1.76 0l4.95 4.95c.5.5.5 1.28 0 1.77l-.88.88c-.49.5-1.28.5-1.77 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

GavelFill.displayName = 'GavelFill';

// Triple export pattern (lucide-react style)
export { GavelFill, GavelFill as GavelFillIcon, GavelFill as SiGavelFill };
export default GavelFill;
export type { GavelFillProps };
