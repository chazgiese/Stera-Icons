import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolboxBoldProps = Omit<IconBaseProps, 'children'>;

const ToolboxBold = memo(
  forwardRef<SVGSVGElement, ToolboxBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.42 2.5c1.12 0 2.07.82 2.22 1.93L16.87 6h1.93q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v6.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8v-6.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 5.99 5.2 6h1.93l.23-1.57A2.25 2.25 0 0 1 9.58 2.5zM18 14v.5a1 1 0 1 1-2 0V14H8v.5a1 1 0 1 1-2 0V14H3v2.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h13.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23V14zM5.2 8c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C3 9.25 3 9.62 3 10.2V12h3v-.5a1 1 0 1 1 2 0v.5h8v-.5a1 1 0 1 1 2 0v.5h3v-1.8c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C19.75 8 19.38 8 18.8 8zm4.38-3.5c-.12 0-.23.1-.24.21L9.15 6h5.7l-.19-1.29a.25.25 0 0 0-.24-.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxBold.displayName = 'ToolboxBold';

export { ToolboxBold };
export type { ToolboxBoldProps };
