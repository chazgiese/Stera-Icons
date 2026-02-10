import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationBoldProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationBold = memo(
  forwardRef<SVGSVGElement, CursorNavigationBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.99 4.04a2.25 2.25 0 0 1 4.02 0l7.1 14.2a2.25 2.25 0 0 1-3.09 2.98L12 17.93l-6.02 3.29a2.25 2.25 0 0 1-3.1-2.98zm2.23.9a.25.25 0 0 0-.44 0l-7.1 14.2a.2.2 0 0 0-.03.15q0 .07.08.13.07.07.13.08t.16-.04l6.5-3.54.12-.06a1 1 0 0 1 .84.06l6.5 3.54q.1.05.16.04t.13-.08q.07-.06.08-.13.02-.05-.03-.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationBold.displayName = 'CursorNavigationBold';

// Triple export pattern (lucide-react style)
export { CursorNavigationBold, CursorNavigationBold as CursorNavigationBoldIcon, CursorNavigationBold as SiCursorNavigationBold };
export default CursorNavigationBold;
export type { CursorNavigationBoldProps };
