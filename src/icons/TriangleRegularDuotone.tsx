import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, TriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-duotone" {...props}>
      <path fill="currentColor" d="M16.06 19.25a.75.75 0 0 0 0 1.5H7.94a.75.75 0 0 0 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M10.68 3.02c.84-.37 1.8-.37 2.64 0 .56.25.98.71 1.38 1.28q.59.84 1.41 2.3l4.06 7.02q.86 1.45 1.3 2.38c.3.63.49 1.23.43 1.84-.1.91-.58 1.75-1.33 2.29-.5.36-1.1.5-1.8.56q-1.03.07-2.7.06a.75.75 0 0 1 0-1.5c1.14 0 1.96 0 2.57-.06s.9-.16 1.05-.27c.4-.3.66-.75.71-1.24.03-.2-.03-.5-.28-1.05-.26-.56-.67-1.26-1.25-2.26l-4.06-7.02c-.57-.99-.98-1.69-1.33-2.19s-.59-.69-.77-.77c-.45-.2-.97-.2-1.42 0-.18.08-.42.27-.77.77s-.76 1.2-1.33 2.2l-4.06 7.01c-.58 1-.99 1.7-1.25 2.26-.25.56-.3.85-.28 1.05.05.5.3.94.7 1.24.17.11.45.22 1.06.27s1.43.06 2.58.06a.75.75 0 0 1 0 1.5q-1.68.02-2.71-.06c-.7-.07-1.31-.2-1.8-.56a3.3 3.3 0 0 1-1.33-2.3c-.06-.6.13-1.2.42-1.83q.45-.93 1.3-2.38L7.9 6.6q.82-1.46 1.4-2.3c.4-.57.83-1.03 1.39-1.28" />
    </IconBase>
  ))
);

TriangleRegularDuotone.displayName = 'TriangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { TriangleRegularDuotone, TriangleRegularDuotone as TriangleRegularDuotoneIcon, TriangleRegularDuotone as SiTriangleRegularDuotone };
export default TriangleRegularDuotone;
export type { TriangleRegularDuotoneProps };
