import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NoteTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteTextFillDuotone = memo(
  forwardRef<SVGSVGElement, NoteTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-text-fill-duotone" {...props}>
      <path fill="currentColor" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71V14h-4.8c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87c-.22.43-.22.99-.22 2.11V22H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2zM7 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" opacity={.4} />
        <path fill="currentColor" d="M6 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M6 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M22 14h-4.8c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87c-.22.43-.22.99-.22 2.11V22q.46 0 .87-.08a3 3 0 0 0 .87-.36q.43-.29.85-.73l4.24-4.24c.29-.3.54-.55.73-.85A3 3 0 0 0 22 14" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteTextFillDuotone.displayName = 'NoteTextFillDuotone';

// Triple export pattern (lucide-react style)
export { NoteTextFillDuotone, NoteTextFillDuotone as NoteTextFillDuotoneIcon, NoteTextFillDuotone as SiNoteTextFillDuotone };
export type { NoteTextFillDuotoneProps };
