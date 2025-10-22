import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { NoteIcon as NoteIconRegular } from './note';
import { NoteIconBold } from './note-bold';
import { NoteIconFilled } from './note-filled';
import { NoteIconFilltone } from './note-filltone';
import { NoteIconLinetone } from './note-linetone';

export interface NoteIconProps extends IconProps {
  variant?: IconVariant;
}

const NoteIcon = memo(forwardRef<SVGSVGElement, NoteIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <NoteIconFilled ref={ref} {...props} />;
    case 'bold':
      return <NoteIconBold ref={ref} {...props} />;
    case 'filltone':
      return <NoteIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <NoteIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <NoteIconRegular ref={ref} {...props} />;
  }
}));

NoteIcon.displayName = 'NoteIcon';

export { NoteIcon };
