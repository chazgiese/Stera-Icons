import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-bold-duotone" {...props}>
      <path d="m16 17.26-1 .58-1-.58V9.07l.5.3a1 1 0 0 0 1 0l.5-.3zM10 6.74v8.18l-.5-.28a1 1 0 0 0-1 0l-.5.28V6.74l1-.58z" opacity={0.4} />
        <path fillRule="evenodd" d="M20.5 4.14A1 1 0 0 1 22 5v10.5a1 1 0 0 1-.5.86l-6 3.5a1 1 0 0 1-1 0L9 16.66l-5.5 3.2A1 1 0 0 1 2 19V8.5a1 1 0 0 1 .5-.86l6-3.5.12-.06a1 1 0 0 1 .88.06l5.5 3.2zM4 9.07v8.19l4.5-2.62a1 1 0 0 1 1 0l5.5 3.2 5-2.92V6.74l-4.5 2.62a1 1 0 0 1-1 0L9 6.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapBoldDuotone.displayName = 'MapBoldDuotone';

// Triple export pattern (lucide-react style)
export { MapBoldDuotone, MapBoldDuotone as MapBoldDuotoneIcon, MapBoldDuotone as SiMapBoldDuotone };
export default MapBoldDuotone;
export type { MapBoldDuotoneProps };
