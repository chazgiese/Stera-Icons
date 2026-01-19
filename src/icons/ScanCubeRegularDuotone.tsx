import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanCubeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-cube-duotone" {...props}>
      <path d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.3 4.7q.7-.15 1.4 0c.54.1 1.04.39 1.78.78l2.02 1.1c.81.43 1.37.72 1.79 1.16q.53.58.78 1.3c.19.58.18 1.22.18 2.14v1.64c0 .92 0 1.56-.18 2.13q-.26.74-.78 1.3c-.42.45-.98.74-1.79 1.18l-2.02 1.09c-.74.4-1.24.67-1.78.78q-.7.15-1.4 0c-.54-.1-1.04-.39-1.78-.78l-2.02-1.1c-.81-.43-1.37-.72-1.79-1.16a4 4 0 0 1-.78-1.3c-.19-.58-.18-1.22-.18-2.14v-1.64c0-.92 0-1.56.18-2.13q.25-.74.78-1.3C6.13 7.3 6.7 7 7.5 6.56l2.02-1.09c.74-.4 1.24-.67 1.78-.78m-5 5.08c-.04.26-.05.65-.05 1.4v1.64c0 1.03.01 1.37.1 1.66q.15.43.46.75c.2.22.5.4 1.4.88l2.02 1.09c.5.27.8.42 1.02.51v-5.26zm6.45 2.67v5.26c.22-.09.52-.24 1.02-.51l2.02-1.1c.9-.48 1.2-.65 1.4-.87q.3-.32.45-.75c.1-.29.11-.63.11-1.66v-1.64c0-.75 0-1.14-.05-1.4zm-.35-6.28a2 2 0 0 0-.8 0c-.28.06-.55.2-1.37.63L8.21 7.9c-.56.3-.88.47-1.1.62L12 11.15l4.89-2.63c-.22-.15-.55-.33-1.1-.63L13.77 6.8a6 6 0 0 0-1.37-.63" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeRegularDuotone.displayName = 'ScanCubeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanCubeRegularDuotone, ScanCubeRegularDuotone as ScanCubeRegularDuotoneIcon, ScanCubeRegularDuotone as SiScanCubeRegularDuotone };
export type { ScanCubeRegularDuotoneProps };
