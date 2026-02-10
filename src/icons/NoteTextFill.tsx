import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteTextFillProps = Omit<IconBaseProps, 'children'>;

const NoteTextFill = memo(
  forwardRef<SVGSVGElement, NoteTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-text-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v2.27q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-4.13 4.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H10.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm2.6 10c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87c-.22.43-.22.99-.22 2.11V19h.34c.24 0 .36 0 .48-.03a1 1 0 0 0 .29-.12c.1-.06.19-.15.36-.32l4.06-4.06c.17-.17.26-.26.32-.36a1 1 0 0 0 .12-.3q.04-.13.03-.47V13zM8 10.13a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.74zm0-3a.87.87 0 1 0 0 1.75h8a.88.88 0 0 0 0-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteTextFill.displayName = 'NoteTextFill';

// Triple export pattern (lucide-react style)
export { NoteTextFill, NoteTextFill as NoteTextFillIcon, NoteTextFill as SiNoteTextFill };
export default NoteTextFill;
export type { NoteTextFillProps };
