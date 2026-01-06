import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NotebookIcon as RegularNotebookIcon } from './notebook';
import { NotebookIconDuotone as NotebookIconDuotone } from './notebook-duotone';
import { NotebookIconBold as NotebookIconBold } from './notebook-bold';
import { NotebookIconBoldDuotone as NotebookIconBoldDuotone } from './notebook-bold-duotone';
import { NotebookIconFill as NotebookIconFill } from './notebook-fill';
import { NotebookIconFillDuotone as NotebookIconFillDuotone } from './notebook-fill-duotone';

export interface NotebookIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const NotebookIcon = memo(forwardRef<SVGSVGElement, NotebookIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <NotebookIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <NotebookIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <NotebookIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <NotebookIconFill ref={ref} {...props} />;
  if (duotone) return <NotebookIconDuotone ref={ref} {...props} />;
  return <RegularNotebookIcon ref={ref} {...props} />;
}));

NotebookIcon.displayName = 'NotebookIcon';

export { NotebookIcon };
