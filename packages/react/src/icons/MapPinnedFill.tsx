import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapPinnedFillProps = Omit<IconBaseProps, 'children'>;

const MapPinnedFill = memo(
  forwardRef<SVGSVGElement, MapPinnedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 10.25a4.8 4.8 0 0 1 4.75 4.84c0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03a19 19 0 0 1-2.08 2.01v.01h-.01l-.03.03-.12.06-.04.02-.22.06h-.11l-.23-.05-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.18-.14a17 17 0 0 1-3.37-3.9 5 5 0 0 1-.72-2.44A4.8 4.8 0 0 1 18 10.25m0 3.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="m8.72 3 .08.01.06.01.06.01.07.03.06.02.05.02.06.03h.01l.01.01 6.15 3.7 6.16-3.7A1 1 0 0 1 23 4v6.65a7 7 0 0 0-2-1.58v-3.3l-4.66 2.79c-2.9.75-4.99 3.43-4.99 6.53 0 1.3.47 2.47.95 3.35q.46.81 1 1.5l-4.63-2.77-6.16 3.69A1 1 0 0 1 1 20V8a1 1 0 0 1 .49-.86l6.66-4h.01l.01-.01.07-.03.04-.02.06-.02.07-.03.07-.01.05-.01h.08L8.65 3h.07M3 8.57v9.66l4.67-2.8V5.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedFill.displayName = 'MapPinnedFill';

// Triple export pattern (lucide-react style)
export { MapPinnedFill, MapPinnedFill as MapPinnedFillIcon, MapPinnedFill as SiMapPinnedFill };
export type { MapPinnedFillProps };
