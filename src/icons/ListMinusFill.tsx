import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListMinusFillProps = Omit<IconBaseProps, 'children'>;

const ListMinusFill = memo(
  forwardRef<SVGSVGElement, ListMinusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-minus-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M15 13.6a.9.9 0 0 0 0 1.8h5a.9.9 0 0 0 0-1.8z" clipRule="evenodd" />
        <path fill="currentColor" d="M9 14.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM9 9.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListMinusFill.displayName = 'ListMinusFill';

// Triple export pattern (lucide-react style)
export { ListMinusFill, ListMinusFill as ListMinusFillIcon, ListMinusFill as SiListMinusFill };
export default ListMinusFill;
export type { ListMinusFillProps };
