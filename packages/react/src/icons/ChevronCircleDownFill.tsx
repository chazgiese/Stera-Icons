import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m5.2 8.8a1 1 0 0 0-1.4 0L12 13.58l-3.8-3.8a1 1 0 1 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownFill.displayName = 'ChevronCircleDownFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownFill, ChevronCircleDownFill as ChevronCircleDownFillIcon, ChevronCircleDownFill as SiChevronCircleDownFill };
export type { ChevronCircleDownFillProps };
