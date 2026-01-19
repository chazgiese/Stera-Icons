import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightBold = memo(
  forwardRef<SVGSVGElement, ChevronFullRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-right-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.62 4.08a1 1 0 0 1 1.09.21l7 7a1 1 0 0 1 0 1.42l-7 7A1 1 0 0 1 8 19V5a1 1 0 0 1 .62-.92M10 16.58 14.59 12 10 7.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullRightBold.displayName = 'ChevronFullRightBold';

// Triple export pattern (lucide-react style)
export { ChevronFullRightBold, ChevronFullRightBold as ChevronFullRightBoldIcon, ChevronFullRightBold as SiChevronFullRightBold };
export type { ChevronFullRightBoldProps };
