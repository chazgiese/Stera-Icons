import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.3 15.7q.3.3.7.3H5a1 1 0 0 0 .7-.3L7.42 14h9.18z" opacity={.4} />
        <path fill="currentColor" d="M11.3 7.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4L12 9.42l-6.3 6.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ChevronFullUpBoldDuotone.displayName = 'ChevronFullUpBoldDuotone';

export { ChevronFullUpBoldDuotone };
export type { ChevronFullUpBoldDuotoneProps };
