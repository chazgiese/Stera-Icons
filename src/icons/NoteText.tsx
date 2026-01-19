import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NoteTextRegular } from './NoteTextRegular';
import { NoteTextRegularDuotone } from './NoteTextRegularDuotone';
import { NoteTextBold } from './NoteTextBold';
import { NoteTextBoldDuotone } from './NoteTextBoldDuotone';
import { NoteTextFill } from './NoteTextFill';
import { NoteTextFillDuotone } from './NoteTextFillDuotone';

export interface NoteTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * NoteText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { NoteTextRegular } from 'stera-icons/icons/NoteTextRegular';
 */
const NoteText = memo(forwardRef<SVGSVGElement, NoteTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <NoteTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <NoteTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <NoteTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <NoteTextFill ref={ref} {...rest} />;
  if (duotone) return <NoteTextRegularDuotone ref={ref} {...rest} />;
  return <NoteTextRegular ref={ref} {...rest} />;
}));

NoteText.displayName = 'NoteText';

// Triple export pattern (lucide-react style)
export { NoteText, NoteText as NoteTextIcon, NoteText as SiNoteText };
