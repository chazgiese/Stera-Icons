import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple" {...props}>
      <path fill="currentColor" d="M7.48 12.96a.75.75 0 0 1 1.04 1.08l-4.2 4a.75.75 0 0 1-1.1-.08l-1.8-2.28a.75.75 0 0 1 1.17-.93l1.29 1.64zM22 14.75a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM7.48 5.96a.75.75 0 0 1 1.04 1.08l-4.2 4a.75.75 0 0 1-1.1-.08l-1.8-2.28a.75.75 0 0 1 1.17-.93l1.29 1.64zM22 7.75a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListCheckSimpleRegular.displayName = 'ListCheckSimpleRegular';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleRegular, ListCheckSimpleRegular as ListCheckSimpleRegularIcon, ListCheckSimpleRegular as SiListCheckSimpleRegular };
export default ListCheckSimpleRegular;
export type { ListCheckSimpleRegularProps };
