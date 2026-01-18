import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListExpandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListExpandFillDuotone = memo(
  forwardRef<SVGSVGElement, ListExpandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        <path fill="currentColor" d="M21 14.5a1 1 0 0 1 .7 1.7l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 .7-1.7zM18 4.5a1 1 0 0 1 .7.3l3 3a1 1 0 0 1-.7 1.7h-6a1 1 0 0 1-.7-1.7l3-3a1 1 0 0 1 .7-.3" />
    </IconBase>
  ))
);

ListExpandFillDuotone.displayName = 'ListExpandFillDuotone';

export { ListExpandFillDuotone };
export type { ListExpandFillDuotoneProps };
