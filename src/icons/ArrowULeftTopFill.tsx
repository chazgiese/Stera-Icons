import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-fill" {...props}>
      <path fill="currentColor" d="M5.3 2.3A1 1 0 0 1 7 3v3h8.5a7.5 7.5 0 0 1 0 15H8a1 1 0 0 1 0-2h7.5a5.5 5.5 0 1 0 0-11H7v3a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.17-1.19V6.5l.16-.2z" />
    </IconBase>
  ))
);

ArrowULeftTopFill.displayName = 'ArrowULeftTopFill';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopFill, ArrowULeftTopFill as ArrowULeftTopFillIcon, ArrowULeftTopFill as SiArrowULeftTopFill };
export default ArrowULeftTopFill;
export type { ArrowULeftTopFillProps };
