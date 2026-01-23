import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { NotebookRegular } from './NotebookRegular.js';
import { NotebookRegularDuotone } from './NotebookRegularDuotone.js';
import { NotebookBold } from './NotebookBold.js';
import { NotebookBoldDuotone } from './NotebookBoldDuotone.js';
import { NotebookFill } from './NotebookFill.js';
import { NotebookFillDuotone } from './NotebookFillDuotone.js';

export interface NotebookProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Notebook - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { NotebookRegular } from 'stera-icons/icons/NotebookRegular';
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

// Triple export pattern (lucide-react style)
export { Notebook, Notebook as NotebookIcon, Notebook as SiNotebook };
export default Notebook;
