import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-minus-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5 0 9 4.13 9 9.18 0 1.6-.58 3.2-1.37 4.63a23 23 0 0 1-2.88 3.99A37 37 0 0 1 13 22.48l-.27.22-.07.06-.02.02h-.01a1 1 0 0 1-1.24 0h-.01l-.02-.02-.07-.06-.27-.22a35 35 0 0 1-3.76-3.68 23 23 0 0 1-2.88-3.99A10 10 0 0 1 3 10.18C3 5.13 7 1 12 1m0 2c-3.84 0-7 3.2-7 7.18 0 1.13.42 2.38 1.13 3.67.7 1.28 1.65 2.52 2.62 3.63A35 35 0 0 0 12 20.69a34 34 0 0 0 3.25-3.21c.97-1.1 1.92-2.35 2.62-3.63A8 8 0 0 0 19 10.18 7.1 7.1 0 0 0 12 3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MapPinMinusBoldDuotone.displayName = 'MapPinMinusBoldDuotone';

// Triple export pattern (lucide-react style)
export { MapPinMinusBoldDuotone, MapPinMinusBoldDuotone as MapPinMinusBoldDuotoneIcon, MapPinMinusBoldDuotone as SiMapPinMinusBoldDuotone };
export default MapPinMinusBoldDuotone;
export type { MapPinMinusBoldDuotoneProps };
