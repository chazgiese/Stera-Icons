import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationFillProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFill = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-fill" {...props}>
      <path d="M9.99 4.04a2.25 2.25 0 0 1 4.02 0l7.1 14.2a2.25 2.25 0 0 1-3.09 2.98L12 17.93l-6.02 3.29a2.25 2.25 0 0 1-3.1-2.98z" />
    </IconBase>
  ))
);

CursorNavigationFill.displayName = 'CursorNavigationFill';

// Triple export pattern (lucide-react style)
export { CursorNavigationFill, CursorNavigationFill as CursorNavigationFillIcon, CursorNavigationFill as SiCursorNavigationFill };
export default CursorNavigationFill;
export type { CursorNavigationFillProps };
