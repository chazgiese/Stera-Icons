import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusBoldProps = Omit<IconBaseProps, 'children'>;

const ListMinusBold = memo(
  forwardRef<SVGSVGElement, ListMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-minus-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M15 13.6a.9.9 0 0 0 0 1.8h5a.9.9 0 0 0 0-1.8z" clipRule="evenodd" />
        <path fill="currentColor" d="M9 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM9 10a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListMinusBold.displayName = 'ListMinusBold';

// Triple export pattern (lucide-react style)
export { ListMinusBold, ListMinusBold as ListMinusBoldIcon, ListMinusBold as SiListMinusBold };
export default ListMinusBold;
export type { ListMinusBoldProps };
