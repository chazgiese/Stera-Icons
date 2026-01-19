import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronRightFill = memo(
  forwardRef<SVGSVGElement, ChevronRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-right-fill" {...props}>
      <path fill="currentColor" d="M8.62 4.08a1 1 0 0 1 1.09.21l7 7a1 1 0 0 1 0 1.42l-7 7A1 1 0 0 1 8 19V5l.01-.15a1 1 0 0 1 .6-.77" />
    </IconBase>
  ))
);

ChevronRightFill.displayName = 'ChevronRightFill';

// Triple export pattern (lucide-react style)
export { ChevronRightFill, ChevronRightFill as ChevronRightFillIcon, ChevronRightFill as SiChevronRightFill };
export type { ChevronRightFillProps };
