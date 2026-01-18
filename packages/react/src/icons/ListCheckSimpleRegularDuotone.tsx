import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 14.75a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM22 7.75a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M7.48 12.96a.75.75 0 0 1 1.04 1.08l-4.2 4a.75.75 0 0 1-1.1-.08l-1.8-2.28a.75.75 0 0 1 1.17-.93l1.29 1.64zM7.48 5.96a.75.75 0 0 1 1.04 1.08l-4.2 4a.75.75 0 0 1-1.1-.08l-1.8-2.28a.75.75 0 0 1 1.17-.93l1.29 1.64z" />
    </IconBase>
  ))
);

ListCheckSimpleRegularDuotone.displayName = 'ListCheckSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleRegularDuotone, ListCheckSimpleRegularDuotone as ListCheckSimpleRegularDuotoneIcon, ListCheckSimpleRegularDuotone as SiListCheckSimpleRegularDuotone };
export type { ListCheckSimpleRegularDuotoneProps };
