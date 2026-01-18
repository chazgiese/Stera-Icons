import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.8 5.8a1 1 0 1 0-1.4 1.4l3.79 3.8-3.8 3.8a1 1 0 1 0 1.42 1.4l4.5-4.5a1 1 0 0 0 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightFill.displayName = 'ChevronCircleRightFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightFill, ChevronCircleRightFill as ChevronCircleRightFillIcon, ChevronCircleRightFill as SiChevronCircleRightFill };
export type { ChevronCircleRightFillProps };
