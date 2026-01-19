import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorNavigationFillProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFill = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-fill" {...props}>
      <path fill="currentColor" d="M9.99 2.79a2.25 2.25 0 0 1 4.02 0l8.1 16.2a2.25 2.25 0 0 1-3.09 2.98L12 18.14l-7.02 3.83a2.25 2.25 0 0 1-3.1-2.98z" />
    </IconBase>
  ))
);

CursorNavigationFill.displayName = 'CursorNavigationFill';

// Triple export pattern (lucide-react style)
export { CursorNavigationFill, CursorNavigationFill as CursorNavigationFillIcon, CursorNavigationFill as SiCursorNavigationFill };
export default CursorNavigationFill;
export type { CursorNavigationFillProps };
