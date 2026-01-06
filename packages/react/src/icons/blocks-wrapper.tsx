import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BlocksIcon as RegularBlocksIcon } from './blocks';
import { BlocksIconDuotone as BlocksIconDuotone } from './blocks-duotone';
import { BlocksIconBold as BlocksIconBold } from './blocks-bold';
import { BlocksIconBoldDuotone as BlocksIconBoldDuotone } from './blocks-bold-duotone';
import { BlocksIconFill as BlocksIconFill } from './blocks-fill';
import { BlocksIconFillDuotone as BlocksIconFillDuotone } from './blocks-fill-duotone';

export interface BlocksIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BlocksIcon = memo(forwardRef<SVGSVGElement, BlocksIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BlocksIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BlocksIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BlocksIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BlocksIconFill ref={ref} {...props} />;
  if (duotone) return <BlocksIconDuotone ref={ref} {...props} />;
  return <RegularBlocksIcon ref={ref} {...props} />;
}));

BlocksIcon.displayName = 'BlocksIcon';

export { BlocksIcon };
