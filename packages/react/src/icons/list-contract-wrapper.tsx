import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListContractIcon as RegularListContractIcon } from './list-contract';
import { ListContractIconBold } from './list-contract-bold';
import { ListContractIconFilled } from './list-contract-filled';
import { ListContractIconFilltone } from './list-contract-filltone';
import { ListContractIconLinetone } from './list-contract-linetone';

export interface ListContractIconProps extends IconProps {
  variant?: IconVariant;
}

const ListContractIcon = memo(forwardRef<SVGSVGElement, ListContractIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListContractIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListContractIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListContractIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListContractIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListContractIcon ref={ref} {...props} />;
  }
}));

ListContractIcon.displayName = 'ListContractIcon';

export { ListContractIcon };
