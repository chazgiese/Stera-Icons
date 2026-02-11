import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesBoldProps = Omit<IconBaseProps, 'children'>;

const BoxesBold = memo(
  forwardRef<SVGSVGElement, BoxesBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes-bold" {...props}>
      <path fillRule="evenodd" d="M11.62 2.07a1 1 0 0 1 .88.06L17 4.7c.3.18.5.51.5.87v4.56l4 2.29a1 1 0 0 1 .5.87v5.14a1 1 0 0 1-.5.87L17 21.87a1 1 0 0 1-1 0l-4-2.29-4 2.29a1 1 0 0 1-1 0L2.5 19.3a1 1 0 0 1-.5-.87v-5.14c0-.36.2-.7.5-.87l4-2.29V5.57A1 1 0 0 1 7 4.7l4.5-2.57zM4 17.85l2.5 1.43v-2.84L4 15zm4.5-1.41v2.84l2.5-1.43V15zm4.5 1.4 2.5 1.44v-2.84L13 15zm4.5-1.4v2.84l2.5-1.43V15zM5.02 13.29 7.5 14.7l2.48-1.42-2.48-1.42zm9 0 2.48 1.42 2.48-1.42-2.48-1.42zM8.5 10.13l2.5 1.43V8.72L8.5 7.3zm4.5-1.4v2.83l2.5-1.43V7.3zM9.51 5.56 12 7l2.48-1.42L12 4.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesBold.displayName = 'BoxesBold';

// Triple export pattern (lucide-react style)
export { BoxesBold, BoxesBold as BoxesBoldIcon, BoxesBold as SiBoxesBold };
export default BoxesBold;
export type { BoxesBoldProps };
