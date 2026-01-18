import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapFillDuotone = memo(
  forwardRef<SVGSVGElement, MapFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.84 6.35v14.26l-5.67-2.96V3.39z" opacity={.4} />
        <path fill="currentColor" d="m7.17 17.84-4.63 3A1 1 0 0 1 1 20V7.87a1 1 0 0 1 .46-.7l5.7-3.71zM21.46 3.16A1 1 0 0 1 23 4v12a1 1 0 0 1-.46.84l-5.7 3.7V6.16z" />
    </IconBase>
  ))
);

MapFillDuotone.displayName = 'MapFillDuotone';

// Triple export pattern (lucide-react style)
export { MapFillDuotone, MapFillDuotone as MapFillDuotoneIcon, MapFillDuotone as SiMapFillDuotone };
export type { MapFillDuotoneProps };
