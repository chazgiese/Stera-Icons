import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicRegularDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-italic-duotone" {...props}>
      <path d="M7.73 21.16a.75.75 0 0 1-1.46-.32l1.13-5.09h1.54zM13.73 21.16a.75.75 0 0 1-1.46-.32l1.13-5.09h1.54zM9.27 14.25H7.73l1-4.5h1.54zM15.27 14.25h-1.54l1-4.5h1.54zM10.27 2.84a.75.75 0 0 1 1.46.32L10.6 8.25H9.06zM16.27 2.84a.75.75 0 0 1 1.46.32L16.6 8.25h-1.54z" opacity={0.4} />
        <path fill="currentColor" d="M19 14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 8.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

HashItalicRegularDuotone.displayName = 'HashItalicRegularDuotone';

// Triple export pattern (lucide-react style)
export { HashItalicRegularDuotone, HashItalicRegularDuotone as HashItalicRegularDuotoneIcon, HashItalicRegularDuotone as SiHashItalicRegularDuotone };
export default HashItalicRegularDuotone;
export type { HashItalicRegularDuotoneProps };
