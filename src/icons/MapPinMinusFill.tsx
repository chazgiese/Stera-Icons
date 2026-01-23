import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinMinusFillProps = Omit<IconBaseProps, 'children'>;

const MapPinMinusFill = memo(
  forwardRef<SVGSVGElement, MapPinMinusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-minus-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5 0 9 4.13 9 9.18 0 1.6-.58 3.2-1.37 4.63a23 23 0 0 1-2.88 3.99A37 37 0 0 1 13 22.48l-.27.22-.07.06-.02.02h-.01a1 1 0 0 1-1.24 0h-.01l-.02-.02-.07-.06-.27-.22a35 35 0 0 1-3.76-3.68 23 23 0 0 1-2.88-3.99A10 10 0 0 1 3 10.18C3 5.13 7 1 12 1M9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinMinusFill.displayName = 'MapPinMinusFill';

// Triple export pattern (lucide-react style)
export { MapPinMinusFill, MapPinMinusFill as MapPinMinusFillIcon, MapPinMinusFill as SiMapPinMinusFill };
export default MapPinMinusFill;
export type { MapPinMinusFillProps };
