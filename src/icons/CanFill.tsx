import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanFillProps = Omit<IconBaseProps, 'children'>;

const CanFill = memo(
  forwardRef<SVGSVGElement, CanFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-fill" {...props}>
      <path fill="currentColor" d="M17.5 2a1 1 0 0 1 .21 1.98l.76 1.33A4 4 0 0 1 19 7.3v9.4a4 4 0 0 1-.53 1.99l-1.31 2.3A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.74-1l-1.31-2.31A4 4 0 0 1 5 16.7V7.3a4 4 0 0 1 .53-1.99l.76-1.33A1 1 0 0 1 6.5 2z" />
    </IconBase>
  ))
);

CanFill.displayName = 'CanFill';

// Triple export pattern (lucide-react style)
export { CanFill, CanFill as CanFillIcon, CanFill as SiCanFill };
export default CanFill;
export type { CanFillProps };
