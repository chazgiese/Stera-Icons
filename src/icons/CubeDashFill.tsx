import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubeDashFillProps = Omit<IconBaseProps, 'children'>;

const CubeDashFill = memo(
  forwardRef<SVGSVGElement, CubeDashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-dash-fill" {...props}>
      <path fill="currentColor" d="M4.76 4.88a1 1 0 1 1 .98 1.74L5.06 7 12 10.86l2.33-1.3a1 1 0 0 1 .97 1.75L13 12.6v7.71l.76-.42a1 1 0 1 1 .98 1.74l-1.28.72a3 3 0 0 1-.46.2v.03h-.08a3 3 0 0 1-2.38-.23l-1.28-.72-.08-.04-4.2-2.33-.2-.12h-.02l-1.22-.68A3 3 0 0 1 2 15.82V8.18a3 3 0 0 1 1.54-2.62zM21 13.5a1 1 0 0 1 1 1v1.32a3 3 0 0 1-1.54 2.63l-1.22.67a1 1 0 0 1-.98-1.74l1.23-.68a1 1 0 0 0 .51-.88V14.5a1 1 0 0 1 1-1M17.88 5.27a1 1 0 0 1 1.36-.4l1.22.69A3 3 0 0 1 22 8.18V9.5a1 1 0 0 1-2 0v-.8l-1.33.74a1 1 0 0 1-.97-1.75L18.94 7l-.68-.38a1 1 0 0 1-.38-1.35M10.54 1.67a3 3 0 0 1 2.92 0l1.28.7a1 1 0 0 1-.98 1.75l-1.27-.7a1 1 0 0 0-.98 0l-1.27.7a1 1 0 0 1-.98-1.74z" />
    </IconBase>
  ))
);

CubeDashFill.displayName = 'CubeDashFill';

// Triple export pattern (lucide-react style)
export { CubeDashFill, CubeDashFill as CubeDashFillIcon, CubeDashFill as SiCubeDashFill };
export type { CubeDashFillProps };
