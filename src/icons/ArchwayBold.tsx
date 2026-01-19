import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchwayBoldProps = Omit<IconBaseProps, 'children'>;

const ArchwayBold = memo(
  forwardRef<SVGSVGElement, ArchwayBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a9 9 0 0 1 9 9v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-3.8V10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7v9l.01.2A2 2 0 0 0 7 21h10a2 2 0 0 0 2-2v-9a7 7 0 0 0-7-7" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayBold.displayName = 'ArchwayBold';

// Triple export pattern (lucide-react style)
export { ArchwayBold, ArchwayBold as ArchwayBoldIcon, ArchwayBold as SiArchwayBold };
export default ArchwayBold;
export type { ArchwayBoldProps };
