import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListContractIcon as RegularListContractIcon } from './list-contract';
import { ListContractIconDuotone as ListContractIconDuotone } from './list-contract-duotone';
import { ListContractIconBold as ListContractIconBold } from './list-contract-bold';
import { ListContractIconBoldDuotone as ListContractIconBoldDuotone } from './list-contract-bold-duotone';
import { ListContractIconFill as ListContractIconFill } from './list-contract-fill';
import { ListContractIconFillDuotone as ListContractIconFillDuotone } from './list-contract-fill-duotone';

export interface ListContractIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListContractIcon = memo(forwardRef<SVGSVGElement, ListContractIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListContractIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListContractIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListContractIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListContractIconFill ref={ref} {...props} />;
  if (duotone) return <ListContractIconDuotone ref={ref} {...props} />;
  return <RegularListContractIcon ref={ref} {...props} />;
}));

ListContractIcon.displayName = 'ListContractIcon';

export { ListContractIcon };
