import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListContractFillProps = Omit<IconBaseProps, 'children'>;

const ListContractFill = memo(
  forwardRef<SVGSVGElement, ListContractFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM18 14a1 1 0 0 1 .7.3l3 3A1 1 0 0 1 21 19h-6a1 1 0 0 1-.7-1.7l3-3a1 1 0 0 1 .7-.3M11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 0 1 .7 1.7l-3 3a1 1 0 0 1-1.4 0l-3-3A1 1 0 0 1 15 5zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListContractFill.displayName = 'ListContractFill';

// Triple export pattern (lucide-react style)
export { ListContractFill, ListContractFill as ListContractFillIcon, ListContractFill as SiListContractFill };
export type { ListContractFillProps };
