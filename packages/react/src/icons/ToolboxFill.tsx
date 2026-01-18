import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolboxFillProps = Omit<IconBaseProps, 'children'>;

const ToolboxFill = memo(
  forwardRef<SVGSVGElement, ToolboxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 14.5a1 1 0 1 0 2 0V14h8v.5a1 1 0 1 0 2 0V14h5v2.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8V14h5z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.42 2.5c1.12 0 2.07.82 2.22 1.93L16.87 6h1.93q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V12h-5v-.5a1 1 0 1 0-2 0v.5H8v-.5a1 1 0 1 0-2 0v.5H1v-1.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 5.99 5.2 6h1.93l.23-1.57A2.25 2.25 0 0 1 9.58 2.5zm-4.84 2c-.12 0-.23.1-.24.21L9.15 6h5.7l-.19-1.29a.25.25 0 0 0-.24-.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxFill.displayName = 'ToolboxFill';

export { ToolboxFill };
export type { ToolboxFillProps };
