import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolboxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12v2H8v-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.8 6q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v6.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8v-6.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 5.99 5.2 6zM5.2 8c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C3 9.25 3 9.62 3 10.2V12h3v2H3v2.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h13.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23V14h-3v-2h3v-1.8c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C19.75 8 19.38 8 18.8 8z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M7 10.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M17 10.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M9.58 4.5c-.12 0-.23.1-.24.21L9.15 6H7.13l.23-1.57A2.25 2.25 0 0 1 9.58 2.5h4.84c1.12 0 2.07.82 2.22 1.93L16.87 6h-2.02l-.19-1.29a.25.25 0 0 0-.24-.21z" />
    </IconBase>
  ))
);

ToolboxBoldDuotone.displayName = 'ToolboxBoldDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxBoldDuotone, ToolboxBoldDuotone as ToolboxBoldDuotoneIcon, ToolboxBoldDuotone as SiToolboxBoldDuotone };
export type { ToolboxBoldDuotoneProps };
