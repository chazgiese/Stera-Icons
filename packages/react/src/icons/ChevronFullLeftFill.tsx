import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.3 4.3A1 1 0 0 1 16 5v14a1 1 0 0 1-1.7.7l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronFullLeftFill.displayName = 'ChevronFullLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronFullLeftFill, ChevronFullLeftFill as ChevronFullLeftFillIcon, ChevronFullLeftFill as SiChevronFullLeftFill };
export type { ChevronFullLeftFillProps };
