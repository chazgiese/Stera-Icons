import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TriangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, TriangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4 19.62c.17.12.48.25 1.2.31.73.07 1.7.07 3.07.07h7.46c1.38 0 2.34 0 3.06-.07.72-.06 1.04-.18 1.2-.3a1 1 0 0 0 1.1 1.66l-.15.1c-.57.34-1.24.47-1.97.53q-1.24.1-3.24.08H8.27q-2 .02-3.24-.08c-.73-.06-1.4-.2-1.97-.53l-.15-.1A1 1 0 0 0 4 19.62" opacity={.4} />
        <path fill="currentColor" d="M10.37 2.4a4 4 0 0 1 3.26 0c.7.3 1.23.9 1.7 1.58.5.7 1.03 1.64 1.7 2.82l3.73 6.52q1.02 1.73 1.55 2.86c.34.76.58 1.5.5 2.25a4 4 0 0 1-1.63 2.8A1 1 0 0 1 20 19.63a2 2 0 0 0 .82-1.4c.02-.21-.03-.55-.33-1.21s-.78-1.5-1.46-2.7L15.3 7.8a38 38 0 0 0-1.6-2.66c-.42-.6-.69-.82-.88-.9a2 2 0 0 0-1.64 0c-.2.08-.46.3-.88.9s-.9 1.45-1.6 2.66l-3.73 6.52a38 38 0 0 0-1.46 2.7c-.3.66-.35 1-.33 1.2A2 2 0 0 0 4 19.63a1 1 0 1 1-1.18 1.62 4 4 0 0 1-1.63-2.8c-.08-.77.16-1.5.5-2.26q.54-1.13 1.54-2.86L6.96 6.8q1-1.77 1.7-2.82c.48-.69 1-1.27 1.7-1.58" />
    </IconBase>
  ))
);

TriangleBoldDuotone.displayName = 'TriangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { TriangleBoldDuotone, TriangleBoldDuotone as TriangleBoldDuotoneIcon, TriangleBoldDuotone as SiTriangleBoldDuotone };
export type { TriangleBoldDuotoneProps };
