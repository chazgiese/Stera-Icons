import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple" {...props}>
      <path d="M8.48 12.96a.75.75 0 0 1 1.04 1.08l-4.2 4a.75.75 0 0 1-1.1-.08l-1.8-2.28a.75.75 0 0 1 1.17-.93l1.29 1.64zM21 14.75a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM8.48 5.96a.75.75 0 0 1 1.04 1.08l-4.2 4a.75.75 0 0 1-1.1-.08l-1.8-2.28a.75.75 0 0 1 1.17-.93l1.29 1.64zM21 7.75a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListCheckSimpleRegular.displayName = 'ListCheckSimpleRegular';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleRegular, ListCheckSimpleRegular as ListCheckSimpleRegularIcon, ListCheckSimpleRegular as SiListCheckSimpleRegular };
export default ListCheckSimpleRegular;
export type { ListCheckSimpleRegularProps };
