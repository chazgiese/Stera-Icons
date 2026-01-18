import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NotebookRegular } from './NotebookRegular';
import { NotebookRegularDuotone } from './NotebookRegularDuotone';
import { NotebookBold } from './NotebookBold';
import { NotebookBoldDuotone } from './NotebookBoldDuotone';
import { NotebookFill } from './NotebookFill';
import { NotebookFillDuotone } from './NotebookFillDuotone';

export interface NotebookProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Notebook with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { NotebookRegular } from 'stera-icons/NotebookRegular';
 */
const Notebook = memo(forwardRef<SVGSVGElement, NotebookProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <NotebookBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <NotebookBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <NotebookFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <NotebookFill ref={ref} {...rest} />;
  if (duotone) return <NotebookRegularDuotone ref={ref} {...rest} />;
  return <NotebookRegular ref={ref} {...rest} />;
}));

Notebook.displayName = 'Notebook';

export { Notebook };
