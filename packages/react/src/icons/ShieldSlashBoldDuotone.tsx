import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 7.96a1 1 0 0 1 1 1v2.02a11 11 0 0 0 6.08 9.44l.92.46.92-.46a11 11 0 0 0 1.7-1.05 1 1 0 0 1 1.2 1.6 13 13 0 0 1-2 1.24l-1.37.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 11.04L3 10.58V8.96a1 1 0 0 1 1-1M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58q-.01 2.17-.68 4.16a1 1 0 0 1-1.9-.64q.57-1.69.58-3.52V5.7l-7-2.62L8.68 4.3a1 1 0 0 1-.7-1.87l3.67-1.38z" />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashBoldDuotone.displayName = 'ShieldSlashBoldDuotone';

export { ShieldSlashBoldDuotone };
export type { ShieldSlashBoldDuotoneProps };
