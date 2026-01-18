import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpFill = memo(
  forwardRef<SVGSVGElement, ArrowUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a1 1 0 0 1 .7.3l6 6A1 1 0 0 1 18 12h-5v7a1 1 0 0 1-2 0v-7H6a1 1 0 0 1-.7-1.7l6-6A1 1 0 0 1 12 4" />
    </IconBase>
  ))
);

ArrowUpFill.displayName = 'ArrowUpFill';

// Triple export pattern (lucide-react style)
export { ArrowUpFill, ArrowUpFill as ArrowUpFillIcon, ArrowUpFill as SiArrowUpFill };
export type { ArrowUpFillProps };
