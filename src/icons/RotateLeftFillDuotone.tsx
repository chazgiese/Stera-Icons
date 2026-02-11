import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-fill-duotone" {...props}>
      <path d="M12 5a8.5 8.5 0 1 1-8.5 8.5 1 1 0 1 1 2 0A6.5 6.5 0 1 0 12 7h-.5V5z" opacity={.4} />
        <path d="M9.8 1.8a1 1 0 0 1 1.7.7v7a1 1 0 0 1-1.7.7L6.3 6.7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftFillDuotone.displayName = 'RotateLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateLeftFillDuotone, RotateLeftFillDuotone as RotateLeftFillDuotoneIcon, RotateLeftFillDuotone as SiRotateLeftFillDuotone };
export default RotateLeftFillDuotone;
export type { RotateLeftFillDuotoneProps };
