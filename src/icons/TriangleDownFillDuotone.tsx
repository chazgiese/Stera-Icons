import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, TriangleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.73 4c1.38 0 2.34 0 3.06.07.73.06 1.04.19 1.21.31a2 2 0 0 1 .82 1.4c.02.22-.03.55-.33 1.21s-.78 1.5-1.46 2.7L15.3 16.2a38 38 0 0 1-1.6 2.66c-.42.6-.69.82-.88.9a2 2 0 0 1-1.64 0c-.19-.08-.46-.3-.88-.9s-.9-1.45-1.6-2.66L4.97 9.7a38 38 0 0 1-1.46-2.7c-.3-.66-.35-1-.33-1.2A2 2 0 0 1 4 4.39c.17-.13.48-.26 1.2-.32A38 38 0 0 1 8.28 4z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.73 2c1.34 0 2.41 0 3.24.08s1.6.23 2.2.68a4 4 0 0 1 1.64 2.8c.08.77-.15 1.5-.5 2.26q-.54 1.13-1.55 2.86l-3.72 6.52q-1 1.77-1.7 2.82c-.48.69-1 1.27-1.7 1.58a4 4 0 0 1-3.27 0c-.7-.3-1.23-.9-1.7-1.58-.5-.7-1.03-1.64-1.7-2.82l-3.73-6.52Q2.22 8.95 1.69 7.82a4.3 4.3 0 0 1-.5-2.25 4 4 0 0 1 1.63-2.8c.62-.46 1.38-.62 2.2-.7Q6.28 1.99 8.28 2zM8.27 4c-1.38 0-2.34 0-3.06.07-.73.06-1.04.19-1.21.31a2 2 0 0 0-.82 1.4c-.02.22.03.55.33 1.21s.78 1.5 1.46 2.7L8.7 16.2c.7 1.21 1.18 2.06 1.6 2.66s.69.82.88.9a2 2 0 0 0 1.64 0c.19-.08.46-.3.88-.9s.9-1.45 1.6-2.66l3.73-6.52c.68-1.2 1.16-2.04 1.46-2.7s.35-1 .33-1.2a2 2 0 0 0-.82-1.4c-.17-.13-.48-.26-1.2-.32C18.06 4 17.1 4 15.72 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleDownFillDuotone.displayName = 'TriangleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { TriangleDownFillDuotone, TriangleDownFillDuotone as TriangleDownFillDuotoneIcon, TriangleDownFillDuotone as SiTriangleDownFillDuotone };
export default TriangleDownFillDuotone;
export type { TriangleDownFillDuotoneProps };
