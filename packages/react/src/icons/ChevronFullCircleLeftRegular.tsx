import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.88 7.74a1 1 0 0 1 1.62.78v6.96a1 1 0 0 1-1.62.78l-4.35-3.48a1 1 0 0 1 0-1.56z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleLeftRegular.displayName = 'ChevronFullCircleLeftRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftRegular, ChevronFullCircleLeftRegular as ChevronFullCircleLeftRegularIcon, ChevronFullCircleLeftRegular as SiChevronFullCircleLeftRegular };
export type { ChevronFullCircleLeftRegularProps };
