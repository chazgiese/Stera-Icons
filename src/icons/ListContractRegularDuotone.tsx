import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListContractRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListContractRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListContractRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-contract-duotone" {...props}>
      <path d="M11 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM11 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM11 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M18 14.25q.31 0 .53.22l3 3a.75.75 0 0 1-1.06 1.06L18 16.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.8.8 0 0 1 .53-.22M20.47 5.47a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L18 7.94z" />
    </IconBase>
  ))
);

ListContractRegularDuotone.displayName = 'ListContractRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListContractRegularDuotone, ListContractRegularDuotone as ListContractRegularDuotoneIcon, ListContractRegularDuotone as SiListContractRegularDuotone };
export type { ListContractRegularDuotoneProps };
