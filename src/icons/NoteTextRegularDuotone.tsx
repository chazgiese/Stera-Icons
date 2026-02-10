import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, NoteTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-text-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v2.27c0 .46 0 .8-.08 1.14q-.09.42-.33.8c-.18.3-.43.54-.75.86l-4.12 4.12c-.32.32-.57.57-.86.75q-.38.24-.8.33c-.33.08-.68.08-1.14.08H10.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-3.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h1.85V16.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h3.05V10.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05zm5.8 9q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.9l.07-.03c.11-.07.22-.17.59-.54l4.12-4.12c.37-.37.47-.48.54-.59l.03-.07z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11 10.25a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1 0-1.5zM15.5 7.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

NoteTextRegularDuotone.displayName = 'NoteTextRegularDuotone';

// Triple export pattern (lucide-react style)
export { NoteTextRegularDuotone, NoteTextRegularDuotone as NoteTextRegularDuotoneIcon, NoteTextRegularDuotone as SiNoteTextRegularDuotone };
export default NoteTextRegularDuotone;
export type { NoteTextRegularDuotoneProps };
