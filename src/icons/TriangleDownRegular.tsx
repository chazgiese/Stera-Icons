import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownRegularProps = Omit<IconBaseProps, 'children'>;

const TriangleDownRegular = memo(
  forwardRef<SVGSVGElement, TriangleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down" {...props}>
      <path fillRule="evenodd" d="M16.06 3.25q1.68-.02 2.71.06c.7.07 1.3.2 1.8.56a3.3 3.3 0 0 1 1.33 2.3c.06.6-.13 1.2-.42 1.83q-.45.93-1.3 2.38L16.1 17.4q-.82 1.45-1.4 2.3c-.4.57-.83 1.03-1.39 1.28-.84.37-1.8.37-2.64 0A3.5 3.5 0 0 1 9.3 19.7q-.58-.85-1.41-2.3l-4.06-7.02Q2.96 8.93 2.53 8a3.5 3.5 0 0 1-.43-1.84c.1-.91.58-1.75 1.32-2.29.5-.36 1.12-.5 1.8-.56q1.05-.07 2.72-.06zm-8.12 1.5c-1.16 0-1.97 0-2.58.06s-.9.16-1.05.27c-.4.3-.66.75-.71 1.24-.03.2.03.5.28 1.05.26.56.67 1.26 1.24 2.26l4.07 7.01c.57 1 .98 1.7 1.33 2.2s.59.69.77.77c.45.2.97.2 1.42 0 .18-.08.41-.27.77-.77.35-.5.76-1.2 1.33-2.2l4.06-7.01c.58-1 .99-1.7 1.25-2.26.25-.56.3-.85.28-1.05-.05-.5-.3-.94-.7-1.24-.17-.11-.45-.22-1.06-.27s-1.43-.06-2.58-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleDownRegular.displayName = 'TriangleDownRegular';

// Triple export pattern (lucide-react style)
export { TriangleDownRegular, TriangleDownRegular as TriangleDownRegularIcon, TriangleDownRegular as SiTriangleDownRegular };
export default TriangleDownRegular;
export type { TriangleDownRegularProps };
