import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutListBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayoutListBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-list-bold-duotone" {...props}>
      <path d="M20.5 18.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 13.75a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 8.25a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 3.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M7.05 12.75q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.35q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H6.7q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-.35q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-.35 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v.35c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h.35c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23v-.35c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09c-.28-.02-.65-.02-1.23-.02zM7.05 2.5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.35q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H6.7q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V6.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-.35 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v.35c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h.35c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23V6.7c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C8 4.5 7.63 4.5 7.05 4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutListBoldDuotone.displayName = 'LayoutListBoldDuotone';

// Triple export pattern (lucide-react style)
export { LayoutListBoldDuotone, LayoutListBoldDuotone as LayoutListBoldDuotoneIcon, LayoutListBoldDuotone as SiLayoutListBoldDuotone };
export default LayoutListBoldDuotone;
export type { LayoutListBoldDuotoneProps };
