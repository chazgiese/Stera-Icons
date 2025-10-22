import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { NotebookIcon as RegularNotebookIcon } from './notebook';
import { NotebookIconBold } from './notebook-bold';
import { NotebookIconFilled } from './notebook-filled';
import { NotebookIconFilltone } from './notebook-filltone';
import { NotebookIconLinetone } from './notebook-linetone';

export interface NotebookIconProps extends IconProps {
  variant?: IconVariant;
}

const NotebookIcon = memo(forwardRef<SVGSVGElement, NotebookIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <NotebookIconFilled ref={ref} {...props} />;
    case 'bold':
      return <NotebookIconBold ref={ref} {...props} />;
    case 'filltone':
      return <NotebookIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <NotebookIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularNotebookIcon ref={ref} {...props} />;
  }
}));

NotebookIcon.displayName = 'NotebookIcon';

export { NotebookIcon };
