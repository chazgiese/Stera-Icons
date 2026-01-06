import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToyBrickIcon as RegularToyBrickIcon } from './toy-brick';
import { ToyBrickIconDuotone as ToyBrickIconDuotone } from './toy-brick-duotone';
import { ToyBrickIconBold as ToyBrickIconBold } from './toy-brick-bold';
import { ToyBrickIconBoldDuotone as ToyBrickIconBoldDuotone } from './toy-brick-bold-duotone';
import { ToyBrickIconFill as ToyBrickIconFill } from './toy-brick-fill';
import { ToyBrickIconFillDuotone as ToyBrickIconFillDuotone } from './toy-brick-fill-duotone';

export interface ToyBrickIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ToyBrickIcon = memo(forwardRef<SVGSVGElement, ToyBrickIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToyBrickIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ToyBrickIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ToyBrickIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ToyBrickIconFill ref={ref} {...props} />;
  if (duotone) return <ToyBrickIconDuotone ref={ref} {...props} />;
  return <RegularToyBrickIcon ref={ref} {...props} />;
}));

ToyBrickIcon.displayName = 'ToyBrickIcon';

export { ToyBrickIcon };
