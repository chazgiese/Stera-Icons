import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleRegularProps = Omit<IconBaseProps, 'children'>;

const BottleRegular = memo(
  forwardRef<SVGSVGElement, BottleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.25 2.25a.75.75 0 0 1 .04 1.5l.06.32.34 3.76q.04.38.27.67l1.19 1.48q.6.77.6 1.72V19A2.75 2.75 0 0 1 14 21.75h-4A2.75 2.75 0 0 1 7.25 19v-7.3c0-.62.21-1.23.6-1.72L9.04 8.5q.23-.29.27-.67l.34-3.76.06-.32a.75.75 0 0 1 .04-1.5zm-2.6 1.5a.5.5 0 0 0-.5.46l-.35 3.76a2.8 2.8 0 0 1-.59 1.47l-1.19 1.48q-.26.34-.27.78V19c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-7.3q0-.43-.27-.78l-1.19-1.48a2.8 2.8 0 0 1-.6-1.47l-.33-3.76a.5.5 0 0 0-.5-.46z" clipRule="evenodd" />
    </IconBase>
  ))
);

BottleRegular.displayName = 'BottleRegular';

// Triple export pattern (lucide-react style)
export { BottleRegular, BottleRegular as BottleRegularIcon, BottleRegular as SiBottleRegular };
export default BottleRegular;
export type { BottleRegularProps };
