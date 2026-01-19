import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-duotone" {...props}>
      <path fill="currentColor" d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H9a.75.75 0 0 0 0-1.5h9c1.8 0 3.25-1.46 3.25-3.25V8c0-1.8-1.46-3.25-3.25-3.25H9a.75.75 0 0 0 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M9 3.25a.75.75 0 0 1 0 1.5h-.78c-1.12 0-2.16.58-2.76 1.53L2.3 11.34c-.25.4-.25.92 0 1.32l3.16 5.06c.6.95 1.64 1.53 2.76 1.53H9a.75.75 0 0 1 0 1.5h-.78a4.8 4.8 0 0 1-4.03-2.23l-3.16-5.06a2.8 2.8 0 0 1 0-2.92l3.16-5.06a4.8 4.8 0 0 1 4.03-2.23z" />
    </IconBase>
  ))
);

LabelRegularDuotone.displayName = 'LabelRegularDuotone';

// Triple export pattern (lucide-react style)
export { LabelRegularDuotone, LabelRegularDuotone as LabelRegularDuotoneIcon, LabelRegularDuotone as SiLabelRegularDuotone };
export type { LabelRegularDuotoneProps };
