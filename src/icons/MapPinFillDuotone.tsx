import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapPinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5 0 9 4.13 9 9.18 0 1.6-.58 3.2-1.37 4.63a23 23 0 0 1-2.88 3.99A37 37 0 0 1 13 22.48l-.27.22-.07.06-.02.02h-.01a1 1 0 0 1-1.24 0h-.01l-.02-.02-.07-.06-.27-.22a35 35 0 0 1-3.76-3.68 23 23 0 0 1-2.88-3.99A10 10 0 0 1 3 10.18C3 5.13 7 1 12 1m0 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

MapPinFillDuotone.displayName = 'MapPinFillDuotone';

// Triple export pattern (lucide-react style)
export { MapPinFillDuotone, MapPinFillDuotone as MapPinFillDuotoneIcon, MapPinFillDuotone as SiMapPinFillDuotone };
export type { MapPinFillDuotoneProps };
