import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookLogBoldDuotone = memo(
  forwardRef<SVGSVGElement, NotebookLogBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-log-bold-duotone" {...props}>
      <path d="M14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57l-.03-.75h2q0 .32.03.59c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 4 15.06 4 14.2 4H9.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82q-.02.26-.03.59h-2q0-.4.03-.75a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2z" opacity={0.4} />
        <path d="M6 15.5H4V13h2zM6 11H4V8.5h2z" opacity={0.4} />
        <path d="M6 15.5a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 12a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM6 11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM14.5 8a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM6 6.5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

NotebookLogBoldDuotone.displayName = 'NotebookLogBoldDuotone';

// Triple export pattern (lucide-react style)
export { NotebookLogBoldDuotone, NotebookLogBoldDuotone as NotebookLogBoldDuotoneIcon, NotebookLogBoldDuotone as SiNotebookLogBoldDuotone };
export default NotebookLogBoldDuotone;
export type { NotebookLogBoldDuotoneProps };
