import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapFillProps = Omit<IconBaseProps, 'children'>;

const MapFill = memo(
  forwardRef<SVGSVGElement, MapFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-fill" {...props}>
      <path fill="currentColor" d="m7.17 17.84-4.63 3A1 1 0 0 1 1 20V7.87a1 1 0 0 1 .46-.7l5.7-3.71zM14.84 6.35v14.26l-5.67-2.96V3.39zM21.46 3.16A1 1 0 0 1 23 4v12a1 1 0 0 1-.46.84l-5.7 3.7V6.16z" />
    </IconBase>
  ))
);

MapFill.displayName = 'MapFill';

// Triple export pattern (lucide-react style)
export { MapFill, MapFill as MapFillIcon, MapFill as SiMapFill };
export default MapFill;
export type { MapFillProps };
