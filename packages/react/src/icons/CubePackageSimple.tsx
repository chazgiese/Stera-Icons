import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubePackageSimpleRegular } from './CubePackageSimpleRegular';
import { CubePackageSimpleRegularDuotone } from './CubePackageSimpleRegularDuotone';
import { CubePackageSimpleBold } from './CubePackageSimpleBold';
import { CubePackageSimpleBoldDuotone } from './CubePackageSimpleBoldDuotone';
import { CubePackageSimpleFill } from './CubePackageSimpleFill';
import { CubePackageSimpleFillDuotone } from './CubePackageSimpleFillDuotone';

export interface CubePackageSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CubePackageSimple with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CubePackageSimpleRegular } from 'stera-icons/CubePackageSimpleRegular';
 */
const CubePackageSimple = memo(forwardRef<SVGSVGElement, CubePackageSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubePackageSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubePackageSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubePackageSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubePackageSimpleFill ref={ref} {...rest} />;
  if (duotone) return <CubePackageSimpleRegularDuotone ref={ref} {...rest} />;
  return <CubePackageSimpleRegular ref={ref} {...rest} />;
}));

CubePackageSimple.displayName = 'CubePackageSimple';

export { CubePackageSimple };
