import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFill = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-fill" {...props}>
      <path d="M4.12 7.82a1 1 0 0 1 1.09.22l10.74 10.74a1 1 0 0 1-.09 1.49q-.98.79-2.13 1.36l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V8.74a1 1 0 0 1 .62-.92M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23q0 2.22-.76 4.24a1 1 0 0 1-1.64.36L7.56 4.73a1 1 0 0 1 .36-1.64l3.73-1.4z" />
    </IconBase>
  ))
);

ShieldSlashFill.displayName = 'ShieldSlashFill';

// Triple export pattern (lucide-react style)
export { ShieldSlashFill, ShieldSlashFill as ShieldSlashFillIcon, ShieldSlashFill as SiShieldSlashFill };
export default ShieldSlashFill;
export type { ShieldSlashFillProps };
