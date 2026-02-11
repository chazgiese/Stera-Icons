import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullOutwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardBold = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-outward-bold" {...props}>
      <path fillRule="evenodd" d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15zm-6 5.59L15.59 17H8.4zM11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7zM8.4 7h7.18L12 3.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullOutwardBold.displayName = 'ChevronFullOutwardBold';

// Triple export pattern (lucide-react style)
export { ChevronFullOutwardBold, ChevronFullOutwardBold as ChevronFullOutwardBoldIcon, ChevronFullOutwardBold as SiChevronFullOutwardBold };
export default ChevronFullOutwardBold;
export type { ChevronFullOutwardBoldProps };
