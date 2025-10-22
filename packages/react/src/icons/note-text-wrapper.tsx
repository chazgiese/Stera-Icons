import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { NoteTextIcon as RegularNoteTextIcon } from './note-text';
import { NoteTextIconBold } from './note-text-bold';
import { NoteTextIconFilled } from './note-text-filled';
import { NoteTextIconFilltone } from './note-text-filltone';
import { NoteTextIconLinetone } from './note-text-linetone';

export interface NoteTextIconProps extends IconProps {
  variant?: IconVariant;
}

const NoteTextIcon = memo(forwardRef<SVGSVGElement, NoteTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <NoteTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <NoteTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <NoteTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <NoteTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularNoteTextIcon ref={ref} {...props} />;
  }
}));

NoteTextIcon.displayName = 'NoteTextIcon';

export { NoteTextIcon };
