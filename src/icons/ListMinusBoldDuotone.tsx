import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-minus-bold-duotone" {...props}>
      <path d="M9 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM9 10a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M15 13.6a.9.9 0 0 0 0 1.8h5a.9.9 0 0 0 0-1.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ListMinusBoldDuotone.displayName = 'ListMinusBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListMinusBoldDuotone, ListMinusBoldDuotone as ListMinusBoldDuotoneIcon, ListMinusBoldDuotone as SiListMinusBoldDuotone };
export default ListMinusBoldDuotone;
export type { ListMinusBoldDuotoneProps };
