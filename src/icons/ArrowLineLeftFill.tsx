import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-left-fill" {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M12.7 5.24a1.2 1.2 0 0 1 2.05.85V11H21a1 1 0 1 1 0 2h-6.25v4.91a1.2 1.2 0 0 1-2.05.85l-5.86-5.85c-.5-.5-.5-1.32 0-1.82z" />
    </IconBase>
  ))
);

ArrowLineLeftFill.displayName = 'ArrowLineLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftFill, ArrowLineLeftFill as ArrowLineLeftFillIcon, ArrowLineLeftFill as SiArrowLineLeftFill };
export default ArrowLineLeftFill;
export type { ArrowLineLeftFillProps };
