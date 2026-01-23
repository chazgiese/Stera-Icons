import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple-fill-duotone" {...props}>
      <path d="M22 14a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3zM22 7a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M6.97 12.41a1.5 1.5 0 1 1 2.06 2.18l-4.2 4a1.5 1.5 0 0 1-2.2-.16l-1.8-2.29a1.5 1.5 0 0 1 2.35-1.85l.78.99zM6.97 5.41A1.5 1.5 0 1 1 9.03 7.6l-4.2 4a1.5 1.5 0 0 1-2.2-.16L.82 9.14A1.5 1.5 0 0 1 3.17 7.3l.78.99z" />
    </IconBase>
  ))
);

ListCheckSimpleFillDuotone.displayName = 'ListCheckSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleFillDuotone, ListCheckSimpleFillDuotone as ListCheckSimpleFillDuotoneIcon, ListCheckSimpleFillDuotone as SiListCheckSimpleFillDuotone };
export default ListCheckSimpleFillDuotone;
export type { ListCheckSimpleFillDuotoneProps };
