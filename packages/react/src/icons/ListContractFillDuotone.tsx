import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListContractFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListContractFillDuotone = memo(
  forwardRef<SVGSVGElement, ListContractFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M18 14a1 1 0 0 1 .7.3l3 3A1 1 0 0 1 21 19h-6a1 1 0 0 1-.7-1.7l3-3a1 1 0 0 1 .7-.3M21 5a1 1 0 0 1 .7 1.7l-3 3a1 1 0 0 1-1.4 0l-3-3A1 1 0 0 1 15 5z" />
    </IconBase>
  ))
);

ListContractFillDuotone.displayName = 'ListContractFillDuotone';

// Triple export pattern (lucide-react style)
export { ListContractFillDuotone, ListContractFillDuotone as ListContractFillDuotoneIcon, ListContractFillDuotone as SiListContractFillDuotone };
export type { ListContractFillDuotoneProps };
