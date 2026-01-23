import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, TriangleDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down-duotone" {...props}>
      <path fill="currentColor" d="M15.73 2.25q2-.02 3.22.07a4 4 0 0 1 2.01.6.75.75 0 0 0-.8 1.26c-.24-.17-.6-.3-1.35-.36-.73-.07-1.7-.07-3.08-.07H8.27c-1.37 0-2.35 0-3.08.07-.74.07-1.11.2-1.34.36a.75.75 0 0 0-.88-1.22c.56-.4 1.26-.56 2.08-.64q1.22-.09 3.22-.07z" opacity={.4} />
        <path fill="currentColor" d="M2.97 2.96a.75.75 0 0 1 .88 1.22c-.52.37-.85.95-.92 1.58-.03.28.05.66.35 1.34.3.67.8 1.52 1.47 2.7l3.73 6.53c.7 1.21 1.19 2.07 1.62 2.69.43.61.72.87.98.99.59.26 1.25.26 1.84 0 .26-.12.55-.38.98-1 .43-.6.93-1.47 1.62-2.68l3.72-6.52c.69-1.2 1.17-2.04 1.48-2.71.3-.68.38-1.06.35-1.34-.07-.63-.4-1.2-.92-1.58a.75.75 0 1 1 .88-1.22 3.8 3.8 0 0 1 1.53 2.64 4 4 0 0 1-.48 2.12q-.52 1.1-1.53 2.83l-3.73 6.53c-.68 1.18-1.2 2.11-1.69 2.8a4 4 0 0 1-1.6 1.5c-.97.43-2.09.43-3.06 0a4 4 0 0 1-1.6-1.5c-.48-.69-1.01-1.62-1.69-2.8l-3.73-6.53q-1-1.72-1.53-2.83a4 4 0 0 1-.48-2.12 3.8 3.8 0 0 1 1.53-2.64" />
    </IconBase>
  ))
);

TriangleDownRegularDuotone.displayName = 'TriangleDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { TriangleDownRegularDuotone, TriangleDownRegularDuotone as TriangleDownRegularDuotoneIcon, TriangleDownRegularDuotone as SiTriangleDownRegularDuotone };
export default TriangleDownRegularDuotone;
export type { TriangleDownRegularDuotoneProps };
