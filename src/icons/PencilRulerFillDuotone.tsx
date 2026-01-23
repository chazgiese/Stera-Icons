import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRulerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilRulerFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilRulerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-ruler-fill-duotone" {...props}>
      <path d="M19.15 2.5A1.5 1.5 0 0 1 20.5 4v17c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-2.75H17a1 1 0 1 0 0-2h-3.5V13.5H17a1 1 0 1 0 0-2h-3.5V8.75H17a1 1 0 1 0 0-2h-3.5V4c0-.83.67-1.5 1.5-1.5h4.15M10.5 21c0 .83-.67 1.5-1.5 1.5H5A1.5 1.5 0 0 1 3.5 21v-1.5h7zM10.5 17.5h-7V8h7zM7 1.5a.5.5 0 0 1 .38.17l3 3.5q.12.15.12.33V6h-7v-.5a.5.5 0 0 1 .12-.33l3-3.5A.5.5 0 0 1 7 1.5" opacity={0.4} />
        <path fill="currentColor" d="M10.5 19.5h-7v-2h7zM17 16.25a1 1 0 0 1 0 2h-3.5v-2zM17 11.5a1 1 0 1 1 0 2h-3.5v-2zM17 6.75a1 1 0 0 1 0 2h-3.5v-2zM10.5 8h-7V6h7z" />
    </IconBase>
  ))
);

PencilRulerFillDuotone.displayName = 'PencilRulerFillDuotone';

// Triple export pattern (lucide-react style)
export { PencilRulerFillDuotone, PencilRulerFillDuotone as PencilRulerFillDuotoneIcon, PencilRulerFillDuotone as SiPencilRulerFillDuotone };
export default PencilRulerFillDuotone;
export type { PencilRulerFillDuotoneProps };
