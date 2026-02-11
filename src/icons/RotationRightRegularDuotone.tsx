import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-duotone" {...props}>
      <path d="M17.99 7.08a.75.75 0 0 0-1.16.95A6.25 6.25 0 0 1 12 18.25h-1.19l-.75.75.75.75h1.47a7.75 7.75 0 0 0 5.7-12.67M11.73 4.25a7.75 7.75 0 0 0-5.7 12.69.75.75 0 0 0 1.16-.96 6.25 6.25 0 0 1 4.59-10.23h1.41l.75-.75-.75-.75h-1.46" opacity={0.4} />
        <path d="M12.53 15.47a.75.75 0 0 0-1.06 0l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L10.06 19l2.47-2.47c.3-.3.3-.77 0-1.06M12.53 1.47a.75.75 0 1 0-1.06 1.06L13.94 5l-2.47 2.47a.75.75 0 0 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotationRightRegularDuotone.displayName = 'RotationRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightRegularDuotone, RotationRightRegularDuotone as RotationRightRegularDuotoneIcon, RotationRightRegularDuotone as SiRotationRightRegularDuotone };
export default RotationRightRegularDuotone;
export type { RotationRightRegularDuotoneProps };
