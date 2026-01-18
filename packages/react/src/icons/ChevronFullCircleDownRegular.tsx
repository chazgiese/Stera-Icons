import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.48 9.5a1 1 0 0 1 .78 1.63l-3.48 4.34a1 1 0 0 1-1.56 0l-3.48-4.35a1 1 0 0 1 .78-1.62z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownRegular.displayName = 'ChevronFullCircleDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownRegular, ChevronFullCircleDownRegular as ChevronFullCircleDownRegularIcon, ChevronFullCircleDownRegular as SiChevronFullCircleDownRegular };
export type { ChevronFullCircleDownRegularProps };
