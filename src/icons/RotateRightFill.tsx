import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateRightFill = memo(
  forwardRef<SVGSVGElement, RotateRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-fill" {...props}>
      <path d="M13.12 1.58a1 1 0 0 1 1.09.21l3.5 3.5a1 1 0 0 1 0 1.42l-3.5 3.5a1 1 0 0 1-1.71-.71V7H12a6.5 6.5 0 1 0 6.5 6.5 1 1 0 1 1 2 0A8.5 8.5 0 1 1 12 5h.5V2.5a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

RotateRightFill.displayName = 'RotateRightFill';

// Triple export pattern (lucide-react style)
export { RotateRightFill, RotateRightFill as RotateRightFillIcon, RotateRightFill as SiRotateRightFill };
export default RotateRightFill;
export type { RotateRightFillProps };
