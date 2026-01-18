import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FileCabinetRegular } from './FileCabinetRegular';
import { FileCabinetRegularDuotone } from './FileCabinetRegularDuotone';
import { FileCabinetBold } from './FileCabinetBold';
import { FileCabinetBoldDuotone } from './FileCabinetBoldDuotone';
import { FileCabinetFill } from './FileCabinetFill';
import { FileCabinetFillDuotone } from './FileCabinetFillDuotone';

export interface FileCabinetProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FileCabinet - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FileCabinetRegular } from 'stera-icons/FileCabinetRegular';
 */
const FileCabinet = memo(forwardRef<SVGSVGElement, FileCabinetProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FileCabinetBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FileCabinetBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FileCabinetFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FileCabinetFill ref={ref} {...rest} />;
  if (duotone) return <FileCabinetRegularDuotone ref={ref} {...rest} />;
  return <FileCabinetRegular ref={ref} {...rest} />;
}));

FileCabinet.displayName = 'FileCabinet';

// Triple export pattern (lucide-react style)
export { FileCabinet, FileCabinet as FileCabinetIcon, FileCabinet as SiFileCabinet };
