import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, TriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-duotone" {...props}>
      <path fill="currentColor" d="M10.47 2.62a3.8 3.8 0 0 1 3.06 0 4 4 0 0 1 1.6 1.5c.48.69 1.01 1.62 1.69 2.8l3.73 6.53q1 1.72 1.53 2.83c.34.75.55 1.44.48 2.12a3.8 3.8 0 0 1-1.53 2.64.75.75 0 0 1-.88-1.22c.52-.37.85-.95.92-1.58.03-.28-.05-.66-.35-1.34a38 38 0 0 0-1.48-2.7l-3.72-6.53a39 39 0 0 0-1.61-2.69c-.44-.61-.73-.87-1-.99a2.3 2.3 0 0 0-1.83 0c-.26.12-.55.38-.98 1-.43.6-.93 1.47-1.62 2.68l-3.73 6.52a38 38 0 0 0-1.47 2.71c-.3.68-.38 1.06-.35 1.34.07.63.4 1.2.92 1.58a.75.75 0 0 1-.88 1.22 3.8 3.8 0 0 1-1.53-2.64 4 4 0 0 1 .48-2.12q.53-1.1 1.53-2.83l3.73-6.53c.68-1.18 1.2-2.11 1.69-2.8a4 4 0 0 1 1.6-1.5" />
        <path fill="currentColor" d="M20.15 19.82a.75.75 0 0 0 .81 1.26 4 4 0 0 1-2 .6q-1.23.09-3.23.07H8.27q-2 .02-3.22-.07a4 4 0 0 1-2.08-.64.75.75 0 0 0 .94-1.17l-.06-.05c.23.17.6.3 1.34.36a38 38 0 0 0 3.08.07h7.46a38 38 0 0 0 3.08-.07c.74-.07 1.11-.2 1.34-.36" opacity={.4} />
    </IconBase>
  ))
);

TriangleRegularDuotone.displayName = 'TriangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { TriangleRegularDuotone, TriangleRegularDuotone as TriangleRegularDuotoneIcon, TriangleRegularDuotone as SiTriangleRegularDuotone };
export default TriangleRegularDuotone;
export type { TriangleRegularDuotoneProps };
