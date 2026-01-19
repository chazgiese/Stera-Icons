import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorNavigationRegularProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationRegular = memo(
  forwardRef<SVGSVGElement, CursorNavigationRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.21 2.9a2 2 0 0 1 3.58 0l8.1 16.2a2 2 0 0 1-2.75 2.65L12 17.85l-7.14 3.9A2 2 0 0 1 2.1 19.1zm2.24.67a.5.5 0 0 0-.9 0l-8.1 16.2a.5.5 0 0 0 .69.66l7.5-4.09.09-.04q.31-.12.63.04l7.5 4.1a.5.5 0 0 0 .69-.67z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationRegular.displayName = 'CursorNavigationRegular';

// Triple export pattern (lucide-react style)
export { CursorNavigationRegular, CursorNavigationRegular as CursorNavigationRegularIcon, CursorNavigationRegular as SiCursorNavigationRegular };
export type { CursorNavigationRegularProps };
