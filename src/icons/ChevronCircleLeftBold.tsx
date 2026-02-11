import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left-bold" {...props}>
      <path d="M12.8 7.3a1 1 0 1 1 1.4 1.4L10.92 12l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleLeftBold.displayName = 'ChevronCircleLeftBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftBold, ChevronCircleLeftBold as ChevronCircleLeftBoldIcon, ChevronCircleLeftBold as SiChevronCircleLeftBold };
export default ChevronCircleLeftBold;
export type { ChevronCircleLeftBoldProps };
