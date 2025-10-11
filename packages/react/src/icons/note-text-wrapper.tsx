import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NoteTextIcon as NoteTextIconRegular } from './note-text';
import { NoteTextIconBold } from './note-text-bold';
import { NoteTextIconFilled } from './note-text-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <NoteTextIconRegular ref={ref} {...props} />;
  }
}));

NoteTextIcon.displayName = 'NoteTextIcon';

export { NoteTextIcon };
