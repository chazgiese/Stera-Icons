import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFill = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple-fill" {...props}>
      <path d="M7.97 12.41a1.5 1.5 0 1 1 2.06 2.18l-4.2 4a1.5 1.5 0 0 1-2.2-.16l-1.8-2.29a1.5 1.5 0 0 1 2.35-1.85l.78.99zM21 14a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3zM7.97 5.41a1.5 1.5 0 1 1 2.06 2.18l-4.2 4a1.5 1.5 0 0 1-2.2-.16l-1.8-2.29A1.5 1.5 0 0 1 4.17 7.3l.78.99zM21 7a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ListCheckSimpleFill.displayName = 'ListCheckSimpleFill';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleFill, ListCheckSimpleFill as ListCheckSimpleFillIcon, ListCheckSimpleFill as SiListCheckSimpleFill };
export default ListCheckSimpleFill;
export type { ListCheckSimpleFillProps };
