import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateRightFill = memo(
  forwardRef<SVGSVGElement, RotateRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-fill" {...props}>
      <path fill="currentColor" d="M13.53.47a.75.75 0 0 0-1.28.53v3H12a9 9 0 1 0 9 9 1 1 0 0 0-2 0 7 7 0 1 1-7-7h.25v3a.75.75 0 0 0 1.28.53l4-4c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotateRightFill.displayName = 'RotateRightFill';

// Triple export pattern (lucide-react style)
export { RotateRightFill, RotateRightFill as RotateRightFillIcon, RotateRightFill as SiRotateRightFill };
export default RotateRightFill;
export type { RotateRightFillProps };
