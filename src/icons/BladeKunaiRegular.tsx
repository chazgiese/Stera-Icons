import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeKunaiRegularProps = Omit<IconBaseProps, 'children'>;

const BladeKunaiRegular = memo(
  forwardRef<SVGSVGElement, BladeKunaiRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-kunai" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 1.25a2.75 2.75 0 1 1-1.34 5.15l-3.6 3.6.97.97a.75.75 0 0 1-1.06 1.06l-.47-.47-.76 4.56a.8.8 0 0 1-.38.54l-11 6a.75.75 0 0 1-1.02-1.02l6-11 .05-.07q.18-.25.49-.31l4.56-.76-.47-.47a.75.75 0 1 1 1.06-1.06l.97.97 3.6-3.6q-.34-.6-.35-1.34A2.75 2.75 0 0 1 20 1.25M8.48 11.68l-4.6 8.44 8.44-4.6.77-4.6zM20 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeKunaiRegular.displayName = 'BladeKunaiRegular';

// Triple export pattern (lucide-react style)
export { BladeKunaiRegular, BladeKunaiRegular as BladeKunaiRegularIcon, BladeKunaiRegular as SiBladeKunaiRegular };
export default BladeKunaiRegular;
export type { BladeKunaiRegularProps };
