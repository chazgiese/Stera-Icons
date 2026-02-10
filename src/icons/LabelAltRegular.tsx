import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltRegularProps = Omit<IconBaseProps, 'children'>;

const LabelAltRegular = memo(
  forwardRef<SVGSVGElement, LabelAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.06 4.25c1.42 0 2.25 1.6 1.42 2.77l-3.04 4.25a1.25 1.25 0 0 0 0 1.46l3.04 4.25c.83 1.16 0 2.77-1.42 2.77H8.03c-.89 0-1.72-.43-2.24-1.15l-3.57-5a2.75 2.75 0 0 1 0-3.2l3.57-5a2.8 2.8 0 0 1 2.24-1.15zM8.03 5.75c-.4 0-.78.2-1.02.52l-3.57 5a1.25 1.25 0 0 0 0 1.46l3.57 5c.24.32.62.52 1.02.52h12.03c.2 0 .32-.23.2-.4l-3.04-4.25a2.75 2.75 0 0 1 0-3.2l3.04-4.25c.12-.17 0-.4-.2-.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltRegular.displayName = 'LabelAltRegular';

// Triple export pattern (lucide-react style)
export { LabelAltRegular, LabelAltRegular as LabelAltRegularIcon, LabelAltRegular as SiLabelAltRegular };
export default LabelAltRegular;
export type { LabelAltRegularProps };
