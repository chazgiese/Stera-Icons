import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-duotone" {...props}>
      <path fill="currentColor" d="M4.45 19.02a.5.5 0 0 0 .69.66l6.5-3.54.09-.04q.31-.12.63.04l6.5 3.54c.43.24.9-.22.69-.66L14.7 9.35a.75.75 0 0 0 1.34-.69l4.84 9.69A2 2 0 0 1 18.14 21L12 17.65 5.86 21a2 2 0 0 1-2.75-2.65l4.84-9.67a.75.75 0 0 0 1.35.65z" opacity={.4} />
        <path fill="currentColor" d="M10.21 4.15a2 2 0 0 1 3.58 0l2.26 4.51a.75.75 0 0 1-1.35.68l-2.25-4.52a.5.5 0 0 0-.9 0L9.3 9.34a.75.75 0 0 1-1.35-.68z" />
    </IconBase>
  ))
);

CursorNavigationRegularDuotone.displayName = 'CursorNavigationRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationRegularDuotone, CursorNavigationRegularDuotone as CursorNavigationRegularDuotoneIcon, CursorNavigationRegularDuotone as SiCursorNavigationRegularDuotone };
export default CursorNavigationRegularDuotone;
export type { CursorNavigationRegularDuotoneProps };
