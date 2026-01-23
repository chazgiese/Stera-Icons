import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { NotebookLogRegular } from './NotebookLogRegular.js';
import { NotebookLogRegularDuotone } from './NotebookLogRegularDuotone.js';
import { NotebookLogBold } from './NotebookLogBold.js';
import { NotebookLogBoldDuotone } from './NotebookLogBoldDuotone.js';
import { NotebookLogFill } from './NotebookLogFill.js';
import { NotebookLogFillDuotone } from './NotebookLogFillDuotone.js';

export interface NotebookLogProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * NotebookLog - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { NotebookLogRegular } from 'stera-icons/icons/NotebookLogRegular';
 */
const NotebookLog = memo(forwardRef<SVGSVGElement, NotebookLogProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <NotebookLogBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <NotebookLogBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <NotebookLogFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <NotebookLogFill ref={ref} {...rest} />;
  if (duotone) return <NotebookLogRegularDuotone ref={ref} {...rest} />;
  return <NotebookLogRegular ref={ref} {...rest} />;
}));

NotebookLog.displayName = 'NotebookLog';

// Triple export pattern (lucide-react style)
export { NotebookLog, NotebookLog as NotebookLogIcon, NotebookLog as SiNotebookLog };
export default NotebookLog;
