import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerRegularProps = Omit<IconBaseProps, 'children'>;

const CursorPointerRegular = memo(
  forwardRef<SVGSVGElement, CursorPointerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 1.25A2.75 2.75 0 0 1 12.75 4v2.55a2.74 2.74 0 0 1 3.69 1.19q.68-.48 1.56-.49A2.75 2.75 0 0 1 20.75 10v4a8.75 8.75 0 0 1-17.37 1.53L2.2 12.51A2.75 2.75 0 0 1 7 9.83l.25.42V4A2.75 2.75 0 0 1 10 1.25m0 1.5c-.7 0-1.25.56-1.25 1.25v9a.75.75 0 0 1-1.4.38l-1.64-2.8a1.25 1.25 0 0 0-2.23 1.14l.06.11.05.1 1.22 3.12.02.07.02.08a7.25 7.25 0 0 0 14.4-1.2v-4a1.25 1.25 0 0 0-2.5 0v1.5a.75.75 0 0 1-1.5 0V9a1.25 1.25 0 0 0-2.5 0v2a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerRegular.displayName = 'CursorPointerRegular';

// Triple export pattern (lucide-react style)
export { CursorPointerRegular, CursorPointerRegular as CursorPointerRegularIcon, CursorPointerRegular as SiCursorPointerRegular };
export default CursorPointerRegular;
export type { CursorPointerRegularProps };
