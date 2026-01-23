import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltRegularProps = Omit<IconBaseProps, 'children'>;

const LabelAltRegular = memo(
  forwardRef<SVGSVGElement, LabelAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.75 3.25a2 2 0 0 1 1.7 3.06l-3.15 5.03c-.25.4-.25.92 0 1.32l3.14 5.03a2 2 0 0 1-1.7 3.06H7.12c-.95 0-1.83-.49-2.33-1.3l-3.75-6a2.8 2.8 0 0 1 0-2.9l3.75-6c.5-.81 1.38-1.3 2.33-1.3zM7.1 4.75c-.43 0-.83.22-1.06.59l-3.75 6c-.25.4-.25.92 0 1.32l3.75 6c.23.37.63.59 1.06.59h13.64a.5.5 0 0 0 .42-.76l-3.14-5.03a2.8 2.8 0 0 1 0-2.92l3.14-5.03a.5.5 0 0 0-.42-.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltRegular.displayName = 'LabelAltRegular';

// Triple export pattern (lucide-react style)
export { LabelAltRegular, LabelAltRegular as LabelAltRegularIcon, LabelAltRegular as SiLabelAltRegular };
export default LabelAltRegular;
export type { LabelAltRegularProps };
