import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NotebookLogRegular } from './NotebookLogRegular';
import { NotebookLogRegularDuotone } from './NotebookLogRegularDuotone';
import { NotebookLogBold } from './NotebookLogBold';
import { NotebookLogBoldDuotone } from './NotebookLogBoldDuotone';
import { NotebookLogFill } from './NotebookLogFill';
import { NotebookLogFillDuotone } from './NotebookLogFillDuotone';

export interface NotebookLogProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * NotebookLog with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { NotebookLogRegular } from 'stera-icons/NotebookLogRegular';
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

export { NotebookLog };
