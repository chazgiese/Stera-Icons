import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinBoldProps = Omit<IconBaseProps, 'children'>;

const MapPinBold = memo(
  forwardRef<SVGSVGElement, MapPinBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-bold" {...props}>
      <path fillRule="evenodd" d="M12 6.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a8 8 0 0 1 8 8c0 3.37-1.95 6.35-3.75 8.4a25 25 0 0 1-3.58 3.35q-.21.17-.5.23h-.34q-.29-.05-.5-.23a15 15 0 0 1-1.07-.87c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6c0 2.63 1.55 5.15 3.25 7.1A23 23 0 0 0 12 19.72a21 21 0 0 0 2.75-2.64C16.45 15.15 18 12.63 18 10a6 6 0 0 0-6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinBold.displayName = 'MapPinBold';

// Triple export pattern (lucide-react style)
export { MapPinBold, MapPinBold as MapPinBoldIcon, MapPinBold as SiMapPinBold };
export default MapPinBold;
export type { MapPinBoldProps };
