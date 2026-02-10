import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerRegularProps = Omit<IconBaseProps, 'children'>;

const CursorPointerRegular = memo(
  forwardRef<SVGSVGElement, CursorPointerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.14 2.25c1.41 0 2.55 1.14 2.55 2.55v2.18a2.54 2.54 0 0 1 3.28 1.07q.61-.39 1.37-.4c1.41 0 2.55 1.14 2.55 2.55v3.6a7.95 7.95 0 0 1-15.77 1.4l-1.07-2.72A2.55 2.55 0 0 1 7.5 10l.1.15V4.8c0-1.4 1.13-2.55 2.54-2.55m0 1.5c-.58 0-1.05.47-1.05 1.05v8.1a.75.75 0 0 1-1.4.38l-1.48-2.51a1.05 1.05 0 1 0-1.82 1.04l.05.1 1.1 2.8.02.08.02.08a6.45 6.45 0 0 0 12.81-1.07v-3.6a1.05 1.05 0 0 0-2.1-.1v1.45a.75.75 0 0 1-1.5 0V9.3a1.05 1.05 0 0 0-2.1-.1v1.9a.75.75 0 0 1-1.5 0V4.8c0-.58-.47-1.05-1.05-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerRegular.displayName = 'CursorPointerRegular';

// Triple export pattern (lucide-react style)
export { CursorPointerRegular, CursorPointerRegular as CursorPointerRegularIcon, CursorPointerRegular as SiCursorPointerRegular };
export default CursorPointerRegular;
export type { CursorPointerRegularProps };
