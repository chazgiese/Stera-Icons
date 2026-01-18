import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WifiRegular } from './WifiRegular';
import { WifiRegularDuotone } from './WifiRegularDuotone';
import { WifiBold } from './WifiBold';
import { WifiBoldDuotone } from './WifiBoldDuotone';
import { WifiFill } from './WifiFill';
import { WifiFillDuotone } from './WifiFillDuotone';

export interface WifiProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Wifi with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { WifiRegular } from 'stera-icons/WifiRegular';
 */
const Wifi = memo(forwardRef<SVGSVGElement, WifiProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WifiBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WifiBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WifiFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WifiFill ref={ref} {...rest} />;
  if (duotone) return <WifiRegularDuotone ref={ref} {...rest} />;
  return <WifiRegular ref={ref} {...rest} />;
}));

Wifi.displayName = 'Wifi';

export { Wifi };
