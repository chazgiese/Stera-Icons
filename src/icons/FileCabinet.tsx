import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FileCabinetRegular } from './FileCabinetRegular.js';
import { FileCabinetRegularDuotone } from './FileCabinetRegularDuotone.js';
import { FileCabinetBold } from './FileCabinetBold.js';
import { FileCabinetBoldDuotone } from './FileCabinetBoldDuotone.js';
import { FileCabinetFill } from './FileCabinetFill.js';
import { FileCabinetFillDuotone } from './FileCabinetFillDuotone.js';

export interface FileCabinetProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FileCabinet - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FileCabinetRegular } from 'stera-icons/icons/FileCabinetRegular';
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
export default FileCabinet;
