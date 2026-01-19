import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-bold" {...props}>
      <path fill="currentColor" d="M12 8.5a1 1 0 0 1 .7.3l4.5 4.5a1 1 0 1 1-1.4 1.4L12 10.92l-3.8 3.8a1 1 0 1 1-1.4-1.42l4.5-4.5a1 1 0 0 1 .7-.29" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpBold.displayName = 'ChevronCircleUpBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpBold, ChevronCircleUpBold as ChevronCircleUpBoldIcon, ChevronCircleUpBold as SiChevronCircleUpBold };
export type { ChevronCircleUpBoldProps };
