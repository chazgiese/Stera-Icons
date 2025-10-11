import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NotebookLogIcon as NotebookLogIconRegular } from './notebook-log';
import { NotebookLogIconBold } from './notebook-log-bold';
import { NotebookLogIconFilled } from './notebook-log-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <NotebookLogIconRegular ref={ref} {...props} />;
  }
}));

NotebookLogIcon.displayName = 'NotebookLogIcon';

export { NotebookLogIcon };
