import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archive-fill-duotone" {...props}>
      <path fill="currentColor" d="M14 12.5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM19.6 6a13 13 0 0 1 1.09.04l.03.01a.5.5 0 0 1 .23.23v.03q.02.06.03.19c.02.2.02.46.02.9v.2a13 13 0 0 1-.04 1.09l-.01.03a.5.5 0 0 1-.22.23h-.04q-.06.02-.19.03c-.2.02-.46.02-.9.02H4.4a13 13 0 0 1-1.09-.04l-.03-.01a.5.5 0 0 1-.23-.22v-.04q-.02-.06-.03-.19C3 8.3 3 8.04 3 7.6v-.2a13 13 0 0 1 .04-1.09l.01-.03a.5.5 0 0 1 .22-.23h.04q.06-.02.19-.03C3.7 6 3.96 6 4.4 6z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.6 4q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T23 7.4v.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-.73.87v3.7q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-3.7a2.5 2.5 0 0 1-.73-.87 3 3 0 0 1-.25-.96Q1 8.2 1 7.6v-.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T4.4 4zM10 12.5a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.4 6a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19C3 6.7 3 6.96 3 7.4v.2a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h15.2a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.2a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C20.3 6 20.04 6 19.6 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveFillDuotone.displayName = 'ArchiveFillDuotone';

// Triple export pattern (lucide-react style)
export { ArchiveFillDuotone, ArchiveFillDuotone as ArchiveFillDuotoneIcon, ArchiveFillDuotone as SiArchiveFillDuotone };
export default ArchiveFillDuotone;
export type { ArchiveFillDuotoneProps };
