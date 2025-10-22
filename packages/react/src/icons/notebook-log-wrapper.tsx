import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { NotebookLogIcon as RegularNotebookLogIcon } from './notebook-log';
import { NotebookLogIconBold } from './notebook-log-bold';
import { NotebookLogIconFilled } from './notebook-log-filled';
import { NotebookLogIconFilltone } from './notebook-log-filltone';
import { NotebookLogIconLinetone } from './notebook-log-linetone';

export interface NotebookLogIconProps extends IconProps {
  variant?: IconVariant;
}

const NotebookLogIcon = memo(forwardRef<SVGSVGElement, NotebookLogIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <NotebookLogIconFilled ref={ref} {...props} />;
    case 'bold':
      return <NotebookLogIconBold ref={ref} {...props} />;
    case 'filltone':
      return <NotebookLogIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <NotebookLogIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularNotebookLogIcon ref={ref} {...props} />;
  }
}));

NotebookLogIcon.displayName = 'NotebookLogIcon';

export { NotebookLogIcon };
