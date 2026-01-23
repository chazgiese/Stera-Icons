import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListContractBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListContractBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListContractBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-contract-bold-duotone" {...props}>
      <path d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M18 14a1 1 0 0 1 .7.3l3 3a1 1 0 0 1-1.4 1.4L18 16.42l-2.3 2.3a1 1 0 0 1-1.4-1.42l3-3A1 1 0 0 1 18 14M20.3 5.3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L18 7.58z" />
    </IconBase>
  ))
);

ListContractBoldDuotone.displayName = 'ListContractBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListContractBoldDuotone, ListContractBoldDuotone as ListContractBoldDuotoneIcon, ListContractBoldDuotone as SiListContractBoldDuotone };
export default ListContractBoldDuotone;
export type { ListContractBoldDuotoneProps };
