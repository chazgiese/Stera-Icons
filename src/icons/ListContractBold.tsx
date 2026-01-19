import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListContractBoldProps = Omit<IconBaseProps, 'children'>;

const ListContractBold = memo(
  forwardRef<SVGSVGElement, ListContractBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-contract-bold" {...props}>
      <path fill="currentColor" d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM18 14a1 1 0 0 1 .7.3l3 3a1 1 0 1 1-1.4 1.4L18 16.42l-2.3 2.3a1 1 0 1 1-1.4-1.42l3-3A1 1 0 0 1 18 14M11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM20.3 5.3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L18 7.58zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListContractBold.displayName = 'ListContractBold';

// Triple export pattern (lucide-react style)
export { ListContractBold, ListContractBold as ListContractBoldIcon, ListContractBold as SiListContractBold };
export type { ListContractBoldProps };
