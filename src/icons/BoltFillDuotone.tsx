import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoltFillDuotone = memo(
  forwardRef<SVGSVGElement, BoltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bolt-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 3c.95 0 1.65-.01 2.3.2a4 4 0 0 1 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04a4 4 0 0 1 0 1.62c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91a4 4 0 0 1-1.46.85c-.64.21-1.34.2-2.3.2H9.81c-.96 0-1.66.01-2.3-.2a4 4 0 0 1-1.46-.85c-.5-.46-.83-1.08-1.3-1.9l-1.8-3.2c-.45-.8-.8-1.4-.92-2.04a4 4 0 0 1 0-1.62c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91a4 4 0 0 1 1.46-.85c.64-.21 1.34-.2 2.3-.2zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

BoltFillDuotone.displayName = 'BoltFillDuotone';

// Triple export pattern (lucide-react style)
export { BoltFillDuotone, BoltFillDuotone as BoltFillDuotoneIcon, BoltFillDuotone as SiBoltFillDuotone };
export default BoltFillDuotone;
export type { BoltFillDuotoneProps };
