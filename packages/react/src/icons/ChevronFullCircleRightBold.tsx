import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.25 8.52a1.25 1.25 0 0 1 2.03-.98l4.35 3.48c.63.5.63 1.46 0 1.96l-4.35 3.48c-.82.65-2.03.07-2.03-.98z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightBold.displayName = 'ChevronFullCircleRightBold';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightBold, ChevronFullCircleRightBold as ChevronFullCircleRightBoldIcon, ChevronFullCircleRightBold as SiChevronFullCircleRightBold };
export type { ChevronFullCircleRightBoldProps };
