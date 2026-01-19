import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullInwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardFill = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-inward-fill" {...props}>
      <path fill="currentColor" d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.7-1.7zM18 2a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 2z" />
    </IconBase>
  ))
);

ChevronFullInwardFill.displayName = 'ChevronFullInwardFill';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardFill, ChevronFullInwardFill as ChevronFullInwardFillIcon, ChevronFullInwardFill as SiChevronFullInwardFill };
export type { ChevronFullInwardFillProps };
