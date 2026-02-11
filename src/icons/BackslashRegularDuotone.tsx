import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashRegularDuotone = memo(
  forwardRef<SVGSVGElement, BackslashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-duotone" {...props}>
      <path d="M19.56 19.5a.75.75 0 0 1-1.12 1l-7-8 1.12-1z" opacity={.4} />
        <path d="M4.5 3.44a.75.75 0 0 1 1.06.07l7 8-1.12.98-7-8a.75.75 0 0 1 .07-1.05" />
    </IconBase>
  ))
);

BackslashRegularDuotone.displayName = 'BackslashRegularDuotone';

// Triple export pattern (lucide-react style)
export { BackslashRegularDuotone, BackslashRegularDuotone as BackslashRegularDuotoneIcon, BackslashRegularDuotone as SiBackslashRegularDuotone };
export default BackslashRegularDuotone;
export type { BackslashRegularDuotoneProps };
