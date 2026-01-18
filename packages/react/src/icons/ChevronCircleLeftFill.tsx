import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m2.2 5.8a1 1 0 0 0-1.4 0l-4.5 4.5a1 1 0 0 0 0 1.4l4.5 4.5a1 1 0 1 0 1.4-1.4L10.42 12l3.8-3.8a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleLeftFill.displayName = 'ChevronCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftFill, ChevronCircleLeftFill as ChevronCircleLeftFillIcon, ChevronCircleLeftFill as SiChevronCircleLeftFill };
export type { ChevronCircleLeftFillProps };
