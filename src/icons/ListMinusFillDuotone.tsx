import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, ListMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-minus-fill-duotone" {...props}>
      <path d="M9 14.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM9 9.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M15 13.6a.9.9 0 0 0 0 1.8h5a.9.9 0 0 0 0-1.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ListMinusFillDuotone.displayName = 'ListMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { ListMinusFillDuotone, ListMinusFillDuotone as ListMinusFillDuotoneIcon, ListMinusFillDuotone as SiListMinusFillDuotone };
export default ListMinusFillDuotone;
export type { ListMinusFillDuotoneProps };
