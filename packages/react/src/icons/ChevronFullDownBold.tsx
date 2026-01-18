import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownBold = memo(
  forwardRef<SVGSVGElement, ChevronFullDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 8a1 1 0 0 1 .7 1.7l-7 7a1 1 0 0 1-1.4 0l-7-7A1 1 0 0 1 5 8zm-7 6.59L16.59 10H7.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownBold.displayName = 'ChevronFullDownBold';

// Triple export pattern (lucide-react style)
export { ChevronFullDownBold, ChevronFullDownBold as ChevronFullDownBoldIcon, ChevronFullDownBold as SiChevronFullDownBold };
export type { ChevronFullDownBoldProps };
