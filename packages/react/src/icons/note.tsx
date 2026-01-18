import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NoteRegular } from './NoteRegular';
import { NoteRegularDuotone } from './NoteRegularDuotone';
import { NoteBold } from './NoteBold';
import { NoteBoldDuotone } from './NoteBoldDuotone';
import { NoteFill } from './NoteFill';
import { NoteFillDuotone } from './NoteFillDuotone';

export interface NoteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Note with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { NoteRegular } from 'stera-icons/NoteRegular';
 */
const Note = memo(forwardRef<SVGSVGElement, NoteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <NoteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <NoteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <NoteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <NoteFill ref={ref} {...rest} />;
  if (duotone) return <NoteRegularDuotone ref={ref} {...rest} />;
  return <NoteRegular ref={ref} {...rest} />;
}));

Note.displayName = 'Note';

export { Note };
