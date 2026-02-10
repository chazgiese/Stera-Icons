import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinMinusBoldProps = Omit<IconBaseProps, 'children'>;

const MapPinMinusBold = memo(
  forwardRef<SVGSVGElement, MapPinMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-minus-bold" {...props}>
      <path fill="currentColor" d="M14.5 9a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a8 8 0 0 1 8 8c0 3.37-1.95 6.35-3.75 8.4a25 25 0 0 1-3.64 3.4q-.2.14-.44.18h-.34a1 1 0 0 1-.4-.16h-.01l-.01-.01-.02-.02-.3-.23q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6c0 2.63 1.55 5.15 3.25 7.1A23 23 0 0 0 12 19.72a21 21 0 0 0 2.75-2.64C16.45 15.15 18 12.63 18 10a6 6 0 0 0-6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinMinusBold.displayName = 'MapPinMinusBold';

// Triple export pattern (lucide-react style)
export { MapPinMinusBold, MapPinMinusBold as MapPinMinusBoldIcon, MapPinMinusBold as SiMapPinMinusBold };
export default MapPinMinusBold;
export type { MapPinMinusBoldProps };
