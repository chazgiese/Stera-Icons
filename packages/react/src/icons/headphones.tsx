import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HeadphonesRegular } from './HeadphonesRegular';
import { HeadphonesRegularDuotone } from './HeadphonesRegularDuotone';
import { HeadphonesBold } from './HeadphonesBold';
import { HeadphonesBoldDuotone } from './HeadphonesBoldDuotone';
import { HeadphonesFill } from './HeadphonesFill';
import { HeadphonesFillDuotone } from './HeadphonesFillDuotone';

export interface HeadphonesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Headphones with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HeadphonesRegular } from 'stera-icons/HeadphonesRegular';
 */
const Headphones = memo(forwardRef<SVGSVGElement, HeadphonesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HeadphonesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HeadphonesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HeadphonesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HeadphonesFill ref={ref} {...rest} />;
  if (duotone) return <HeadphonesRegularDuotone ref={ref} {...rest} />;
  return <HeadphonesRegular ref={ref} {...rest} />;
}));

Headphones.displayName = 'Headphones';

export { Headphones };
