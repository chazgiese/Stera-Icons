import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.5 5v2H12a6.5 6.5 0 1 0 6.5 6.5 1 1 0 1 1 2 0A8.5 8.5 0 1 1 12 5z" opacity={.4} />
        <path fill="currentColor" d="M13.12 1.58a1 1 0 0 1 1.09.21l3.5 3.5a1 1 0 0 1 0 1.42l-3.5 3.5a1 1 0 0 1-1.71-.71v-7a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

RotateRightFillDuotone.displayName = 'RotateRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightFillDuotone, RotateRightFillDuotone as RotateRightFillDuotoneIcon, RotateRightFillDuotone as SiRotateRightFillDuotone };
export default RotateRightFillDuotone;
export type { RotateRightFillDuotoneProps };
