import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.5c0 .97.78 1.75 1.75 1.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.5c0 1.8-1.46 3.25-3.25 3.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.97 0 1.75-.78 1.75-1.75V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.97 0-1.75.78-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-1.8 1.46-3.25 3.25-3.25zM18.5 2.25c1.8 0 3.25 1.46 3.25 3.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-.97-.78-1.75-1.75-1.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M15.08 8.4c.47-.5 1.26-.54 1.77-.07.5.46.54 1.26.07 1.76l-4.88 5.33-.33.34c-.13.12-.34.3-.64.4q-.6.17-1.18-.03c-.3-.12-.5-.3-.62-.42l-.32-.36-1.9-2.3c-.45-.53-.38-1.32.15-1.76s1.32-.37 1.76.16l1.58 1.9z" />
    </IconBase>
  ))
);

ScanCheckFillDuotone.displayName = 'ScanCheckFillDuotone';

// Triple export pattern
export { ScanCheckFillDuotone, ScanCheckFillDuotone as ScanCheckFillDuotoneIcon, ScanCheckFillDuotone as SiScanCheckFillDuotone };
export default ScanCheckFillDuotone;
export type { ScanCheckFillDuotoneProps };
