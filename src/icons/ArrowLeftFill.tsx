import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-fill" {...props}>
      <path d="M10.3 5.3A1 1 0 0 1 12 6v5h7a1 1 0 1 1 0 2h-7v5a1 1 0 0 1-1.7.7l-6-6a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowLeftFill.displayName = 'ArrowLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowLeftFill, ArrowLeftFill as ArrowLeftFillIcon, ArrowLeftFill as SiArrowLeftFill };
export default ArrowLeftFill;
export type { ArrowLeftFillProps };
