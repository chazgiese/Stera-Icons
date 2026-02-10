import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownFillProps = Omit<IconBaseProps, 'children'>;

const TriangleDownFill = memo(
  forwardRef<SVGSVGElement, TriangleDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down-fill" {...props}>
      <path fill="currentColor" d="M16.06 3q1.68-.02 2.74.06c.7.07 1.37.2 1.92.6a3.5 3.5 0 0 1 1.42 2.48c.08.68-.14 1.33-.44 1.97q-.46.95-1.31 2.4l-4.06 7.01q-.82 1.46-1.42 2.33c-.41.57-.87 1.08-1.49 1.36-.9.4-1.94.4-2.84 0a4 4 0 0 1-1.49-1.36q-.59-.87-1.42-2.33L3.61 10.5Q2.75 9.07 2.3 8.1c-.3-.63-.51-1.28-.44-1.96a3.5 3.5 0 0 1 1.42-2.47c.55-.4 1.22-.54 1.92-.6Q6.26 2.97 7.94 3z" />
    </IconBase>
  ))
);

TriangleDownFill.displayName = 'TriangleDownFill';

// Triple export pattern (lucide-react style)
export { TriangleDownFill, TriangleDownFill as TriangleDownFillIcon, TriangleDownFill as SiTriangleDownFill };
export default TriangleDownFill;
export type { TriangleDownFillProps };
