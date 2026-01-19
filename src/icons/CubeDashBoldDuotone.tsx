import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubeDashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubeDashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubeDashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-dash-bold-duotone" {...props}>
      <path d="M12 17.88a1 1 0 0 1 1 1v1.42l.76-.42a1 1 0 0 1 .98 1.74l-1.28.71a3 3 0 0 1-2.92 0l-1.28-.7a1 1 0 0 1 .98-1.75l.76.42v-1.42a1 1 0 0 1 1-1M4.76 4.88a1 1 0 1 1 .98 1.74L5.06 7l1.24.69a1 1 0 0 1-.97 1.75L4 8.7v.8a1 1 0 0 1-2 0V8.18a3 3 0 0 1 1.54-2.63zM17.88 5.26a1 1 0 0 1 1.36-.38l1.22.67A3 3 0 0 1 22 8.18V9.5a1 1 0 0 1-2 0v-.8l-1.33.74a1 1 0 0 1-.97-1.75L18.94 7l-.68-.38a1 1 0 0 1-.38-1.36" opacity={0.4} />
        <path fill="currentColor" d="M3 13.5a1 1 0 0 1 1 1v1.32c0 .37.2.7.51.88l1.23.68a1 1 0 0 1-.98 1.74l-1.22-.67A3 3 0 0 1 2 15.82V14.5a1 1 0 0 1 1-1M21 13.5a1 1 0 0 1 1 1v1.32a3 3 0 0 1-1.54 2.63l-1.22.67a1 1 0 1 1-.98-1.74l1.23-.68a1 1 0 0 0 .51-.88V14.5a1 1 0 0 1 1-1M14.33 9.56a1 1 0 0 1 .97 1.75L13 12.6v2.54a1 1 0 0 1-2 0v-2.54L8.7 11.3a1 1 0 0 1 .97-1.75l2.33 1.3zM10.54 1.67a3 3 0 0 1 2.92 0l1.28.7a1 1 0 0 1-.98 1.75l-1.27-.7a1 1 0 0 0-.98 0l-1.27.7a1 1 0 1 1-.98-1.74z" />
    </IconBase>
  ))
);

CubeDashBoldDuotone.displayName = 'CubeDashBoldDuotone';

// Triple export pattern (lucide-react style)
export { CubeDashBoldDuotone, CubeDashBoldDuotone as CubeDashBoldDuotoneIcon, CubeDashBoldDuotone as SiCubeDashBoldDuotone };
export type { CubeDashBoldDuotoneProps };
