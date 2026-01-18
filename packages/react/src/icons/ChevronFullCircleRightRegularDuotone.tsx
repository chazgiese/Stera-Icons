import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 8.52a1 1 0 0 1 1.63-.78l4.34 3.48a1 1 0 0 1 0 1.56l-4.35 3.48a1 1 0 0 1-1.62-.78z" />
    </IconBase>
  ))
);

ChevronFullCircleRightRegularDuotone.displayName = 'ChevronFullCircleRightRegularDuotone';

export { ChevronFullCircleRightRegularDuotone };
export type { ChevronFullCircleRightRegularDuotoneProps };
