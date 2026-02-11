import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraRegularProps = Omit<IconBaseProps, 'children'>;

const ScanCameraRegular = memo(
  forwardRef<SVGSVGElement, ScanCameraRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera" {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v1.75c0 1.1.9 2 2 2H8a.75.75 0 0 1 0 1.5H6.25a3.5 3.5 0 0 1-3.5-3.5V16c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v1.75a3.5 3.5 0 0 1-3.5 3.5H16a.75.75 0 0 1 0-1.5h1.75a2 2 0 0 0 2-2V16c0-.41.34-.75.75-.75M12 10.38a1.83 1.83 0 1 1 0 3.66 1.83 1.83 0 0 1 0-3.66" />
        <path fillRule="evenodd" d="M12.7 6.5c.3 0 .61 0 .9.08q.36.12.64.35.33.32.56.71l.18.27.1.15q.1.11.22.13h.17q.47-.01.81.04c1 .18 1.76.97 1.93 1.96q.05.34.04.82v2.54q0 .69-.02 1.17t-.24.94q-.36.7-1.04 1.07-.46.23-.94.24-.48.04-1.15.03H9.14q-.67 0-1.15-.03a2.4 2.4 0 0 1-.94-.24 2.4 2.4 0 0 1-1.04-1.07q-.21-.46-.24-.94t-.02-1.17v-2.54q-.01-.48.04-.82c.17-.99.94-1.78 1.93-1.96q.34-.06.8-.04h.18a.3.3 0 0 0 .22-.13l.1-.15.18-.27q.23-.4.56-.7.28-.25.64-.36c.29-.09.6-.08.9-.08zM11.3 8l-.46.01-.12.07a2 2 0 0 0-.26.38l-.18.27q-.1.15-.2.28-.47.57-1.21.67h-.34c-.39 0-.48.01-.54.02a.9.9 0 0 0-.73.76l-.01.55v2.54c0 .48 0 .8.02 1.05q.03.33.08.4.14.26.4.4c.05.03.14.06.37.08.24.02.55.02 1.02.02h5.72c.47 0 .78 0 1.02-.02a1 1 0 0 0 .37-.08q.26-.14.4-.4.05-.07.08-.4c.02-.25.02-.57.02-1.05v-2.54l-.01-.55A.9.9 0 0 0 16 9.7l-.54-.01-.34-.01q-.73-.1-1.21-.67-.1-.12-.2-.28l-.18-.27a2 2 0 0 0-.26-.38l-.12-.07L12.7 8z" clipRule="evenodd" />
        <path d="M8 2.75a.75.75 0 0 1 0 1.5H6.25a2 2 0 0 0-2 2V8a.75.75 0 0 1-1.5 0V6.25a3.5 3.5 0 0 1 3.5-3.5zM17.75 2.75a3.5 3.5 0 0 1 3.5 3.5V8a.75.75 0 0 1-1.5 0V6.25a2 2 0 0 0-2-2H16a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanCameraRegular.displayName = 'ScanCameraRegular';

// Triple export pattern (lucide-react style)
export { ScanCameraRegular, ScanCameraRegular as ScanCameraRegularIcon, ScanCameraRegular as SiScanCameraRegular };
export default ScanCameraRegular;
export type { ScanCameraRegularProps };
