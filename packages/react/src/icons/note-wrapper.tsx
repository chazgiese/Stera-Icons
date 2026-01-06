import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NoteIcon as RegularNoteIcon } from './note';
import { NoteIconDuotone as NoteIconDuotone } from './note-duotone';
import { NoteIconBold as NoteIconBold } from './note-bold';
import { NoteIconBoldDuotone as NoteIconBoldDuotone } from './note-bold-duotone';
import { NoteIconFill as NoteIconFill } from './note-fill';
import { NoteIconFillDuotone as NoteIconFillDuotone } from './note-fill-duotone';

export interface NoteIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const NoteIcon = memo(forwardRef<SVGSVGElement, NoteIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <NoteIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <NoteIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <NoteIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <NoteIconFill ref={ref} {...props} />;
  if (duotone) return <NoteIconDuotone ref={ref} {...props} />;
  return <RegularNoteIcon ref={ref} {...props} />;
}));

NoteIcon.displayName = 'NoteIcon';

export { NoteIcon };
