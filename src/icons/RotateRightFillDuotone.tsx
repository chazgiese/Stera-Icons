import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 4v2a7 7 0 1 0 7 7 1 1 0 1 1 2 0 9 9 0 1 1-9-9" opacity={.4} />
        <path fill="currentColor" d="M13.7.3A1 1 0 0 0 12 1v8a1 1 0 0 0 1.7.7l4-4a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotateRightFillDuotone.displayName = 'RotateRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightFillDuotone, RotateRightFillDuotone as RotateRightFillDuotoneIcon, RotateRightFillDuotone as SiRotateRightFillDuotone };
export default RotateRightFillDuotone;
export type { RotateRightFillDuotoneProps };
