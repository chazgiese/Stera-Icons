import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 12.88v9.33c-4.97-.42-8.92-4.37-9.34-9.34zM22.21 12.88c-.42 4.96-4.37 8.91-9.34 9.33v-9.34zM12.88 1.79c4.96.42 8.91 4.37 9.33 9.34h-9.34zM11.13 11.13H1.79c.42-4.97 4.37-8.92 9.34-9.34z" opacity={0.4} />
        <path d="M12 1.75q.45 0 .88.04v9.34h9.33q.03.43.04.87 0 .45-.04.88h-9.34v9.33q-.43.03-.87.04-.45 0-.87-.04v-9.34H1.79q-.04-.43-.04-.87 0-.45.04-.87h9.34V1.79q.43-.04.87-.04" />
    </IconBase>
  ))
);

CircleDivideCrossFillDuotone.displayName = 'CircleDivideCrossFillDuotone';

// Triple export pattern
export { CircleDivideCrossFillDuotone, CircleDivideCrossFillDuotone as CircleDivideCrossFillDuotoneIcon, CircleDivideCrossFillDuotone as SiCircleDivideCrossFillDuotone };
export default CircleDivideCrossFillDuotone;
export type { CircleDivideCrossFillDuotoneProps };
