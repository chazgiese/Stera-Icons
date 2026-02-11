import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple-fill-duotone" {...props}>
      <path d="M21 14a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3zM21 7a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3z" opacity={0.4} />
        <path d="M7.97 12.41a1.5 1.5 0 1 1 2.06 2.18l-4.2 4a1.5 1.5 0 0 1-2.2-.16l-1.8-2.29a1.5 1.5 0 0 1 2.35-1.85l.78.99zM7.97 5.41a1.5 1.5 0 1 1 2.06 2.18l-4.2 4a1.5 1.5 0 0 1-2.2-.16l-1.8-2.29A1.5 1.5 0 0 1 4.17 7.3l.78.99z" />
    </IconBase>
  ))
);

ListCheckSimpleFillDuotone.displayName = 'ListCheckSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleFillDuotone, ListCheckSimpleFillDuotone as ListCheckSimpleFillDuotoneIcon, ListCheckSimpleFillDuotone as SiListCheckSimpleFillDuotone };
export default ListCheckSimpleFillDuotone;
export type { ListCheckSimpleFillDuotoneProps };
