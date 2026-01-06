import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NoteTextIcon as RegularNoteTextIcon } from './note-text';
import { NoteTextIconDuotone as NoteTextIconDuotone } from './note-text-duotone';
import { NoteTextIconBold as NoteTextIconBold } from './note-text-bold';
import { NoteTextIconBoldDuotone as NoteTextIconBoldDuotone } from './note-text-bold-duotone';
import { NoteTextIconFill as NoteTextIconFill } from './note-text-fill';
import { NoteTextIconFillDuotone as NoteTextIconFillDuotone } from './note-text-fill-duotone';

export interface NoteTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const NoteTextIcon = memo(forwardRef<SVGSVGElement, NoteTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <NoteTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <NoteTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <NoteTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <NoteTextIconFill ref={ref} {...props} />;
  if (duotone) return <NoteTextIconDuotone ref={ref} {...props} />;
  return <RegularNoteTextIcon ref={ref} {...props} />;
}));

NoteTextIcon.displayName = 'NoteTextIcon';

export { NoteTextIcon };
