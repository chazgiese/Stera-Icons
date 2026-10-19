import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.5c0 .97.78 1.75 1.75 1.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.5c0 1.8-1.46 3.25-3.25 3.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.97 0 1.75-.78 1.75-1.75V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.97 0-1.75.78-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-1.8 1.46-3.25 3.25-3.25zM18.5 2.25c1.8 0 3.25 1.46 3.25 3.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-.97-.78-1.75-1.75-1.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M12 10.37c1.01 0 1.83.83 1.83 1.84s-.82 1.83-1.83 1.83-1.83-.82-1.83-1.83.82-1.84 1.83-1.84" />
        <path fillRule="evenodd" d="M12.7 6.5c.3 0 .61 0 .9.08q.36.12.64.35.33.32.56.71l.18.27.1.15q.1.11.22.13h.17q.47-.01.81.04c1 .18 1.76.97 1.93 1.96q.05.34.04.82v2.54q0 .69-.02 1.17t-.24.94q-.36.7-1.04 1.07-.45.23-.94.24-.48.04-1.15.03H9.14q-.67 0-1.15-.03t-.94-.24q-.68-.36-1.04-1.07c-.15-.3-.2-.62-.24-.94q-.02-.48-.02-1.17V11q-.01-.48.04-.82c.17-.99.94-1.78 1.93-1.96q.34-.06.8-.04h.18q.13-.02.22-.13l.1-.15.18-.27q.23-.4.56-.7.28-.25.64-.36c.29-.09.6-.08.9-.08zM11.3 8l-.46.01-.12.07c-.02.02-.05.05-.26.38l-.18.27q-.1.15-.2.28-.47.57-1.21.67h-.34c-.39 0-.48.01-.54.02-.36.07-.66.36-.73.75l-.01.56v2.54c0 .48 0 .8.02 1.05q.03.33.08.4.14.26.4.4c.05.03.14.06.37.08.24.02.55.02 1.02.02h5.72c.47 0 .78 0 1.02-.02s.32-.05.37-.08q.26-.14.4-.4.05-.07.08-.4c.02-.25.02-.57.02-1.05V11l-.01-.56c-.07-.39-.37-.68-.73-.75l-.54-.01-.34-.01q-.73-.1-1.21-.67-.1-.12-.2-.28l-.18-.27c-.21-.33-.24-.36-.26-.38l-.12-.07L12.7 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraRegularDuotone.displayName = 'ScanCameraRegularDuotone';

// Triple export pattern
export { ScanCameraRegularDuotone, ScanCameraRegularDuotone as ScanCameraRegularDuotoneIcon, ScanCameraRegularDuotone as SiScanCameraRegularDuotone };
export default ScanCameraRegularDuotone;
export type { ScanCameraRegularDuotoneProps };
