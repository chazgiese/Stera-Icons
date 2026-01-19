import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-fill" {...props}>
      <path fill="currentColor" d="M9 5a1 1 0 0 0-.7 1.7l3.79 3.8-6.8 6.8a1 1 0 1 0 1.42 1.4l6.79-6.79 3.8 3.8A1 1 0 0 0 19 15V6a1 1 0 0 0-1-1z" />
    </IconBase>
  ))
);

ArrowUpRightFill.displayName = 'ArrowUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowUpRightFill, ArrowUpRightFill as ArrowUpRightFillIcon, ArrowUpRightFill as SiArrowUpRightFill };
export type { ArrowUpRightFillProps };
