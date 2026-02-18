import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, InfoSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zm-.5 8.75a1 1 0 0 0-1 1V16a1 1 0 1 0 2 0v-3.75a1 1 0 0 0-1-1M12 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.25a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-3.75a1 1 0 0 1 1-1M12 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

InfoSquareFillDuotone.displayName = 'InfoSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { InfoSquareFillDuotone, InfoSquareFillDuotone as InfoSquareFillDuotoneIcon, InfoSquareFillDuotone as SiInfoSquareFillDuotone };
export default InfoSquareFillDuotone;
export type { InfoSquareFillDuotoneProps };
