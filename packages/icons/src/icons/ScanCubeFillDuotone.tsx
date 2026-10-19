import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.5c0 .97.78 1.75 1.75 1.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.5c0 1.8-1.46 3.25-3.25 3.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.97 0 1.75-.78 1.75-1.75V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.97 0-1.75.78-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-1.8 1.46-3.25 3.25-3.25zM18.5 2.25c1.8 0 3.25 1.46 3.25 3.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-.97-.78-1.75-1.75-1.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.38 5.64q.61-.12 1.24 0c.49.1.93.35 1.55.7l1.71.92c.68.37 1.17.63 1.53 1.02q.46.5.68 1.14c.17.5.16 1.06.16 1.83v1.5c0 .77 0 1.32-.16 1.83q-.21.64-.68 1.14c-.36.4-.85.65-1.53 1.02l-1.7.93c-.63.34-1.07.59-1.56.69q-.61.12-1.24 0c-.49-.1-.93-.35-1.55-.7l-1.71-.92c-.68-.37-1.17-.63-1.53-1.02q-.46-.5-.68-1.14c-.17-.5-.16-1.06-.16-1.83v-1.5c0-.77 0-1.32.16-1.83q.21-.64.68-1.14c.36-.39.85-.65 1.53-1.02l1.7-.93c.63-.34 1.07-.59 1.56-.69m1.37 6.8v4.28l.7-.37 1.72-.93c.76-.42.99-.55 1.15-.72q.23-.25.35-.6c.07-.22.08-.48.08-1.35v-1.5c0-.48 0-.77-.02-.98zm-.43-5.33q-.32-.06-.64 0c-.21.05-.43.15-1.14.54l-1.7.93q-.52.28-.76.43L12 11.15 15.92 9l-.75-.43-1.71-.93c-.7-.39-.93-.5-1.14-.54" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeFillDuotone.displayName = 'ScanCubeFillDuotone';

// Triple export pattern
export { ScanCubeFillDuotone, ScanCubeFillDuotone as ScanCubeFillDuotoneIcon, ScanCubeFillDuotone as SiScanCubeFillDuotone };
export default ScanCubeFillDuotone;
export type { ScanCubeFillDuotoneProps };
