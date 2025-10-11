import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NotebookIcon as NotebookIconRegular } from './notebook';
import { NotebookIconBold } from './notebook-bold';
import { NotebookIconFilled } from './notebook-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <NotebookIconRegular ref={ref} {...props} />;
  }
}));

NotebookIcon.displayName = 'NotebookIcon';

export { NotebookIcon };
