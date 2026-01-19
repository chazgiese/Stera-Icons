import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapPinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinRegularDuotone = memo(
  forwardRef<SVGSVGElement, MapPinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a8.84 8.84 0 0 1 8.75 8.93c0 1.54-.56 3.09-1.34 4.51a23 23 0 0 1-2.85 3.94 37 37 0 0 1-4 3.88l-.07.06-.02.02a.8.8 0 0 1-.83.07l-.1-.07h-.01l-.02-.02-.07-.06a23 23 0 0 1-1.2-1.03 37 37 0 0 1-2.8-2.85 23 23 0 0 1-2.85-3.94 9.6 9.6 0 0 1-1.34-4.5c0-4.93 3.9-8.94 8.75-8.94m0 1.5a7.34 7.34 0 0 0-7.25 7.43 8 8 0 0 0 1.16 3.79c.71 1.3 1.67 2.56 2.65 3.67A35 35 0 0 0 12 21.02a33 33 0 0 0 3.44-3.38 21 21 0 0 0 2.65-3.67 8 8 0 0 0 1.16-3.79A7.34 7.34 0 0 0 12 2.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinRegularDuotone.displayName = 'MapPinRegularDuotone';

// Triple export pattern (lucide-react style)
export { MapPinRegularDuotone, MapPinRegularDuotone as MapPinRegularDuotoneIcon, MapPinRegularDuotone as SiMapPinRegularDuotone };
export type { MapPinRegularDuotoneProps };
