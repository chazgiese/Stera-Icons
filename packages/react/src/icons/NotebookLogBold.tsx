import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NotebookLogBoldProps = Omit<IconBaseProps, 'children'>;

const NotebookLogBold = memo(
  forwardRef<SVGSVGElement, NotebookLogBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 8a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57A17 17 0 0 1 3 18a1 1 0 1 1 0-2v-3a1 1 0 1 1 0-2V8a1 1 0 1 1 0-2q0-.72.04-1.25a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM8.8 3c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q5 5.34 5 6a1 1 0 0 1 0 2v3a1 1 0 1 1 0 2v3a1 1 0 0 1 0 2q0 .67.04 1.09c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V6.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 3 16.06 3 15.2 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookLogBold.displayName = 'NotebookLogBold';

// Triple export pattern (lucide-react style)
export { NotebookLogBold, NotebookLogBold as NotebookLogBoldIcon, NotebookLogBold as SiNotebookLogBold };
export type { NotebookLogBoldProps };
