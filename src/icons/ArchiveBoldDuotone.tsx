import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archive-bold-duotone" {...props}>
      <path fill="currentColor" d="M22 14.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-3.7l.37.23q.49.22.96.25L4 11v3.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V11q.37 0 .67-.02A2.5 2.5 0 0 0 22 10.5z" opacity={.4} />
        <path fill="currentColor" d="M14 12.5a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M19.6 4q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T23 7.4v.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T19.6 11H4.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q1 8.2 1 7.6v-.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T4.4 4zM4.4 6a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19C3 6.7 3 6.96 3 7.4v.2a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h15.2a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.2a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C20.3 6 20.04 6 19.6 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveBoldDuotone.displayName = 'ArchiveBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArchiveBoldDuotone, ArchiveBoldDuotone as ArchiveBoldDuotoneIcon, ArchiveBoldDuotone as SiArchiveBoldDuotone };
export default ArchiveBoldDuotone;
export type { ArchiveBoldDuotoneProps };
