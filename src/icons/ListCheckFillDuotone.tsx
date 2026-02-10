import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-fill-duotone" {...props}>
      <path d="M21 16.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M6.09 15.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13l-1.2-1.72a1.25 1.25 0 0 1 2.04-1.43l.32.45zM6.09 9.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13l-1.2-1.72a1.25 1.25 0 0 1 2.04-1.43l.32.45zM6.09 3.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13L1.98 6.5a1.25 1.25 0 0 1 2.04-1.43l.32.45z" />
    </IconBase>
  ))
);

ListCheckFillDuotone.displayName = 'ListCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckFillDuotone, ListCheckFillDuotone as ListCheckFillDuotoneIcon, ListCheckFillDuotone as SiListCheckFillDuotone };
export default ListCheckFillDuotone;
export type { ListCheckFillDuotoneProps };
