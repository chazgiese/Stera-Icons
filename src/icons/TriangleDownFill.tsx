import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TriangleDownFillProps = Omit<IconBaseProps, 'children'>;

const TriangleDownFill = memo(
  forwardRef<SVGSVGElement, TriangleDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down-fill" {...props}>
      <path fill="currentColor" d="M15.73 2c1.34 0 2.41 0 3.24.08s1.6.23 2.2.68a4 4 0 0 1 1.64 2.8c.08.77-.15 1.5-.5 2.26q-.27.57-.65 1.28l-.9 1.58-3.72 6.52q-1 1.77-1.7 2.82c-.48.69-1 1.27-1.7 1.58a4 4 0 0 1-3.27 0c-.7-.3-1.23-.9-1.7-1.58-.5-.7-1.03-1.64-1.7-2.82l-3.73-6.52Q2.22 8.95 1.69 7.82a4.3 4.3 0 0 1-.5-2.25 4 4 0 0 1 1.63-2.8c.62-.46 1.38-.62 2.2-.7Q6.28 1.99 8.28 2z" />
    </IconBase>
  ))
);

TriangleDownFill.displayName = 'TriangleDownFill';

// Triple export pattern (lucide-react style)
export { TriangleDownFill, TriangleDownFill as TriangleDownFillIcon, TriangleDownFill as SiTriangleDownFill };
export default TriangleDownFill;
export type { TriangleDownFillProps };
