import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCubeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-cube-duotone" {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 1 2.75 18v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2a.75.75 0 0 1 0-1.5h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8 2.75a.75.75 0 0 1 0 1.5H6c-.97 0-1.75.78-1.75 1.75v2a.75.75 0 0 1-1.5 0V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0V6c0-.97-.78-1.75-1.75-1.75h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.38 5.64q.61-.12 1.24 0c.49.1.93.35 1.55.7l1.71.92c.68.37 1.17.63 1.53 1.02q.46.5.68 1.14c.17.5.16 1.06.16 1.83v1.5c0 .77 0 1.32-.16 1.83q-.21.64-.68 1.14c-.36.4-.85.65-1.53 1.02l-1.7.93c-.63.34-1.07.59-1.56.69q-.61.12-1.24 0c-.49-.1-.93-.35-1.55-.7l-1.71-.92c-.68-.37-1.17-.63-1.53-1.02q-.46-.5-.68-1.14c-.17-.5-.16-1.06-.16-1.83v-1.5c0-.77 0-1.32.16-1.83q.21-.64.68-1.14c.36-.39.85-.65 1.53-1.02l1.7-.93c.63-.34 1.07-.59 1.56-.69m-4.11 4.63q-.02.28-.02.98v1.5c0 .87 0 1.13.08 1.36q.12.33.35.59c.16.17.4.3 1.15.72l1.71.93q.48.27.71.37v-4.27zm5.48 2.18v4.27l.7-.37 1.71-.93c.77-.42 1-.55 1.16-.72q.23-.25.35-.6c.07-.22.08-.48.08-1.35v-1.5c0-.48 0-.77-.02-.98zm-.43-5.34a2 2 0 0 0-.64 0c-.21.05-.43.15-1.14.54l-1.7.93q-.52.28-.76.43L12 11.15 15.92 9l-.76-.43-1.7-.93c-.7-.39-.93-.5-1.14-.54" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeRegularDuotone.displayName = 'ScanCubeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanCubeRegularDuotone, ScanCubeRegularDuotone as ScanCubeRegularDuotoneIcon, ScanCubeRegularDuotone as SiScanCubeRegularDuotone };
export default ScanCubeRegularDuotone;
export type { ScanCubeRegularDuotoneProps };
