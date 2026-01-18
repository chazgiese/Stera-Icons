import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.22 8.53a1 1 0 0 1 1.56 0l3.48 4.35a1 1 0 0 1-.78 1.62H8.52a1 1 0 0 1-.78-1.62z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpRegular.displayName = 'ChevronFullCircleUpRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpRegular, ChevronFullCircleUpRegular as ChevronFullCircleUpRegularIcon, ChevronFullCircleUpRegular as SiChevronFullCircleUpRegular };
export type { ChevronFullCircleUpRegularProps };
