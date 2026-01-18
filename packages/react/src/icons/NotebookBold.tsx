import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NotebookBoldProps = Omit<IconBaseProps, 'children'>;

const NotebookBold = memo(
  forwardRef<SVGSVGElement, NotebookBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14 12a1 1 0 1 1 0 2h-2.5a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 2q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v10q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H8q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q2.99 18.02 3 17V7q-.01-1.03.04-1.72c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q6.98 1.99 8 2zM8.5 20H16c.72 0 1.2 0 1.56-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62.03-.37.03-.84.03-1.56V7c0-.72 0-1.2-.03-1.56a2 2 0 0 0-.13-.62 1.5 1.5 0 0 0-.66-.66c-.1-.05-.26-.1-.62-.13C17.2 4 16.72 4 16 4H8.5zM6.44 4.03c-.36.03-.52.08-.62.13a1.5 1.5 0 0 0-.66.66c-.05.1-.1.26-.13.62C5 5.8 5 6.28 5 7v10c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13h.06V4.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookBold.displayName = 'NotebookBold';

// Triple export pattern (lucide-react style)
export { NotebookBold, NotebookBold as NotebookBoldIcon, NotebookBold as SiNotebookBold };
export type { NotebookBoldProps };
