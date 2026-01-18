import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CameraOffRegularProps = Omit<IconBaseProps, 'children'>;

const CameraOffRegular = memo(
  forwardRef<SVGSVGElement, CameraOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.97 1.97c.3-.3.77-.3 1.06 0l20 20a.75.75 0 0 1-1.06 1.06l-2.28-2.28H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-4.51c0-.6 0-1.01.06-1.36A3.75 3.75 0 0 1 5.2 6.25L1.97 3.03a.75.75 0 0 1 0-1.06m4.63 5.7-.36.06q-.24.02-.55.02c-.67 0-.9 0-1.1.04-.91.16-1.64.89-1.8 1.8-.04.2-.04.43-.04 1.1v4.51c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h11.39l-3.22-3.22A4.24 4.24 0 0 1 7.75 13c0-1.16.46-2.2 1.21-2.97zm3.43 3.42A2.74 2.74 0 0 0 12 15.75c.74 0 1.42-.3 1.91-.78z" clipRule="evenodd" />
        <path fill="currentColor" d="M13.29 3.25c.58 0 1.02 0 1.44.12q.52.16.95.5c.33.28.57.66.9 1.14l.31.48.22.32q.33.37.82.43l.38.01c.6 0 1.01 0 1.36.06a3.75 3.75 0 0 1 3.02 3.02c.06.35.06.75.06 1.36v7.06a.75.75 0 0 1-1.5 0v-7.06c0-.67 0-.9-.04-1.1a2.25 2.25 0 0 0-1.8-1.8 7 7 0 0 0-1.1-.04q-.31 0-.55-.02a2.8 2.8 0 0 1-1.8-.96q-.15-.17-.31-.45l-.32-.48a4 4 0 0 0-.6-.8q-.2-.17-.44-.24a4 4 0 0 0-1-.05H10.7c-.67 0-.85 0-1 .05q-.24.08-.43.23l-.03.03a.75.75 0 1 1-.93-1.18q.42-.34.95-.51c.42-.13.86-.12 1.44-.12z" />
    </IconBase>
  ))
);

CameraOffRegular.displayName = 'CameraOffRegular';

// Triple export pattern (lucide-react style)
export { CameraOffRegular, CameraOffRegular as CameraOffRegularIcon, CameraOffRegular as SiCameraOffRegular };
export type { CameraOffRegularProps };
