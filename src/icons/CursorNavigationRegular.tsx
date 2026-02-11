import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationRegularProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationRegular = memo(
  forwardRef<SVGSVGElement, CursorNavigationRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation" {...props}>
      <path fillRule="evenodd" d="M10.21 4.15a2 2 0 0 1 3.58 0l7.1 14.2A2 2 0 0 1 18.14 21L12 17.65 5.86 21a2 2 0 0 1-2.75-2.65zm2.24.67a.5.5 0 0 0-.9 0l-7.1 14.2a.5.5 0 0 0 .69.66l6.5-3.54c.22-.12.5-.13.72 0l6.5 3.54a.5.5 0 0 0 .69-.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationRegular.displayName = 'CursorNavigationRegular';

// Triple export pattern (lucide-react style)
export { CursorNavigationRegular, CursorNavigationRegular as CursorNavigationRegularIcon, CursorNavigationRegular as SiCursorNavigationRegular };
export default CursorNavigationRegular;
export type { CursorNavigationRegularProps };
