import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 5a1 1 0 0 1 .7 1.7l-3.79 3.8 6.8 6.8a1 1 0 1 1-1.42 1.4l-6.79-6.79-3.8 3.8A1 1 0 0 1 5 15V6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftFill.displayName = 'ArrowUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftFill, ArrowUpLeftFill as ArrowUpLeftFillIcon, ArrowUpLeftFill as SiArrowUpLeftFill };
export type { ArrowUpLeftFillProps };
