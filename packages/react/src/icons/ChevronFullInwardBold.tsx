import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullInwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardBold = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.7-1.7zM8.4 20h7.18L12 16.41zM18 2a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 2zm-6 5.59L15.59 4H8.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullInwardBold.displayName = 'ChevronFullInwardBold';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardBold, ChevronFullInwardBold as ChevronFullInwardBoldIcon, ChevronFullInwardBold as SiChevronFullInwardBold };
export type { ChevronFullInwardBoldProps };
