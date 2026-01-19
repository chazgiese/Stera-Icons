import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanCameraBoldProps = Omit<IconBaseProps, 'children'>;

const ScanCameraBold = memo(
  forwardRef<SVGSVGElement, ScanCameraBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera-bold" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M12 10.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M13.02 5.75q.38-.01.79.1.42.13.76.42c.28.24.47.56.64.83l.2.3.08.13.01.02q.07.07.12.07h.17q.5-.01.92.05A2.8 2.8 0 0 1 18.96 10q.05.41.04.94v2.82q0 .76-.03 1.31a3 3 0 0 1-.27 1.1q-.4.83-1.21 1.27c-.36.19-.74.26-1.1.3q-.54.02-1.27.02H8.88q-.73 0-1.27-.03a3 3 0 0 1-1.1-.3 3 3 0 0 1-1.21-1.25 3 3 0 0 1-.27-1.11q-.04-.54-.03-1.31v-2.82q-.01-.53.04-.94A2.8 2.8 0 0 1 7.3 7.67q.41-.06.92-.04h.17q.05-.01.12-.08l.01-.02.09-.13.19-.3c.17-.27.36-.59.64-.83a2.2 2.2 0 0 1 1.55-.52zm-2.18 2h-.05l-.06.04-.04.05-.22.34-.19.3q-.1.16-.23.33c-.35.44-.87.73-1.44.8q-.21.02-.4.02h-.55a.8.8 0 0 0-.65.7l-.01.6v2.82c0 .54 0 .89.02 1.15s.06.35.07.39q.13.25.36.37c.03.02.1.05.33.07.25.02.58.02 1.1.02h6.24c.52 0 .85 0 1.1-.02.23-.02.3-.05.33-.07q.23-.12.36-.37c.01-.04.05-.13.07-.39s.02-.6.02-1.15v-2.82l-.01-.6a.8.8 0 0 0-.65-.7h-.55q-.18 0-.4-.02a2.2 2.2 0 0 1-1.44-.8q-.13-.16-.23-.33l-.2-.3-.21-.34-.04-.05-.06-.03h-.05l-.39-.01h-1.93" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanCameraBold.displayName = 'ScanCameraBold';

// Triple export pattern (lucide-react style)
export { ScanCameraBold, ScanCameraBold as ScanCameraBoldIcon, ScanCameraBold as SiScanCameraBold };
export default ScanCameraBold;
export type { ScanCameraBoldProps };
