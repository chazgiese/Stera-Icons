import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.5 14a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 0 1 0-3zM21.5 7a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 1 1 0-3z" />
        <path fill="currentColor" d="M5 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM5 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ListSimpleFillDuotone.displayName = 'ListSimpleFillDuotone';

export { ListSimpleFillDuotone };
export type { ListSimpleFillDuotoneProps };
