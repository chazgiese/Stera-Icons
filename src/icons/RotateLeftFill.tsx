import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFill = memo(
  forwardRef<SVGSVGElement, RotateLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-fill" {...props}>
      <path fill="currentColor" d="M9.8 1.8a1 1 0 0 1 1.7.7V5h.5a8.5 8.5 0 1 1-8.5 8.5 1 1 0 1 1 2 0A6.5 6.5 0 1 0 12 7h-.5v2.5a1 1 0 0 1-1.7.7L6.3 6.7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftFill.displayName = 'RotateLeftFill';

// Triple export pattern (lucide-react style)
export { RotateLeftFill, RotateLeftFill as RotateLeftFillIcon, RotateLeftFill as SiRotateLeftFill };
export default RotateLeftFill;
export type { RotateLeftFillProps };
