import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-duotone" {...props}>
      <path fill="currentColor" d="M20.89 3.25a2 2 0 0 1 1.55 3.06l-3.14 5.03c-.25.4-.25.92 0 1.32l3.14 5.03a2 2 0 0 1-1.7 3.06H9a.75.75 0 0 0 0-1.5h11.75a.5.5 0 0 0 .42-.76l-3.14-5.03a2.8 2.8 0 0 1 0-2.92l3.14-5.03a.5.5 0 0 0-.35-.76H9a.75.75 0 0 0 0-1.5h11.89" opacity={.4} />
        <path fill="currentColor" d="M9 3.25a.75.75 0 0 1 0 1.5h-.78c-1.12 0-2.16.58-2.76 1.53L2.3 11.34c-.25.4-.25.92 0 1.32l3.16 5.06c.6.95 1.64 1.53 2.76 1.53H9a.75.75 0 0 1 0 1.5h-.78a4.8 4.8 0 0 1-4.03-2.23l-3.16-5.06a2.8 2.8 0 0 1 0-2.92l3.16-5.06a4.8 4.8 0 0 1 4.03-2.23z" />
    </IconBase>
  ))
);

LabelAltRegularDuotone.displayName = 'LabelAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltRegularDuotone, LabelAltRegularDuotone as LabelAltRegularDuotoneIcon, LabelAltRegularDuotone as SiLabelAltRegularDuotone };
export default LabelAltRegularDuotone;
export type { LabelAltRegularDuotoneProps };
