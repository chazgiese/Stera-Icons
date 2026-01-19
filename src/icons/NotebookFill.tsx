import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NotebookFillProps = Omit<IconBaseProps, 'children'>;

const NotebookFill = memo(
  forwardRef<SVGSVGElement, NotebookFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 2q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v10q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H8q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q2.99 18.02 3 17V7q-.01-1.03.04-1.72c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q6.98 1.99 8 2zM7.5 4q-.67 0-1.06.03c-.36.03-.52.08-.62.13a1.5 1.5 0 0 0-.66.66c-.05.1-.1.26-.13.62C5 5.8 5 6.28 5 7v10c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13q.39.03 1.06.03zm4 8a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookFill.displayName = 'NotebookFill';

// Triple export pattern (lucide-react style)
export { NotebookFill, NotebookFill as NotebookFillIcon, NotebookFill as SiNotebookFill };
export type { NotebookFillProps };
