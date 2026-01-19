import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-bold" {...props}>
      <path fill="currentColor" d="M9.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 1 1-1.4-1.4l3.79-3.8-3.8-3.8a1 1 0 0 1 0-1.4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightBold.displayName = 'ChevronCircleRightBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightBold, ChevronCircleRightBold as ChevronCircleRightBoldIcon, ChevronCircleRightBold as SiChevronCircleRightBold };
export type { ChevronCircleRightBoldProps };
