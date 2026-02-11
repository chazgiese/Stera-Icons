import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListPlusFillProps = Omit<IconBaseProps, 'children'>;

const ListPlusFill = memo(
  forwardRef<SVGSVGElement, ListPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-plus-fill" {...props}>
      <path fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2.1c-.5 0-.9.4-.9.9v1.6H15a.9.9 0 0 0 0 1.8h1.6V17a.9.9 0 0 0 1.8 0v-1.6H20a.9.9 0 0 0 0-1.8h-1.6V12c0-.5-.4-.9-.9-.9" clipRule="evenodd" />
        <path d="M9 14.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM9 9.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListPlusFill.displayName = 'ListPlusFill';

// Triple export pattern (lucide-react style)
export { ListPlusFill, ListPlusFill as ListPlusFillIcon, ListPlusFill as SiListPlusFill };
export default ListPlusFill;
export type { ListPlusFillProps };
