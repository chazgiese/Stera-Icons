import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanCameraRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera-duotone" {...props}>
      <path d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M12 10.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M13.02 6q.36 0 .71.09.38.12.68.37c.24.21.4.5.6.78l.18.3c.1.14.1.16.12.17q.12.15.29.16h.19q.51-.01.87.05a2.6 2.6 0 0 1 2.05 2.12q.05.35.04.89v2.82q0 .77-.03 1.29-.02.54-.24 1.02-.37.75-1.11 1.15c-.32.17-.66.23-1 .26q-.51.04-1.25.03H8.88q-.74 0-1.25-.03-.52-.03-1-.26a2.6 2.6 0 0 1-1.1-1.15 3 3 0 0 1-.25-1.02q-.04-.52-.03-1.29v-2.82q-.01-.54.04-.9a2.6 2.6 0 0 1 2.05-2.11q.36-.06.87-.04h.2q.15-.03.28-.17l.12-.17.19-.3c.18-.29.35-.57.6-.78A2 2 0 0 1 10.97 6zm-1.8 1.5c-.42 0-.47 0-.5.02l-.15.08c-.04.03-.07.08-.3.44l-.2.3-.21.31c-.32.4-.78.65-1.28.71q-.18.02-.37.02l-.6.01c-.4.08-.76.43-.84.9-.02.09-.02.2-.02.64v2.82c0 .54 0 .9.02 1.17s.06.4.1.48q.16.32.46.48c.07.04.18.08.43.1.26.02.6.02 1.12.02h6.24c.52 0 .86 0 1.12-.02.25-.02.36-.06.43-.1q.3-.16.46-.48c.04-.08.08-.2.1-.48s.02-.63.02-1.17v-2.82c0-.43 0-.55-.02-.64a1.1 1.1 0 0 0-.85-.9 4 4 0 0 0-.6-.02h-.36c-.5-.07-.96-.33-1.28-.72l-.2-.3-.2-.3a2 2 0 0 0-.3-.45l-.16-.08a2 2 0 0 0-.5-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraRegularDuotone.displayName = 'ScanCameraRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanCameraRegularDuotone, ScanCameraRegularDuotone as ScanCameraRegularDuotoneIcon, ScanCameraRegularDuotone as SiScanCameraRegularDuotone };
export default ScanCameraRegularDuotone;
export type { ScanCameraRegularDuotoneProps };
