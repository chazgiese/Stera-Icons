import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-bold-duotone" {...props}>
      <path d="m16.33 18.23-1 .6-1-.6V8.57l.49.29a1 1 0 0 0 1.03 0l.48-.3zM9.67 5.77v9.66l-.49-.29a1 1 0 0 0-.9-.06l-.13.06-.48.3V5.75l1-.6z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M21.49 3.14A1 1 0 0 1 23 4v12a1 1 0 0 1-.49.86l-6.66 4a1 1 0 0 1-1.03 0l-6.15-3.7-6.16 3.7A1 1 0 0 1 1 20V8a1 1 0 0 1 .49-.86l6.66-4 .12-.06a1 1 0 0 1 .91.06l6.15 3.7zM3 8.57v9.66l5.15-3.09.12-.06a1 1 0 0 1 .91.06l6.15 3.7 5.67-3.4V5.76l-5.15 3.09a1 1 0 0 1-1.03 0l-6.15-3.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapBoldDuotone.displayName = 'MapBoldDuotone';

// Triple export pattern (lucide-react style)
export { MapBoldDuotone, MapBoldDuotone as MapBoldDuotoneIcon, MapBoldDuotone as SiMapBoldDuotone };
export default MapBoldDuotone;
export type { MapBoldDuotoneProps };
