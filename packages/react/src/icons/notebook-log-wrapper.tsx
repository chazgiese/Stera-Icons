import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NotebookLogIcon as RegularNotebookLogIcon } from './notebook-log';
import { NotebookLogIconDuotone as NotebookLogIconDuotone } from './notebook-log-duotone';
import { NotebookLogIconBold as NotebookLogIconBold } from './notebook-log-bold';
import { NotebookLogIconBoldDuotone as NotebookLogIconBoldDuotone } from './notebook-log-bold-duotone';
import { NotebookLogIconFill as NotebookLogIconFill } from './notebook-log-fill';
import { NotebookLogIconFillDuotone as NotebookLogIconFillDuotone } from './notebook-log-fill-duotone';

export interface NotebookLogIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const NotebookLogIcon = memo(forwardRef<SVGSVGElement, NotebookLogIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <NotebookLogIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <NotebookLogIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <NotebookLogIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <NotebookLogIconFill ref={ref} {...props} />;
  if (duotone) return <NotebookLogIconDuotone ref={ref} {...props} />;
  return <RegularNotebookLogIcon ref={ref} {...props} />;
}));

NotebookLogIcon.displayName = 'NotebookLogIcon';

export { NotebookLogIcon };
