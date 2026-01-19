import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, TriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.18 4.22a2 2 0 0 1 1.64 0c.19.09.46.3.88.9s.9 1.46 1.6 2.67l3.73 6.52c.68 1.2 1.16 2.04 1.46 2.7s.35 1 .33 1.2a2 2 0 0 1-.82 1.4c-.17.13-.48.26-1.2.32-.73.07-1.7.07-3.07.07H8.27c-1.38 0-2.34 0-3.06-.07-.73-.06-1.04-.19-1.21-.31a2 2 0 0 1-.82-1.4c-.02-.22.03-.55.33-1.21s.78-1.5 1.46-2.7L8.7 7.8c.7-1.21 1.18-2.06 1.6-2.66s.69-.82.88-.91" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.37 2.4a4 4 0 0 1 3.26 0c.7.3 1.23.9 1.7 1.58.5.7 1.03 1.64 1.7 2.82l3.73 6.52q1.02 1.73 1.55 2.86c.35.76.58 1.5.5 2.25a4 4 0 0 1-1.63 2.8c-.62.46-1.38.62-2.2.7q-1.25.09-3.25.07H8.27q-2 .02-3.24-.08a4.3 4.3 0 0 1-2.2-.68 4 4 0 0 1-1.64-2.81c-.08-.76.16-1.5.5-2.25q.54-1.13 1.55-2.86L6.96 6.8q1-1.77 1.7-2.82c.48-.69 1-1.27 1.7-1.58m2.45 1.82a2 2 0 0 0-1.64 0c-.19.09-.46.3-.88.9S9.4 6.59 8.7 7.8L4.97 14.3a38 38 0 0 0-1.46 2.7c-.3.66-.35 1-.33 1.2a2 2 0 0 0 .82 1.4c.17.13.48.26 1.2.32.73.07 1.7.07 3.07.07h7.46c1.38 0 2.34 0 3.06-.07.73-.06 1.04-.19 1.21-.31a2 2 0 0 0 .82-1.4c.02-.22-.03-.55-.33-1.21s-.78-1.5-1.46-2.7L15.3 7.8a38 38 0 0 0-1.6-2.66c-.42-.6-.69-.82-.88-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleFillDuotone.displayName = 'TriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { TriangleFillDuotone, TriangleFillDuotone as TriangleFillDuotoneIcon, TriangleFillDuotone as SiTriangleFillDuotone };
export type { TriangleFillDuotoneProps };
