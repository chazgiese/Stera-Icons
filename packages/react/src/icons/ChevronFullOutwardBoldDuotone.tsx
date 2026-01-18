import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullOutwardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15zm-6 5.59L15.59 17H8.4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7zM8.4 7h7.18L12 3.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullOutwardBoldDuotone.displayName = 'ChevronFullOutwardBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullOutwardBoldDuotone, ChevronFullOutwardBoldDuotone as ChevronFullOutwardBoldDuotoneIcon, ChevronFullOutwardBoldDuotone as SiChevronFullOutwardBoldDuotone };
export type { ChevronFullOutwardBoldDuotoneProps };
